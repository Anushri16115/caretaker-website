import React from 'react';
import '../styles/Caretaker.css';
import Attendance from '../components/caretaker/Attendance';
import TaskList from '../components/caretaker/TaskList';
import Schedule from '../components/caretaker/Schedule';
import PatientReports from '../components/caretaker/PatientReports';

const Caretaker: React.FC = () => {
  return (
    <div className="caretaker-page">
      <header className="caretaker-header">
        <h1>Caretaker Dashboard</h1>
        <p>Your central hub for managing patient care and tasks.</p>
      </header>

      <div className="caretaker-content">
        <section className="caretaker-section">
          <h2>&#128203; Attendance</h2>
          <div className="card">
            <img src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Attendance" className="section-image" />
            <Attendance />
          </div>
        </section>

        <section className="caretaker-section">
          <h2>&#128188; Jobs / Task List</h2>
          <div className="card">
            <img src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Task List" className="section-image" />
            <TaskList />
          </div>
        </section>

        <section className="caretaker-section">
          <h2>&#128197; Schedule / Shift Details</h2>
          <div className="card">
            <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Schedule" className="section-image" />
            <Schedule />
          </div>
        </section>

        <section className="caretaker-section">
          <h2>&#128105;&zwj;&#9877;&#65039; Patient Monitoring / Reports</h2>
          <div className="card">
            <img src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Patient Reports" className="section-image" />
            <PatientReports />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Caretaker;
