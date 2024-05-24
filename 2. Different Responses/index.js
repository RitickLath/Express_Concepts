const express = require("express");

const app = express();

// sending simple text
app.get("/1", (req, res) => {
  res.send("Basic Text");
});

// sending JSON
app.get("/2", (req, res) => {
  res.json({ status: "success" });
});

// seving static Files: Like HTML pages, images
app.get("/3", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// redirect to another route here: "/1"
app.get("/4", (req, res) => {
  res.redirect("/1");
});

// res.render -> for EJS/tempelate engine

// setting status
app.get("/5", (req, res) => {
  res.status(200).send("Status is set to 200");
});

app.listen(3000, () => {
  console.log("Listening at PORT: 3000");
});
