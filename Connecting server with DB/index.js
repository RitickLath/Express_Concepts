const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Established");
  })
  .catch((error) => {
    console.log("Error Occured");
  });

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server Listening at PORT: 3000");
});
