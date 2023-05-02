const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/userRoute");

const connection = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017`);
  } catch (error) {
    console.log(error);
  }
};
app.use("/users", userRoute);
app.listen(3000, () => {
  connection();
  console.log("connected");
});
