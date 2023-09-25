import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { app, db } from "./firebase";
import "./App.css";
import Header from "./Components/Header";
import { addDoc, collection } from "firebase/firestore";

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
      <div className="w-full  p-5">
        <div>
          <input
            type="text"
            className="border border-stone-500 rounded-lg p-3 w-full"
            placeholder="Enter todo..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          onClick={addTodo}
          className="bg-green-500 w-full p-2 rounded-lg mt-3 text-white cursor-pointer transition hover:bg-green-900 "
        >
          ADD
        </button>
      </div>
    </>
  );
}

export default App;
