const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo DB");
  })
  .catch((err) => {
    console.log(err);
  });
