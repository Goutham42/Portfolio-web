import React, { useState } from 'react';
import './Social.css';

const Social = () => {
  const [open, setOpen] = useState(false);

  const toggleInfo = () => setOpen(!open);

  return (
    <div className="info-widget">
      <div className="info-button" onClick={toggleInfo}>
        🤖
      </div>
      {open && (
        <div className="info-content">
          <h3>Hey! Thinking of contacting me?</h3>
          <div className="social-icons">
            <a href="https://github.com/Goutham42" target="_blank" rel="noreferrer">
              🐱 GitHub
            </a>
            <a href="https://www.linkedin.com/in/gouthamthanigaivel" target="_blank" rel="noreferrer">
              🔗 LinkedIn
            </a>
            <a href="tel:+911234567890">📞 +91 9499945579</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Social;
