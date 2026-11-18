import React from 'react';

function TodoFilter({ currentFilter, onFilterChange, counts, onClearCompleted }) {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="filter-wrapper">
      <div className="filter-group">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-btn ${currentFilter === f.key ? 'active' : ''}`}
            onClick={() => onFilterChange(f.key)}
          >
            <span>{f.label}</span>
            <span className="filter-count">{f.count}</span>
          </button>
        ))}
      </div>

      {counts.completed > 0 && (
        <button
          type="button"
          className="clear-completed-btn"
          onClick={onClearCompleted}
          title="Remove all completed tasks"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default TodoFilter;
