import React from 'react'
import Supersport from '../../assets/ss-placeholder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBell, faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
        <div className="profile-topleft">
            <img src={Supersport} alt="profile-logo" className="profile-logo" />
            <div className="profile-details">
                <h1>Supersport</h1>
                <h3>18k Viewing</h3>
            </div>
        </div>

        <div className="profile-topright">
            <FontAwesomeIcon icon={faHeart} className="profile-icon bg-gray" />
            <FontAwesomeIcon icon={faBell} className="profile-icon bg-gray" />
            <FontAwesomeIcon icon={faEllipsisVertical} className="profile-icon" />
        </div>

        <div className="profile-menu">
            <h2 className="active">Home</h2>
            <h2>About</h2>
            <h2>Schedule</h2>
            <h2>Videos</h2>
            <h2><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Chat</h2>
        </div>
    </div>
  )
}

export default Profile