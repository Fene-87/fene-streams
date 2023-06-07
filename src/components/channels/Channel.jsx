import React from 'react'
import './Channel.css'

const Channel = ({ avatar, name, watching }) => {
  return (
    <div className='channel'>
        <div className="channel-details">
            <img src={avatar} alt="Avatar" className='channel-logo' />
            <p>{name}</p>
        </div>
        <p>{watching}</p>
    </div>
  )
}

export default Channel