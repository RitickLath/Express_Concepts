const express = require("express");
const app = express();

// middleware for parsing json from body
app.use(express.json());

app.get("/", (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  res.json(bodyData);
});

app.listen(3000, () => {
  console.log("listening");
});
