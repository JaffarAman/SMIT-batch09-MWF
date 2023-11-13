const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/userSchema");
const nodemailer = require("nodemailer");
const EmailVerfication = require("../templates/emailVerfication");
const OTPModel = require("../model/otpSchema");

const SignupController = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { email, password, fullName } = body;
    if (!fullName || !email || !password) {
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
      full_name: fullName,
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

    const OTPCODE = Math.floor(100000 + Math.random() * 900000);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const emailData = await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: "Email Verfication",
      html: EmailVerfication(fullName, OTPCODE),
    });

    await OTPModel.create({
      otp_code: OTPCODE,
      email,
    });
    const userSave = await UserModel.create(objToSend);

    res.json({
      status: true,
      message: "Please check your emailAddress",
      data: userSave,
    });
  } catch (error) {
    console.log("error", error.message);
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

const OTPVerify = async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    if (!email || !otpCode) {
      res.json({
        message: "Required fields are missing",
        status: false,
        data: null,
      });
      return;
    }

    const isValid = await OTPModel.findOne({
      otp_code: otpCode,
      email,
      isUsed: false,
    });

    if (!isValid) {
      res.json({
        message: "Invalid OTP",
        status: false,
        data: null,
      });
      return;
    }

    await OTPModel.updateOne(
      {
        otp_code: otpCode,
        email,
        isUsed: false,
      },
      { isUsed: true }
    );

    await UserModel.updateOne(
      {
        email,
      },
      { isVerify: true }
    );

    res.json({
      message: "User Successfully Signup",
      status: true,
      data: null,
    });
    console.log("isValid", isValid);
  } catch (error) {
    console.log("error", error.message);
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = {
  SignupController,
  LoginController,
  OTPVerify,
};
