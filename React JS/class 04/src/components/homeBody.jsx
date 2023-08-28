import React from "react";

const HomeBody = (props) => {
    let count = 0
    // console.log("props body", props.use)
    const { user } = props
    console.log("body user", user)
    const plusCounter = () => {
        console.log(++count)
        count = ++count
    }


    return (
        <>
            <h1>HomeBody COMPONENT  </h1>
            <h1>USER EMAIL: {user.email} </h1>
            <h1>COUNTER: {count} </h1>
            <button onClick={plusCounter}>COUNT</button>
        </>
    )






}

export default HomeBody