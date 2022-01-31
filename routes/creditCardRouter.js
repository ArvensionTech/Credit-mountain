import express from "express";
import auth from "../middleware/auth.js";
import { createCreditCard, updateCreditCard, deleteCreditCard, viewCreditCard, viewAllCreditCard, viewAllCreditCardUnderChild } from "../controllers/creditCardController.js";
const creditCardRouter = express.Router();

const creditCardUrl = `/api/v1/credit-card`;

creditCardRouter.post(`${creditCardUrl}`, auth, createCreditCard);
creditCardRouter.put(`${creditCardUrl}`, auth, updateCreditCard);
creditCardRouter.delete(`${creditCardUrl}`, auth, deleteCreditCard);
creditCardRouter.get(`${creditCardUrl}/:id`, auth, viewCreditCard);
creditCardRouter.get(`${creditCardUrl}`, auth, viewAllCreditCard);
creditCardRouter.get(`${creditCardUrl}/:childId`, auth, viewAllCreditCardUnderChild);

export default creditCardRouter;
