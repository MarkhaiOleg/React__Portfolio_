import React from 'react'
import './Card.css'

const Card = ({ emoji, heading, datail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{datail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}

export default Card
