import 'font-awesome/css/font-awesome.min.css';
import React from 'react'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <div className="navBar-container">
            <div className="navBar-first">
                <i className="fa fa-bars"/>
            </div>
            <div className="navBar-second">
                <i className="fa fa-bars"/>
                <i className="fa fa-bars"/>
                <i className="fa fa-bars"/>
            </div>
        </div>
    )
}

export default NavBar
