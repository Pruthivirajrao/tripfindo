import React from 'react'
import "./Header.css";
import header_img from "../Assets/Images/microsoft.png"
const Header = () => {
  return (
    <header className="header">
        <div className="header-logo">
            <img src={header_img} alt="" />
        </div>
        <nav>
            <span>Home</span>
            <span>About</span>
            <span>Courses</span>
            <span>Placements</span>
        </nav>
        <div className="header-buttons">
            <button className="bi bi-box-arrow-right login-signUp"><span>Sign Up / Sign in</span></button>
            <button className='explore-btn'>Explore</button>
        </div>
    </header>
  )
}

export default Header