import React from 'react'
import logo from '../../assets/F.png'

const Navbar = () => {
  return (
    <div className="header">
        <div className="header-left">
            <img src={logo} alt="logo" />
        </div>
        <div className="header-center"></div>
        <div className="header-right"></div>
    </div>
  )
}

export default Navbar