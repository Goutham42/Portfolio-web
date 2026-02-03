import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero.png";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Freelancer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <section id='home'  className="hero-container">
      <div className="hero-content">

        {/* LEFT: Text */}
        <div className="hero-text">
          <h1>
            Hi, I’m <span className="shimmer">Goutham</span>
          </h1>
          <p>
            <span
              key={currentRole}
              className="changing-role"
            >
            {roles[currentRole]}
            </span>
          </p>


          <a  
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-cv-btn">View CV
          </a>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Goutham Hero"
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? "hero-img loaded" : "hero-img"}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
