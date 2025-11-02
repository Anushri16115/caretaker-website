import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source src="/Patient Caretaker Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-container">
            <h1>Compassionate and Professional Caretakers at Your Service</h1>
            <p>
              We provide experienced and verified caretakers for your loved ones.
              Our services include elderly care, post-operative care, and specialized care for patients with chronic illnesses.
            </p>
            <a href="tel:+917276526772" className="cta-button">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
