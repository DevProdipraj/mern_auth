import express from "express";
import { login, logout, register } from "../controllers/authControllers.js";

export const authRouters = express.Router()

authRouters.post("/register", register);
authRouters.post("/login", login);
authRouters.post("/logout", logout);
