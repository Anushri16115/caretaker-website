import React from 'react';
import '../../styles/caretaker/PatientReports.css';

const PatientReports: React.FC = () => {
  return (
    <div className="patient-reports-module">
      <h3>Patient Monitoring / Reports</h3>
      <div className="report-actions">
        <button>Create New Report</button>
        <button>View Historical Reports</button>
      </div>

      <div className="recent-reports">
        <h4>Recent Reports</h4>
        {/* Placeholder for recent reports list */}
        <div className="report-item">
          <p><strong>Patient A:</strong> Vitals stable, no new issues.</p>
          <button className="share-btn">Share</button>
        </div>
        <div className="report-item">
          <p><strong>Patient B:</strong> Progressing well with physiotherapy.</p>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PatientReports;
