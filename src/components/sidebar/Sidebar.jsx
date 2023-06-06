import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Supersport from '../../assets/ss-placeholder.jpg'
import Peacock from '../../assets/peacock-logo.jpg'
import SkySports from '../../assets/skysports-logo-social-300x169.png'
import './Sidebar.css'
import Channel from '../channels/Channel'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <h5>RECOMMENDED CHANNELS</h5>
            <Channel
                avatar={Supersport} 
                name='Supersport'
                watching='18k'
            />

            <Channel
                avatar={Peacock} 
                name='Peacock'
                watching='12k'
            />

            <Channel
                avatar={SkySports} 
                name='Sky Sports'
                watching='22k'
            />
        
            <p className="showmore">Show More</p>
        </div>

        <div className="sidebar-bottom">
            <div className="sidebar-bottom-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder='Search for channels' className="sidebar-input" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar