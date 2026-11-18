import React from 'react';

function Header({ totalCount, completedCount }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  const progressPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="todo-header">
      <div className="header-top">
        <div className="header-title-group">
          <div className="header-icon-badge">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div>
            <h1>Task Tracker</h1>
            <p className="header-subtitle">Stay organized and get things done</p>
          </div>
        </div>
        <div className="header-date">
          <span>{today}</span>
        </div>
      </div>

      {totalCount > 0 && (
        <div className="progress-section">
          <div className="progress-label">
            <span>Progress</span>
            <span>
              {completedCount} of {totalCount} completed ({progressPercentage}%)
            </span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
