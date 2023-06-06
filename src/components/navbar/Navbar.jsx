import React from 'react'
import logo from '../../assets/F.png'
import { faEllipsis, faMagnifyingGlass, faCrown, faEnvelope, faComment, faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="header">
        <div className="header-left">
            <img src={logo} alt="logo" className='logo' />
            <FontAwesomeIcon icon={faEllipsis} className='header-icon' />
        </div>

        <div className="header-center">
            <input type="text" placeholder="search" className='search-input' />
            <div className="header-searchbar">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='header-icon' />
            </div>
        </div>

        <div className="header-right">
            <div className="header-right-container">
                <FontAwesomeIcon icon={faCrown} className='header-icon' />
                <FontAwesomeIcon icon={faEnvelope} className='header-icon' />
                <FontAwesomeIcon icon={faComment} className='header-icon' />

                <div className="bits">
                    <FontAwesomeIcon icon={faGem} className='header-icon' />
                    <h4>Get Bits</h4>
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faUser} className='header-icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar