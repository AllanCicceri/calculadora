import { createContext } from "react";


const DisplayContext = createContext('0')
const CalculatorContext = createContext({num1:0, num2:0})

export {DisplayContext, CalculatorContext}