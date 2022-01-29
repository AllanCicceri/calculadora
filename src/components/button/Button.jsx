import './Button.css'
import { CalculatorContext, DisplayContext } from '../context/context'
import { useContext } from 'react'

function Button({ label, buttonClass }) {
    const [displayState, setDisplayState] = useContext(DisplayContext)
    const [calculatorState, setCalculatorState] = useContext(CalculatorContext)
    const functionButtons = '+-*/'

    const handleButtonClick = e => {
        let displayValue = displayState
        const calc = { ...calculatorState };

        if (functionButtons.includes(label)) {
            const value = parseInt(calc.num2)
            switch (label) {
                case '+':
                    calc.num1 += value
                    break;
                case '-':
                    calc.num1 -= value
                    break;
                case '*':
                    calc.num1 *= value
                    break;
                case '/':
                    calc.num1 /= value
                    break;
            }

            calc.num2 = 0
            setCalculatorState(calc)
            displayValue = calc.num1

        } else {
            calc.num2 = calc.num2 == 0 ? label : displayValue + label
            // displayValue = calc.num2 == '0' ? label : calc.num2 + label
            displayValue = calc.num2
        }

        setDisplayState(displayValue)
        setCalculatorState(calc)
    }

    return (
        <div className={"button-container" + buttonClass}>
            <div className={"button-label" + buttonClass} onClick={handleButtonClick}>{label}</div>
        </div>
    )
}

export default Button