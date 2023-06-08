const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const projectRouter = require("./routes/ProjectRouter");
const authRouter = require("./routes/AuthRouter");

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/auth", authRouter);

app.use("/projects", projectRouter);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo DB");
  })
  .catch((err) => {
    console.log(err);
  });
