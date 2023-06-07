import React from 'react'
import Profile from '../profile/Profile'
import './Body.css'

const Body = () => {
  return (
    <div className="body">
        <div className="body-left">
            <Profile />
        </div>

        <div className="body-right-placeholder"></div>
    </div>
  )
}

export default Body