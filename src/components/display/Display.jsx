import './Display.css'
import Button from '../button/Button'

function Display(){
   
    return(
        <div className='display-container'>
            <div className='display-top'>
                <Button label='C' buttonClass="-functions"/>
                <Button label='M' buttonClass="-functions"/>
                <Button label='<' buttonClass="-functions"/>
            </div>
            <div className='display-digits'>
                {/* {displayState} */}
            </div>
        </div>
    )
}

export default Display