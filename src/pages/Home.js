import React from 'react'
import '../styles/Home.css'
import AshokaPillarIcon from '../assets/ashoka-pillar.png'
import ChakraIcon from '../assets/chakra-icon.png'

const Home = () => {
    return (
        <React.Fragment>
            <div className="home-container home-outer-container">
                <div className="home-title">
                    <img src={ChakraIcon} alt="Ashoka Chakra"/>
                    <p>
                        <span>Ministry of External Affairs</span>
                        <span>Government of India</span>
                    </p>
                </div>
                {/* <div className="home-content">
                    Fetch your data from this awesome dashboard.
                </div> */}
            </div>
            <div className="home-container home-inner-container">
                <nav className="home-nav">
                    <span>Documents</span>
                    <span>Statistics</span>
                    <span>Get API</span>
                    <span>About Us</span>
                </nav>
            </div>
            <div className="home-float-container">
                <img src={AshokaPillarIcon} alt="Ashoka Pillar"/>
            </div>
        </React.Fragment>
    )
}
    
export default Home