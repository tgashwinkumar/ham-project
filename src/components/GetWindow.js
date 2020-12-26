import React,{useState, useEffect} from 'react'

function GetWindow() {

    const [windowState, setWindowState] = useState({width: 0, height: 0, })
    useEffect(() => {
        setWindowState({
            width: window.innerWidth,
            height: window.innerHeight,
        })
        
    },[windowState])

    return (
        <div>
            window-width : {windowState.width}, 
            window-height: {windowState.height}
        </div>
    )
}

export default GetWindow
