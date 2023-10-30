require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("./model/userSchema");
const app = express();
const PORT = 5000;
const cors = require("cors");
const PostModel = require("./model/PostSchema");
const { authMiddleware } = require("./middlewares");
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
      status: true,
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
// login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("email , password", email, password);

  const emailExist = await UserModel.findOne({ email });
  console.log(emailExist, "emailExist");
  if (!emailExist) {
    res.json({
      message: "Invalid Credential",
      status: false,
      data: null,
    });
    return;
  }
  const comparePass = await bcrypt.compare(password, emailExist.password);
  if (comparePass) {
    var token = jwt.sign({ email: emailExist.email }, "PRIVATEKEY");
    console.log("token", token);

    res.json({
      message: "user login",
      status: true,
      data: emailExist,
      token,
    });
    return;
  } else {
    res.json({
      message: "Invalid Credential",
      status: false,
      data: null,
    });
    return;
  }
});

// POST API
app.post("/api/createpost", [authMiddleware], async (request, response) => {
  try {
    const body = request.body;

    const objToSend = {
      title: body.title,
      desc: body.desc,
      user_id: body.userId,
    };
    const data = await PostModel.create(objToSend);
    response.json({
      message: "POST successfully created",
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

app.get("/api/getpost", [authMiddleware], async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const query = {
      // full_name: "Ali",
      // age: 22,
    };
    // const userRecords = await UserModel.find(query);
    // const userRecords = await UserModel.find(query);

    const userRecords = await PostModel.find({});
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

app.get("/api/singlepost/:id", [authMiddleware], async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;

    const userRecords = await PostModel.findById(id);
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

app.put("/api/updatepost/:id", async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;

    const body = req.body;

    const userRecords = await PostModel.findByIdAndUpdate(id, body);
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

app.delete("/api/deletepost/:id", async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;
    const userRecords = await PostModel.findByIdAndDelete(id);
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
