import React from 'react';
import '../styles/AnimatedLogo.css';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src="/doctor-patient-logo.png" alt="Abhiruchi Caretaker Logo" className="animated-logo" />
    </div>
  );
};

export default AnimatedLogo;
