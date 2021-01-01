import React from 'react'
import '../styles/HomeFlashcard.css'

const HomeFlashcard = ({name, icon}) => {
    return (
        <div className="flashcard-div">
            <span>{name} </span>
            <img src={icon} alt="Flashcard Icon"/>
        </div>
    )
}

export default HomeFlashcard