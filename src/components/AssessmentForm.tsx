import React from 'react';
import '../styles/AssessmentForm.css';

const AssessmentForm: React.FC = () => {
  return (
    <div className="assessment-form-container">
      <div className="assessment-form">
        <h3>Book a Free Assessment</h3>
        <p>Our experts will call you back in 24 hours</p>
        <form>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <input type="text" id="location" name="location" placeholder="Location" />
          </div>
          <button type="submit" className="btn-submit">Book Assessment</button>
        </form>
      </div>
    </div>
  );
};

export default AssessmentForm;
