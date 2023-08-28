import React, { useState } from "react";
import Header from "./components/header";
import HomeBody from "./components/homeBody";
import Footer from "./components/footer";
import ChildOne from "./components/ChildOne";
import "./App.css"


const App = () => {
    // let myName = "JAFFAR AMAN"

    // const nameState = useState("JAFFAR")



    // const [email, setEmail] = useState("jaffar@gmail.com")


    // const changeValue = () => {
    //     console.log("changeValue")
    //     myName = "Sufiyan"
    //     console.log("myName", myName)
    //     // nameState[1]("jaffar aman")
    //     setEmail("sufiyan@gmaill.com")
    // }


    console.log("APP COMPONENT RENDER")
    const [name, setName] = useState("JAFFAR AMAN")
    const [age, setAge] = useState(22)
    const [courses, setCourses] = useState(["HTML", "CSS", "JS"])



    const addCourses = () => {
        // setName("JAFFAR AMAN 1")
        courses.push("REACT") //abc
        setCourses([...courses]) //abc
    }

    console.log("courses", courses)
    // console.log("name", name)
    return (
        <>
            {/* <h1>HELLO {nameState[0]}</h1>
            <h1> {email} </h1>
            <button onClick={changeValue}>CHANGE VALUE</button> */}


            <button onClick={addCourses} >ADD COURSE</button>


        </>




    )
}

export default App
