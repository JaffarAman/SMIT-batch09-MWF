import React from "react";


const ChildOne = (props) => {
    const { getChildData } = props


    const childData = "childData 101"
    return (
        <>
            <h1>ChildOne</h1>
            <button onClick={() => getChildData(childData)} >SEND DATA</button>
            <div className="container">
                <h1>CHILD CONTAINER</h1>
            </div>
        </>
    )
}

export default ChildOne