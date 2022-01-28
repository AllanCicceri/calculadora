import './Main.css'
import Display from '../display/Display'
import Keyboard from '../keyboard/Keyboard'
import { CalculatorContext } from '../context/display-context'
import { useState } from 'react'

function Main(){
    const [displayContext, setDisplayContext] = useState('0')
    
    return(
        <CalculatorContext.Provider value={[displayContext, setDisplayContext]}>
            <div className='main-container'>
                    <Display/>
                    <Keyboard/>
            </div>
        </CalculatorContext.Provider>
    )
}

export default Main