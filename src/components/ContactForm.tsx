import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import '../styles/Form.css';

console.log('PatientIntakeForm component script loaded.');

const serviceOptions = [
  'Qualified Nursing',
  'Elderly Care',
  'Patient Care',
  'Baby Care',
  'Mother Care',
  'Ward Boy Services',
  'House Maid & Domestic Help',
  'Medical Attendants for Critical Care',
  'Post Surgery & Rehabilitation Care',
];

const PatientIntakeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    age: '',
    gender: 'Male',
    location: '',
    selectedServices: [] as string[],
    preferredStartDate: 'Day Shift',
    preferredCareDuration: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        selectedServices: checked
          ? [...prev.selectedServices, value]
          : prev.selectedServices.filter(service => service !== value),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('--- Form Submission Initiated ---');
    setLoading(true);

    try {
      // 1. Submit Core Patient Details
      const coreDetails = {
        fullName: formData.fullName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        age: Number(formData.age) || 0,
        gender: formData.gender,
        location: formData.location,
        timestamp: serverTimestamp(),
      };
      await addDoc(collection(db, 'Core Patient Details'), coreDetails);
      console.log('Step 1: SUCCESS! Core Patient Details submitted.');

      // 2. Submit Service Selection
      if (formData.selectedServices.length > 0) {
        await addDoc(collection(db, 'Service Selection'), {
          selectedServices: formData.selectedServices,
        });
        console.log('Step 2: SUCCESS! Service Selection submitted.');
      }

      // 3. Submit Scheduling & Preferences
      await addDoc(collection(db, 'Scheduling & Preferences'), {
        preferredStartDate: formData.preferredStartDate,
        preferredCareDuration: formData.preferredCareDuration,
      });
      console.log('Step 3: SUCCESS! Scheduling & Preferences submitted.');

      setSubmitted(true);
    } catch (error) {
      console.error('--- SUBMISSION FAILED ---', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      alert(`There was an error submitting the form: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success-message">
        <strong className="font-bold">Submission successful!</strong>
        <p className="message-text">Thank you. Our team will get in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="patient-intake-form">
            <div className="form-grid">
        {/* Core Patient Details */}
        <div className="form-group full-span">
          <h3 className="form-section-title">Core Patient Details</h3>
        </div>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name *</label>
          <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber" className="form-label">Contact Number *</label>
          <input type="tel" name="contactNumber" id="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">Age *</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender *</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className="form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location *</label>
          <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} required className="form-input" placeholder="e.g., Pune, Maharashtra" />
        </div>

        {/* Service Selection */}
        <div className="form-group full-span">
          <h3 className="form-section-title">Service Selection</h3>
          <div className="checkbox-grid">
            {serviceOptions.map(service => (
              <div key={service} className="checkbox-item">
                <input
                  type="checkbox"
                  id={service}
                  name="selectedServices"
                  value={service}
                  checked={formData.selectedServices.includes(service)}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <label htmlFor={service} className="form-checkbox-label">{service}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduling & Preferences */}
        <div className="form-group full-span">
          <h3 className="form-section-title">Scheduling & Preferences</h3>
        </div>
        <div className="form-group">
          <label htmlFor="preferredStartDate" className="form-label">Preferred Start Date</label>
          <select name="preferredStartDate" id="preferredStartDate" value={formData.preferredStartDate} onChange={handleChange} className="form-select">
            <option>Day Shift</option>
            <option>Night Shift</option>
            <option>24/7 Care</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="preferredCareDuration" className="form-label">Preferred Care Duration</label>
          <input type="text" name="preferredCareDuration" id="preferredCareDuration" value={formData.preferredCareDuration} onChange={handleChange} required className="form-input" placeholder="e.g., 2 Weeks" />
        </div>

        <div className="form-group full-span">
          <button type="submit" disabled={loading} className="form-button">
          {loading ? 'Submitting...' : 'Submit Patient Details'}
        </button>
      </div>
    </div>
    </form>
  );
};

export default PatientIntakeForm;
