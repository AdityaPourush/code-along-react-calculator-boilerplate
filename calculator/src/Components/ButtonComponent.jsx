import React from "react";

const ButtonComponent = ({input, setInput, result, setResult, handleInput, calculateResult, clearInput, deleteLast})=>{
    return(
        <>
            
            <button onClick={clearInput}>AC</button>
            <button onClick={deleteLast}>DEL</button>
            <button onClick={()=>{handleInput("-")}}>-</button>
            <button onClick={()=>{handleInput("+")}}>+</button>
            
            <button onClick={()=>{handleInput("7")}}>7</button>
            <button onClick={()=>{handleInput("8")}}>8</button>
            <button onClick={()=>{handleInput("9")}}>9</button>
            <button onClick={()=>{handleInput("/")}}>/</button>
            
            <button onClick={()=>{handleInput("4")}}>4</button>
            <button onClick={()=>{handleInput("5")}}>5</button>
            <button onClick={()=>{handleInput("6")}}>6</button>
            <button onClick={()=>{handleInput("*")}}>X</button>
            
            <button onClick={()=>{handleInput("1")}}>1</button>
            <button onClick={()=>{handleInput("2")}}>2</button>
            <button onClick={()=>{handleInput("3")}}>3</button>
            <button onClick={()=>{handleInput(".")}}>.</button>
            
            <button onClick={()=>{handleInput("0")}}>0</button>
            <button onClick={calculateResult} style={{gridColumn : "span 3"}}>=</button>
        </>
    )
}

export default ButtonComponent;
