const express = require("express");

const app = express();
const PORT = 3000;

// Better JSON Structure
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user1: "Ritick",
      user2: "Aryan",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});
