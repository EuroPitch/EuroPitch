import React, { useEffect, useState } from 'react';
import './Trading.css';

export default function Results() {
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight - 80);

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerHeight - 80);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="header-content">
          <h1>Official Competition Results</h1>
          <p>Live standings from the Europitch Trading Challenge</p>
        </div>
        <a 
          href="https://europitch-trading.vercel.app/standings" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-external"
        >
          Open in New Tab
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className="iframe-wrapper">
        <iframe
          src="https://trading.europitch.eu/standings"
          title="Europitch Trading Challenge Standings"
          className="results-iframe"
          style={{ height: `${iframeHeight}px` }}
          frameBorder="0"
          allowFullScreen
        />
        <div className="iframe-loading">
          <div className="loading-spinner">Loading standings...</div>
        </div>
      </div>
    </div>
  );
}