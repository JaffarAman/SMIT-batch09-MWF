import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("loginHandler");
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
      localStorage.setItem("uid", user.user.uid);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error.message);
      alert("error", error.message);
    }
  };
  return (
    <form onSubmit={loginHandler} className={styles.loginWrapper}>
      <h1>LOGIN</h1>
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
        <Link to={"/signup"} className={styles.linkPara}>
          Don't have an account? Sign Up
        </Link>
      </div>

      <div>
        <Button type="submit" sx={{ width: "100%" }} variant="contained">
          LOGIN
        </Button>
      </div>
    </form>
  );
};

export default Login;
