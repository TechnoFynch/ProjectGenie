const express = require("express");
const { register, login } = require("../controllers/AuthController");

const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post("/register", register);

authRouter.post("/login", login);

module.exports = authRouter;
