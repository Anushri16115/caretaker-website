import React from 'react';
import '../../styles/caretaker/Attendance.css';

const Attendance: React.FC = () => {
  return (
    <div className="attendance-module">
      <h3>Attendance</h3>
      <div className="attendance-actions">
        <button className="check-in-btn">Check-in</button>
        <button className="check-out-btn">Check-out</button>
      </div>

      <div className="attendance-summary">
        <h4>Monthly Summary</h4>
        <p>Total Hours: <strong>160 hours</strong></p>
        {/* Placeholder for attendance records table */}
      </div>

      <div className="attendance-correction">
        <h4>Request Correction</h4>
        <form>
          <input type="date" />
          <input type="text" placeholder="Reason for correction" />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
