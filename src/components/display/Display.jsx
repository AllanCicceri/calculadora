import { useContext } from 'react'
import './Display.css'
import Button from '../button/Button'
import { DisplayContext } from '../context/context'

function Display(){
    const displayContext = useContext(DisplayContext)

    return(
        <div className='display-container'>
            <div className='display-top'>
                <Button label='C' buttonClass="-functions"/>
                <Button label='M' buttonClass="-functions"/>
                <Button label='<' buttonClass="-functions"/>
            </div>
            <div className='display-digits'>
                {displayContext}
            </div>
        </div>
    )
}

export default Display