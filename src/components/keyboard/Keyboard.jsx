import './Keyboard.css'
import Button from '../button/Button'

function Keyboard(){
    
    return(
        <div className='keyboard-container'>
            <Button label="1" buttonClass=""/>
            <Button label="2" buttonClass=""/>
            <Button label="3" buttonClass=""/>
            <Button label="+" buttonClass="-operation"/>
            <Button label="4" buttonClass=""/>
            <Button label="5" buttonClass=""/>
            <Button label="6" buttonClass=""/>
            <Button label="-" buttonClass="-operation"/>
            <Button label="7" buttonClass=""/>
            <Button label="8" buttonClass=""/>
            <Button label="9" buttonClass=""/>
            <Button label="*" buttonClass="-operation"/>
            <Button label="." buttonClass=""/>
            <Button label="0" buttonClass=""/>
            <Button label="=" buttonClass=""/>
            <Button label="/" buttonClass="-operation"/>
        </div>
    )
}

export default Keyboard