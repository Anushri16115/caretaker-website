import React from 'react';
import '../../styles/caretaker/Schedule.css';

const Schedule: React.FC = () => {
  return (
    <div className="schedule-module">
      <h3>Schedule / Shift Details</h3>
      <div className="schedule-view">
        {/* Placeholder for weekly schedule calendar */}
        <p><strong>Monday:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>Tuesday:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>Wednesday:</strong> Day Off</p>
        <p><strong>Thursday:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>Friday:</strong> 9:00 AM - 5:00 PM</p>
      </div>

      <div className="schedule-actions">
        <button>Swap Shift</button>
        <button>Request Change</button>
      </div>
    </div>
  );
};

export default Schedule;
