import React, { useState } from 'react';
import '../styles/HeroForm.css';

const HeroForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <aside className="hero-card card hero-card-right success-message">
        <h3>Thank you!</h3>
        <p>Our care expert will call you shortly to discuss your personalized plan.</p>
      </aside>
    );
  }

  return (
    <aside className="hero-card card hero-card-right">
      <h2>Assistance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Full Name</label>
          <input placeholder="e.g., “Dr. Priya Sharma”" />
        </div>
        <div className="form-field">
          <label>Mobile Number</label>
          <input placeholder="e.g., “+91 98765 43210”" />
        </div>
        <div className="form-field">
          <label>Caregiver Plan</label>
          <select>
            <option>Elderly Care</option>
            <option>Post-Surgery</option>
            <option>Physiotherapy</option>
            <option>24-Hour Assistance</option>
          </select>
        </div>
        
        
        <div style={{ marginTop: 8 }}>
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Get My Care Plan
          </button>
        </div>
      </form>
    </aside>
  );
};

export default HeroForm;
