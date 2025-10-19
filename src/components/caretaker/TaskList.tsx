import React from 'react';
import '../../styles/caretaker/TaskList.css';

const TaskList: React.FC = () => {
  return (
    <div className="task-list-module">
      <h3>Jobs / Task List</h3>
      <div className="task-filters">
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>

      <ul className="task-list">
        <li className="task-item high-priority">
          <span>Administer medication to Patient A</span>
          <button className="complete-btn">Mark as complete</button>
        </li>
        <li className="task-item medium-priority">
          <span>Assist Patient B with daily exercise</span>
          <button className="complete-btn">Mark as complete</button>
        </li>
        <li className="task-item low-priority">
          <span>Update patient records</span>
          <button className="complete-btn">Mark as complete</button>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
