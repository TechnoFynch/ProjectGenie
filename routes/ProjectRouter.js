const express = require("express");
const { index } = require("../controllers/ProjectController");

const projectRouter = express.Router();

projectRouter.use(express.json());

projectRouter.get("/", index);

module.exports = projectRouter;
