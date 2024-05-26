const express = require("express");
const app = express();

app.get(`/:id`, (req, res) => {
  res.send(atob(req.params.id));
});

app.listen(3000, () => {
  console.log("listening");
});

// btoa -> global object to encode
// atob -> global object to decode

// btoa can be used in frontend to encode actual id
// and atoa in backend to decode the id fetched in URL
// Example:
// If frontend want to make request to /1 then it will do like
// btoa(1) now in url 1 will not look like 1 its encode into (MQ==)
// and in backend using atob we will decode it and get back 1
