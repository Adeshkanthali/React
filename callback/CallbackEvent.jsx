import React from "react"

function CallbackEvent() {                      //parent component

    const [text, setText] = React.useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>Call Back Event</h1>
            <p>Text is: {text}</p>
            <CheckCallBack onInputChange={handleChange} />
        </div>
    )

}



function CheckCallBack({ onInputChange }) {                  //child component
    
    return (
        <div>
            <h2>CallBack Check</h2>
            <input type="text" onChange={onInputChange} />
        </div>
    )

}

export default CallbackEvent