import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const Calculator = ()=>{

    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const handleInput = (value) =>{
        setInput((prev)=>prev + value)
    }

    const calculateResult = ()=>{
        try{
            setResult(eval(input))
        } catch {
            setResult("ERROR")
        }
    }

    const clearInput = ()=>{
        setInput("")
        setResult("")
    }

    const deleteLast = ()=>{
        setInput(input.slice(0,-1))
    }

    return(
        <div className="calculator">
            <div className="input">
                <h6>Input</h6>
                <input type="text" placeholder="0" value={input} readOnly/>
                <h6>Result</h6>
                <input type="text" placeholder="0" value={result} readOnly/>
            </div>

            <div className="buttons">
                <ButtonComponent input={input} setInput={setInput} result={setResult} setResult={setResult} handleInput={handleInput} calculateResult={calculateResult} clearInput={clearInput} deleteLast={deleteLast}/>
            </div>
        </div>
    )
}

export default Calculator;