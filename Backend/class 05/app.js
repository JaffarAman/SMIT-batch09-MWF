const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./model/userSchema");
const app = express();
const PORT = 5000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoDB connection
const DB_URI = `mongodb+srv://admin:admin@cluster0.c3vxsty.mongodb.net/`;
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// APP API's

app.post("/api/createuser", async (request, response) => {
  try {
    console.log(request.body);
    const body = request.body;

    const objToSend = {
      full_name: body.fullName,
      age: body.age,
      email: body.email,
    };
    const data = await UserModel.create(objToSend);
    response.json({
      message: "User successfully created",
      status: true,
      data,
    });
  } catch (error) {
    console.log(error.message);
    response.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
});

app.get("/api/getuser", async (req, res) => {
  try {
    const userRecords = await UserModel.find({});
    console.log(userRecords);
    res.json({
      message: "data get",
      status: true,
      data: userRecords,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
});

app.get("/", (request, response) => {
  response.json({
    message: "SERVER UP",
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
