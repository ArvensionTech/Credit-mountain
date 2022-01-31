import express from "express";
import auth from "../middleware/auth.js";
import { signIn, signUp, userNow } from "../controllers/authController.js";
const authRouter = express.Router();

const authUrl = `/api/v1/auth`;

authRouter.post(`${authUrl}/sign-in`,  signIn);
authRouter.post(`${authUrl}/sign-up`, signUp);
authRouter.get(`${authUrl}/user`,auth, userNow);

export default authRouter;
