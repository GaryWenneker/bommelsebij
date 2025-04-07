import './background-video.component.css'; // Import your CSS file

import React from 'react';

const videoSources = [
  '6341-191338839.mp4',
  // '133574-757335676.mp4',
]; // Import your video file

function BackgroundVideo({ children }) {
  return (
    <div className="background-video-container">
      <video
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src={'/videos/' + videoSources[Math.floor(Math.random() * videoSources.length)]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default BackgroundVideo;
