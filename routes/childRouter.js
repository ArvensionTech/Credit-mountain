import express from "express";
import auth from "../middleware/auth.js";
import { createChild, updateChild, deleteChild, viewChildren, viewChild } from "../controllers/childController.js";
const childRouter = express.Router();

const childUrl = `/api/v1/child`;

childRouter.post(`${childUrl}`,auth, createChild);
childRouter.put(`${childUrl}`,auth, updateChild);
childRouter.delete(`${childUrl}`,auth, deleteChild);
childRouter.get(`${childUrl}`,auth, viewChildren);
childRouter.get(`${childUrl}/:id`,auth, viewChild);

export default childRouter;
