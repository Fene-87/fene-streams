import React from 'react'
import Supersport from '../../assets/ss-placeholder.jpg'
import PremierLeague from '../../assets/fNzKlA.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBell, faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'
import RecentItem from '../recentItem/RecentItem'

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

        <div className="profile-recent">
            <h2>Recent Broadcasts</h2>

            <div className="recent-items">
                <RecentItem 
                  url="https://www.youtube.com/embed/SE9CkL9TdBM" 
                  title="Watch the game"
                />

                <RecentItem 
                  url="https://www.youtube.com/embed/2jQTitvTeVw" 
                  title="Watch the game"
                />

                <RecentItem 
                  url="https://www.youtube.com/embed/hkLSTCWyaSE" 
                  title="Watch the game"
                />
            </div>
        </div>

        <div className="profile-categories">
            <h2>Available Leagues</h2>
            <img src={PremierLeague} alt="Premier-League" />
            <h3>Premier League</h3>
        </div>
    </div>
  )
}

export default Profile