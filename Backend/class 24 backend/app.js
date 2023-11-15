require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const router = require("./routes");
const cloudinary = require("cloudinary").v2;

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

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

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
