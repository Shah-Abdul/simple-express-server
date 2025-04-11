const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const env = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World!", env });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port ",
      PORT
    );
  else console.log("Error occurred, server can't start", error);
});
