const express = require("express"); //express
const PORT = 5000; //create PORT
const app = express(); // intiatize express app

app.listen(PORT, () => {
  console.log("server running on localhost:5000");
});
