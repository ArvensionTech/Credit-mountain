import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import sequelize from "./config/database.js";
import authRouter from "./routes/authRouter.js";
import childRouter from "./routes/childRouter.js";
import creditCardRouter from "./routes/creditCardRouter.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "a#Key$To#Use&For#Authentication@GLRpuaos#From_ARVENSION_57419", resave: false, saveUninitialized: false, maxAge: Date.now() + 86400000 }));

app.use(authRouter);
app.use(childRouter);
app.use(creditCardRouter);

sequelize
  .sync()
  .then((response) => {
    // console.log(response);
    const port = process.env.PORT || 5000;
    app.listen(port, "localhost", () => console.log(`DB Connected and Server Started at port ${port}`));
  })
  .catch((error) => console.error(error));
