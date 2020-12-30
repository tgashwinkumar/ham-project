import React from 'react'
import '../styles/Home.css'
import ChakraIcon from '../assets/chakra-icon.png'

const Home = () => {
    return (
        <div className="home-container">
            <nav className="home-header">
                <img className="home-chakra-icon" src={ChakraIcon} alt="Ashoka Chakra Icon"/>
                <div className="home-title">
                    <span>Ministry of Lorem Ipsum</span>
                    <span>Government of Lorem Ipsum</span>
                </div>
                <div className="home-spacer"></div>
                <div className="home-nav">
                    <span>About Us</span>
                    <span>Documents</span>
                    <span>Statistics</span>
                </div>
            </nav>
        </div>
    )
}
    
export default Home