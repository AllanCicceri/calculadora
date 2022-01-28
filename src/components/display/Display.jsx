import { useContext } from 'react'
import './Display.css'
import Button from '../button/Button'
import { CalculatorContext } from '../context/display-context'

function Display(){
    const calculatorState = useContext(CalculatorContext)

    return(
        <div className='display-container'>
            <div className='display-top'>
                <Button label='C' buttonClass="-functions"/>
                <Button label='M' buttonClass="-functions"/>
                <Button label='<' buttonClass="-functions"/>
            </div>
            <div className='display-digits'>
                {calculatorState}
            </div>
        </div>
    )
}

export default Display