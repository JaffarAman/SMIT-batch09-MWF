import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignupHandler = async (e) => {
    e.preventDefault();
    console.log("loginHandler");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log("error", error.message);
      alert("error", error.message);
    }
  };
  return (
    <form onSubmit={SignupHandler} className={styles.loginWrapper}>
      <h1>Sign UP</h1>
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
