import React from 'react'
import '../styles/Home.css'
import HomeFlashcard from '../components/HomeFlashcard.js'
import AshokaPillarIcon from '../assets/ashoka-pillar.png'
import LogoHead from '../assets/logo-head.png'
import StatsIcon from '../assets/stats-icon.svg'
import CountriesIcon from '../assets/countries-icon.svg'
import DocumentsIcon from '../assets/documents-icon.svg'

const Home = () => {
    return (
        <React.Fragment>
            <div className="home-container home-outer-container">
                <div className="home-title">
                    <img src={LogoHead} alt="Logo header"/>
                </div>
                <div className="flashcards-container">
                    <HomeFlashcard name="Documents" icon = {DocumentsIcon}/>
                    <HomeFlashcard name="Statistics" icon = {StatsIcon}/>
                    <HomeFlashcard name="Countries" icon = {CountriesIcon}/>
                </div> 
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