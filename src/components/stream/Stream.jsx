import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Stream.css'

const Stream = () => {
  return (
    <div className="stream">
        <div className="stream-container">
            <div className="stream-status">
                <div className="stream-status-container">
                    <div className="status-container-top">
                        <div className="stream-status-indicator">OFFLINE</div>
                        <h2>Checkout the below stream</h2>
                    </div>

                    <div className="stream-status-info">
                        <FontAwesomeIcon icon={faBell} className="stream-status-icon" />
                        <p>You will be notified when stream is live</p>
                    </div>
                </div>
            </div>

            <div className="stream-video-embed">
                <iframe 
                  title="Video Player"
                  width="500"
                  height="295"
                  src="https://www.youtube.com/embed/hkLSTCWyaSE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    </div>
  )
}

export default Stream