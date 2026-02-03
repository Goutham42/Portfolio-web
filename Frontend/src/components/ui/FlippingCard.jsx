import React from "react";

export const FlippingCard = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};
