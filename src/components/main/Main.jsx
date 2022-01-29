import './Main.css'
import Display from '../display/Display'
import Keyboard from '../keyboard/Keyboard'
import { useState } from 'react'
import {DisplayContext, CalculatorContext} from '../context/context'

function Main(){
    const [displayContext, setDisplayContext] = useState('0')
    const [calculatorContext, setCalculatorContext] = useState({num1:0, num2:0})

    return(
        <CalculatorContext.Provider value={[calculatorContext, setCalculatorContext]}>
            <DisplayContext.Provider value={[displayContext, setDisplayContext]}>
                <div className='main-container'>
                        <Display/>
                        <Keyboard/>
                </div>
            </DisplayContext.Provider>
        </CalculatorContext.Provider>
    )
}

export default Main