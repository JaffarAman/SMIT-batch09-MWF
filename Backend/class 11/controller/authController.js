const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/userSchema");

const SignupController = async (req, res) => {
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
};

const LoginController = async (req, res) => {
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
};

module.exports = {
  SignupController,
  LoginController,
};
