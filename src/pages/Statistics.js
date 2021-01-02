import React from 'react'
import VerticalNav from '../components/VerticalNav'
import {statNav} from '../utils/utils'

const Statistics = () => {
    return (
        <React.Fragment>
            <VerticalNav title="Statistics" navData={statNav}/>
        </React.Fragment>
    )
}

export default Statistics
