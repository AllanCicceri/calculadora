import './Button.css'
import { CalculatorContext } from '../context/display-context'
import {useContext} from 'react'

function Button({label, buttonClass}){
    const [displayState, setDisplayState] = useContext(CalculatorContext)
    
    const handleButtonClick = e => {
        let value = displayState
        value = value === '0' ? label : value + label
        console.log(value)
        setDisplayState(value)
    }

    return(
        <div className={"button-container" + buttonClass}>
            <div className={"button-label" + buttonClass} onClick={handleButtonClick}>{label}</div>
        </div>
    )
}

export default Button