import React from 'react'
import Profile from '../profile/Profile'
import './Body.css'
import Stream from '../stream/Stream'

const Body = () => {
  return (
    <div className="body">
        <Stream />
        <div className="body-left">
            <Profile />
        </div>

        <div className="body-right-placeholder"></div>
    </div>
  )
}

export default Body