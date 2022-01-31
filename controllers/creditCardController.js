import { User, CreditCard } from "../models/user.js";

function createCreditCard(request, response) {
  const { type, cardNmber, securityCode, expirationDate, monthlyLimit, childId } = request.body;
  (async () => {
    await CreditCard.create({ type, cardNmber, securityCode, expirationDate, monthlyLimit, childId })
      .then((result) => {
        return response.sendStatus(201);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function updateCreditCard(request, response) {
  const { monthlyLimit, childId } = request.body;
  (async () => {
    await CreditCard.update({ monthlyLimit }, { where: { childId } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function deleteCreditCard(request, response) {
  const { id } = request.body;
  (async () => {
    await CreditCard.destroy({ where: { id } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}
function viewCreditCard(request, response) {
  const { id } = request.params.id;
  (async () => {
    await CreditCard.findOne({ where: { id } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function viewAllCreditCard(request, response) {
  const { id } = request.session.user;
  (async () => {
    await CreditCard.findAll({ where: { userId: id } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

function viewAllCreditCardUnderChild(request, response) {
  const { childId } = request.params.childId;
  (async () => {
    await CreditCard.findAll({ where: { childId: childId } })
      .then((result) => {
        return response.sendStatus(200);
      })
      .catch((error) => {
        return response.sendStatus(400);
      });
  })();
}

export { createCreditCard, updateCreditCard, deleteCreditCard, viewCreditCard, viewAllCreditCard, viewAllCreditCardUnderChild };
