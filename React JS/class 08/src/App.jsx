import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Componenets/Header/Header";
import Button from "./Componenets/Button/Button";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    console.log("addTodo");
    // const todoInput = document.getElementById("todoInput");
    // console.log("todoInput", todoInput.value);
    console.log("todoValue", todoValue);
    todos.push(todoValue);
    setTodos([...todos]);
  };

  console.log("todos", todos);
  const deleteAllTodo = () => {
    console.log("deleteAllTodo");
  };

  const editTodo = () => {
    console.log("editTodo");
  };
  const deleteTodo = () => {
    console.log("deleteTodo");
  };

  return (
    <>
      <Header />

      <div className=" flex justify-center  items-center mt-5 flex-col  ">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="border w-full rounded-lg p-3 outline-none border-gray-600 "
            id="todoInput"
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          />
        </div>

        <div className="flex mt-10">
          <Button title="Add todo" clickTrigger={addTodo} />
          <Button
            title="Delete All"
            clickTrigger={deleteAllTodo}
            customClass="bg-red-500"
          />
        </div>
      </div>

      <div className="  w-[70%] mx-auto mt-5 ">
        <ul className="">
          {todos.map((todo, index) => {
            return (
              <li
                key={index}
                className="text-xl p-3 border rounded-lg flex justify-between items-center"
              >
                {todo}
                <div>
                  <Button title="EDIT" clickTrigger={editTodo} />
                  <Button
                    title="Delete"
                    clickTrigger={deleteTodo}
                    customClass="bg-red-500"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
