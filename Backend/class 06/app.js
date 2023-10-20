const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserModel = require("./model/userSchema");
const app = express();
const PORT = 5000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoDB connection
const DB_URI = `mongodb+srv://admin:admin@cluster0.c3vxsty.mongodb.net/applicationName?retryWrites=true&w=majority`;
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// APP API's

// sign-up
app.post("/api/signup", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { firstName, lastName, age, gender, email, password, phoneNo } = body;
    if (
      !firstName ||
      !lastName ||
      !age ||
      !gender ||
      !email ||
      !password ||
      !phoneNo
    ) {
      res.json({
        status: false,
        message: "Required fields are missing",
        data: null,
      });
      return;
    }

    console.log(password, "real");
    const hashpass = await bcrypt.hash(password, 10);
    const objToSend = {
      first_name: firstName,
      last_name: lastName,
      phone_no: phoneNo,
      age,
      gender,
      email,
      password: hashpass,
    };

    const emailExist = await UserModel.findOne({ email });
    console.log(emailExist, "emailExist");
    if (emailExist) {
      res.json({
        status: false,
        message: "this email address has been already exists Please try again",
        data: null,
      });
      return;
    }
    const userSave = await UserModel.create(objToSend);

    res.json({
      status: false,
      message: "user successfully signup",
      data: userSave,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
});

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
    // const userRecords = await UserModel.find({}); get all data's
    const query = {
      // full_name: "Ali",
      // age: 22,
    };
    // const userRecords = await UserModel.find(query);
    // const userRecords = await UserModel.find(query);

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

app.get("/api/singleuser/:id", async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;

    const userRecords = await UserModel.findById(id);
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

app.put("/api/updateuser/:id", async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;

    const body = req.body;

    const userRecords = await UserModel.findByIdAndUpdate(id, body);
    console.log(userRecords);
    res.json({
      message: "update  user",
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

app.delete("/api/deleteuser/:id", async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;
    const userRecords = await UserModel.findByIdAndDelete(id);
    console.log(userRecords);
    res.json({
      message: "delete  user",
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
