import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import { BASEURL } from "../config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [phoneNo, setphoneNo] = useState("");

  const navigate = useNavigate();

  const SignupHandler = async (e) => {
    e.preventDefault();
    console.log("loginHandler");
    try {
      if (
        !firstName ||
        !lastName ||
        !age ||
        !gender ||
        !email ||
        !password ||
        !phoneNo
      ) {
        alert("required field are missing");
        return;
      }
      console.log("signup function");
      const objToSend = {
        firstName,
        lastName,
        age,
        gender,
        email,
        password,
        phoneNo,
      };

      const response = await axios.post(`${BASEURL}/signup`, objToSend);
      console.log("response", response);
      if (response.data.status) {
        navigate("/");
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("error", error.message);
      alert("error", error.message);
    }
  };
  return (
    <form onSubmit={SignupHandler} className={styles.loginWrapper}>
      <h1>Sign UP</h1>
      <div>
        <p htmlFor="">First Name:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e) => setfirstName(e.target.value)}
        />
      </div>
      <div>
        <p htmlFor="">Last Name:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => setlastName(e.target.value)}
        />
      </div>
      <div>
        <p htmlFor="">Age:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Age"
          variant="outlined"
          onChange={(e) => setage(e.target.value)}
        />
      </div>
      <div>
        <p htmlFor="">Gender:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          onChange={(e) => setgender(e.target.value)}
        />
      </div>
      <div>
        <p htmlFor="">Email:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p htmlFor="">Password:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <p htmlFor="">Phone number:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          onChange={(e) => setphoneNo(e.target.value)}
        />
      </div>
      <div>
        <Link to={"/"} className={styles.linkPara}>
          Already have an account? Login
        </Link>
      </div>

      <div>
        <Button type="submit" sx={{ width: "100%" }} variant="contained">
          SIGNUP
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
