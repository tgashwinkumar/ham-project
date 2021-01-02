import React from 'react'
import VerticalNav from '../components/VerticalNav'
import {statNav} from '../utils/utils'
import LogoHead from '../assets/logo-head.png'
import '../styles/Statistics.css'

const Statistics = () => {

    

    return (
        <React.Fragment>
            <div className="statis-header">
                <img src={LogoHead} alt="Logo Header"/>
            </div>
            <VerticalNav title="Statistics" navData={statNav}/>
        </React.Fragment>
    )
}

export default Statistics
