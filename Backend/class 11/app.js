require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const router = require("./routes");
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cros
app.use(cors());

//mongoDB connection
const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// APP API's

app.use(router);

app.get("/", (request, response) => {
  response.json({
    message: "SERVER UP",
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
