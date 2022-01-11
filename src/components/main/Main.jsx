import './Main.css'
import Display from '../display/Display'
import Keyboard from '../keyboard/Keyboard'

function Main(){
    
    return(
        <div className='main-container'>
                <Display/>
                <Keyboard/>
        </div>
    )
}

export default Main