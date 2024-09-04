import React from 'react';
import './HomePage.css'; // Make sure this path is correct

const HomePage = ({ navigate }) => {
  return (
    <div className="home-page">
      <div className="main-content">
        <button className="power-button">
          <img src="/path/to/power-icon.svg" alt="Power" />
        </button>

        <div className="instruction-text">
          <p>
            Press the on button to start recording. Any announcements detected
            will be sent as a phone notification.
          </p>
        </div>

        <div className="audio-controls">
          <button className="audio-button">
            <img src="/path/to/mic-icon.svg" alt="Microphone" />
          </button>
          <button className="audio-button">
            <img src="/path/to/volume-icon.svg" alt="Volume" />
          </button>
        </div>
      </div>

      <nav className="bottom-nav">
        <button className="nav-button">
          <img src="/path/to/record-icon.svg" alt="Record" />
          <span>Record</span>
        </button>
        <button className="nav-button" onClick={() => navigate('second')}>
          <img src="/path/to/history-icon.svg" alt="History" />
          <span>History</span>
        </button>
        <button className="nav-button" onClick={() => navigate('third')}>
          <img src="/path/to/settings-icon.svg" alt="Settings" />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default HomePage;
