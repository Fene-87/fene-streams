import React from 'react'
import './RecentItem.css'

const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
        <iframe 
            title="Video Player"
            width="400"
            height="235"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
        ></iframe>

        <div className="item-details">
            <h4>{title}</h4>
            <p>Supersport</p>
            <p>Football Streaming</p>
        </div>
    </div>
  )
}

export default RecentItem