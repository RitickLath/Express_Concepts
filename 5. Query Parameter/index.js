const express = require("express");
const app = express();

app.get("/home/:id", (req, res) => {
  // reading parameter through destructuring
  const { id } = req.params;
  // reading parameter using chaining
  const parameter = req.params.id;
  res.send(`Id through destructuring ${id} Id through chaining ${parameter} `);
});

app.listen(3000, () => {
  console.log("listening");
});
