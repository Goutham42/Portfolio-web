import React, { useRef, useState } from "react";
import "./Contact.css";
import contactImage from "../assets/tech.jpg";
import Social from "./Social";

const Contact = () => {
  const bgRef = useRef(null);
  const frame = useRef(null);
  const [sent, setSent] = useState(false);

  // Optimized mouse-move parallax
  const handleMouseMove = (e) => {
    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const moveX = (clientX - width / 2) * 0.02;
      const moveY = (clientY - height / 2) * 0.02;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      frame.current = null;
    });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    e.target.reset();
  };

  return (
    <section
      className="contact-container"
      id="contact"
      onMouseMove={handleMouseMove}
    >
      <h2 className="contact-heading">Let’s Connect</h2>
      <p className="contact-subtext">
        Have a project, idea, or opportunity? Drop a message — I’ll get back to you 🪂
      </p>

      <div className="contact-grid">
        {/* LEFT: Background + particles */}
        <div
          className="contact-bg"
          ref={bgRef}
          style={{ backgroundImage: `url(${contactImage})` }}
        ></div>

        {/* RIGHT: Form */}
        <form
          className={`contact-form ${sent ? "sent" : ""}`}
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit" className="contact-btn">
            Send Message
          </button>
          <p className="success-msg">Message Sent Successfully! 🚀</p>
        </form>
      </div>
      <Social />
    </section>
  );
};

export default Contact;
