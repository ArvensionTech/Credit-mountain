import { User } from "../models/user.js";
import bcrypt from "bcrypt";

function signUp(request, response) {
  const { name, email, password,confirmPassword } = request.body;

  if (name && email && password && confirmPassword) {
    if(password===confirmPassword){
      (async () => {
        await User.create({ name, email, password: bcrypt.hashSync(password, 10) })
        .then((result) => response.sendStatus(201))
        .catch((error) => {
          console.log(error);
          response.status(203).send(error);
        });
      })();
    }
    else{
      return response.status(401).send("Passwords do not Match")
    }
  } else {
    return response.sendStatus(401);
  }
}

function signIn(request, response) {
  const { email, password } = request.body;
  (async () => {
    await User.findOne({ where: { email } })
      .then((userData) => {
        bcrypt
          .compare(password || "", userData?.dataValues?.password)
          .then((result) => {
            request.session.user = userData;
            // console.log(request.session?.user);
            if (result) {
              response.status(200).json({ loggedIn: true, id: userData?.dataValues?.id, email: userData?.dataValues?.email, name: userData?.dataValues?.name, message: "Login Successfull" });
            } else {
              response.status(202).send({ message: "UserID or Password is Incorrect" });
            }
          })
          .catch((error) => {
            console.log(error);
            response.status(202).send({ message: "UserName or Password is Incorrect" });
          });
      })
      .catch((error) => {
        console.log(error);
        response.sendStatus(400);
      });
  })();
}

function userNow(request, response) {
  return response.status(200).send(request.session?.user?.name);
}

export { signUp, signIn, userNow };
