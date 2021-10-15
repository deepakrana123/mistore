import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/HotAccesories.css"

const HotAccesories = () => {
    return (
        <div className="HotAccesories">
        <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
        <Link className="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
        <Link className="HotAccessoriesLink" to="/home">Home</Link>
        <Link className="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
        <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
       
        </div>
    )
}

export default HotAccesories
