import React from 'react';
import '../styles/PatientIntakeForm.css';

const PatientIntakeForm: React.FC = () => {
  return (
    <div className="intake-form-container">
      <form className="intake-form">
        <h1>Patient Information Form</h1>
        <p>Please fill out the details below to help us understand your needs.</p>

        <fieldset>
          <legend>Core Patient Details</legend>
          <div className="form-grid">
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Age" required />
            <select required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="tel" placeholder="Contact Number" required />
            <input type="email" placeholder="Email Address" />
            <select required>
              <option value="">Select Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
            <textarea placeholder="Address" rows={3}></textarea>
          </div>
        </fieldset>

        {/* Medical & Health Information section removed as requested */}

        <fieldset>
          <legend>Service Selection</legend>
          <div className="radio-group">
            <label><input type="radio" name="service" value="qualified-nursing" /> Qualified Nursing</label>
            <label><input type="radio" name="service" value="elderly-care" /> Elderly Care</label>
            <label><input type="radio" name="service" value="patient-care" /> Patient Care</label>
            <label><input type="radio" name="service" value="baby-care" /> Baby Care</label>
            <label><input type="radio" name="service" value="mother-care" /> Mother Care</label>
            <label><input type="radio" name="service" value="ward-boy" /> Ward Boy Services</label>
            <label><input type="radio" name="service" value="domestic-help" /> House Maid & Domestic Help</label>
            <label><input type="radio" name="service" value="critical-care" /> Medical Attendants for Critical Care</label>
            <label><input type="radio" name="service" value="rehabilitation" /> Post-Surgery & Rehabilitation Care</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Scheduling & Preferences</legend>
          <div className="form-grid">
            <select>
              <option value="">Preferred Care Duration</option>
              <option value="live-in">Live-in / 24x7</option>
              <option value="day-care">Day Care (8-12 hours)</option>
              <option value="night-care">Night Care</option>
              <option value="hourly">Hourly</option>
            </select>
            <input type="text" placeholder="Preferred Start Date (e.g., ASAP, or a specific date)" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Consent & Confirmation</legend>
          <div className="consent-section">
            <label>
              <input type="checkbox" required />
              I confirm that the information provided is accurate to the best of my knowledge.
            </label>
            <label>
              <input type="checkbox" required />
              I consent to be contacted by an Abhiruchi Caretaker representative to discuss these requirements further.
            </label>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Information</button>
      </form>
    </div>
  );
};

export default PatientIntakeForm;
