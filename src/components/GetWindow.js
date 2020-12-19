import React,{useState, useEffect} from 'react'

function GetWindow() {

    const [windowState, setWindowState] = useState({width: 0, height: 0, })

    useEffect(() => {
        
    })

    return (
        <div>
            width : {windowState.width}, 
            height: {windowState.height}
        </div>
    )
}

export default GetWindow
