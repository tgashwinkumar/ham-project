import React from 'react'
import {statNav} from '../utils/utils'
import BarsIcon from '../assets/menu.svg'
import '../styles/VerticalNav.css'

const VerticalNav = () => {
    return (
        <React.Fragment>
            <img src={BarsIcon} alt="bars-icon" className="bars-icon"/>
            <nav className="statis-nav-container">
                {statNav.map(statLink => {
                    return <div className="statis-nav-link">
                        <img src={statLink.icon} alt={`${statLink.name}-icon`}/>
                        <span>{statLink.name}</span>
                    </div>
                })}
            </nav>
        </React.Fragment>
    )
}

export default VerticalNav
