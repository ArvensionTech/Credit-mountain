import { User, Child } from "../models/user.js";

function createChild(request, response) {
  const { name, age } = request.body;
  const { id } = request.session.user;
  (async () => {
    await Child.create({ name, age, userId: id })
      .then((result) => {
        return response.sendStatus(201);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}
function updateChild(request, response) {
  const { name, age, id } = request.body;
  (async () => {
    await Child.update({ name, age }, { where: { id } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function deleteChild(request, response) {
  const { id } = request.body;
  (async () => {
    await Child.destroy({ where: { id } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function viewChildren(request, response) {
  const { id } = request.params.id;
  (async () => {
    await Child.findAll({ where: { userId: id } })
      .then((result) => {
        return response.status(200).json(result);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function viewChild(request, response) {
  const { id } = request.params.id;
  (async () => {
    await Child.findOne({ where: { id } })
      .then((result) => {
        return response.status(200).json(result);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

export { createChild, updateChild, deleteChild, viewChildren, viewChild };
