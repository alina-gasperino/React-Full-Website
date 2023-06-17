import React from 'react'
import './HomeBanner.css'

const Banner = () => {
    const videoSource = "https://kforcewebeast.azureedge.net/media/400742/kforce_delivery_final_2_mq.mp4"
    return (
        <div className="banner">
            <video autoPlay="autoplay" loop="loop" muted className="header_video" >
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1 className = "hero_text"><strong>You have a vision.</strong></h1>
                <h1 className = "hero_text"><strong>Together, let's make it happen.</strong></h1>
                <br />
                <br />
                <br />
                <p className = "inline-btn">
                    <a href = "#" className = "btn-line-white">Find Work</a>
                    <a href = "#" className = "btn-line-white">Find Talent</a>
                </p>
            </div>
        </div>
    )
}

export default Banner