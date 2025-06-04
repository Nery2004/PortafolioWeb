import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-container">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <video className="background-video-2" autoPlay muted loop playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;