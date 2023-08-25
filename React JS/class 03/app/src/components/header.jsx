import React from "react";

const Header = (props) => {

    console.log("props", props.user.name)

    return (
        <h1>WELCOME  {props.user.name}   </h1>
    )


}

export default Header