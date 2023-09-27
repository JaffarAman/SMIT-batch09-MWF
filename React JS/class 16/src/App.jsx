import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { app, db } from "./firebase";
import "./App.css";
import Header from "./Components/Header";
import { addDoc, collection } from "firebase/firestore";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TransitionsModal from "./Components/AppModal";
function App() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = async () => {
    try {
      console.log("border-stone-500");
      console.log("inputValue", inputValue);
      if (!inputValue) {
        return;
      }

      const docRef = await addDoc(collection(db, "todos"), {
        todoValue: inputValue,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <>
      <Header />
      <Box
        // sx={{
        //   background: "red",
        //   "&:hover": {
        //     background: "green",
        //   },
        //   button: {
        //     background: "purple",
        //   },
        //   ".myContainer": {
        //     background: "green",
        //   },
        // }}
        display={"flex"}
        justifyContent={"center"}
        marginTop={"20px"}
      >
        <TransitionsModal />
      </Box>
    </>
  );
}

export default App;
