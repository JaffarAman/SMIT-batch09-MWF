import React from "react";

const HomeBody = () => {
    let count = 0

    const plusCounter = () => {
        console.log(++count)
        count = ++count
    }


    return (
        <>
            <h1>HomeBody COMPONENT  </h1>
            <h1>COUNTER: {count} </h1>
            <button onClick={plusCounter}>COUNT</button>
        </>
    )






}

export default HomeBody