import React from "react";
import Header from "./components/header";
import HomeBody from "./components/homeBody";
import Footer from "./components/footer";
import ChildOne from "./components/ChildOne";
import "./App.css"


const App = () => {

    const userObj = {
        name: "JAFFAR",
        age: 22,
        email: "amanjaffar50@gmail.com"
    }
    // console.log(userObj)


    const submitHandler = () => {
        console.log("submitHandler")
    }

    // const add = (num1, num2) => {
    //     console.log("add", (num1 + num2))
    // }
    const add = (e, num1) => {
        console.log(e.target)
        console.log("num1", num1)
        e.target.innerHTML = "ADD BUTTON"
    }


    const getChildData = (data) => {
        console.log("getChildData", data)
    }

    return (
        <>

            {/* <button onClick={submitHandler} >SUBMIT</button> */}
            {/* <button onClick={() => add(10, 20)}>ADD</button> */}
            {/* <button onClick={add}>ADD</button> */}
            {/* <button onClick={add}>ADD</button> */}
            {/* <button onClick={(e) => add(e, 100)}>ADD</button> */}
            {/* 
            <Header
                user={userObj}
                bool={true}

            />

            <HomeBody
                user={userObj}
            />

            <Footer /> */}

            <div className="container">
                <h1>APP CONTAINER</h1>
            </div>
            <ChildOne
                getChildData={getChildData}

            />




        </>



    )
}

export default App
