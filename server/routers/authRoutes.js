import express from "express";
import { login, logout, register, sendVerifyOtp, verifyEmail } from "../controllers/authControllers.js";
import { userAuth } from "../middleware/userAuth.js";

export const authRouters = express.Router()

authRouters.post("/register", register);
authRouters.post("/login", login);
authRouters.post("/logout", logout);
authRouters.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouters.post("/verify-account", userAuth, verifyEmail);
