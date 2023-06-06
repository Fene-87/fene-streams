import React from 'react'
import './Channel.css'

const Channel = ({ avatar, name, followers }) => {
  return (
    <div className='channel'>
        <div className="channel-details">
            <img src={avatar} alt="Avatar" />
            <p>{name}</p>
        </div>
        <p>{followers}</p>
    </div>
  )
}

export default Channel