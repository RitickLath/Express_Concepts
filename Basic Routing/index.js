const express = require("express");

const app = express();

// GET METHOD ON / ROUTE
app.get("/", (req, res) => {
  res.status(200).send("In Home Page, Get Method");
});

// POST METHOD ON / ROUTE
app.post("/", (req, res) => {
  res.status(200).send("In Home Page, Post Method");
});

// PATCH METHOD ON / ROUTE
app.patch("/", (req, res) => {
  res.status(200).send("In Home Page, Patch Method");
});

// DELETE METHOD ON / ROUTE
app.delete("/", (req, res) => {
  res.status(200).send("In Home Page, Delete Method");
});
