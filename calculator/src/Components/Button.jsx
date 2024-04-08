import React from "react";

const Button = ({handleInput, value}) => {
    return <button onClick={()=>handleInput(value)}>-</button>
}

export default Button;