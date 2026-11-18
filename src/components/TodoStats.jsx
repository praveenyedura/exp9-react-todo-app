import React from 'react';

function TodoStats({ total, active, completed }) {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <span className="stat-value">{total}</span>
        <span className="stat-label">Total Tasks</span>
      </div>
      <div className="stat-card stat-pending">
        <span className="stat-value">{active}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat-card stat-completed">
        <span className="stat-value">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
    </div>
  );
}

export default TodoStats;
