import React, { useState } from 'react'
import BarsIcon from '../assets/menu.svg'
import PinIcon from '../assets/pin.svg'
import '../styles/VerticalNav.css'

const VerticalNav = ({title, navData}) => {

    const [navActive, setNavActive] = useState(false)

    return (
        <div className={`nav-container ${navActive?'nav-container-active':''}`} onClick={() => setNavActive(!navActive)}>
            <div className="nav-header">
                <img src={BarsIcon} alt="bars-icon" className={`bars-icon ${navActive?'bars-icon-active':''}`}/>
                <p>{title}</p>
            </div>
            <nav className="nav-menu">
                {navData.map(navLink => {
                    return <>
                        <div className="nav-link">
                            <img src={navLink.icon || PinIcon} alt={`${navLink.name}-icon`}/>
                            <span>{navLink.name}</span>
                        </div>
                        <hr/>
                    </>
                })}
            </nav>
        </div>
    )
}

export default VerticalNav
