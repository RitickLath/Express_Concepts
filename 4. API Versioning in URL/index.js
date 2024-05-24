const express = require("express");

const app = express();
const PORT = 3000;

// versioning in URL helps us to make the new development go smooth without interruption current service
app.get("/api/v1/home", (req, res) => {
  res.json({
    status: "success",
    data: {
      msg: "Data is Sent",
    },
  });
});

app.listen(PORT, () => {
  console.log("Server Listening at PORT: 3000");
});
