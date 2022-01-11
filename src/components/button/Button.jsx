import './Button.css'

function Button({label, buttonClass}){
    // const {displayState, setDisplayState} = useContext(DisplayContext)
    
    const handleButtonClick = e => {
        // if(buttonClass === "-functions"){
        //     if(label === "C"){
        //         setDisplayState(0)
        //     }
            
        //     return
        // }

        // if(buttonClass === "-operation"){
        //     return
        // }

        // const newValue = (displayState === 0)?label:displayState + label
        // setDisplayState(newValue)

    }

    return(
        <div className={"button-container" + buttonClass}>
            <div className={"button-label" + buttonClass} onClick={handleButtonClick}>{label}</div>
        </div>
    )
}

export default Button