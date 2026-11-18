import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError('Please enter a task description.');
      return;
    }
    onAddTodo(trimmed);
    setText('');
    setError('');
  };

  return (
    <div className="todo-input-container">
      <form onSubmit={handleSubmit} className="todo-input-form">
        <input
          type="text"
          className={`todo-input ${error ? 'input-error' : ''}`}
          placeholder="What do you need to do?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError('');
          }}
          aria-label="New task input"
        />
        <button type="submit" className="add-btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Add Task</span>
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default TodoInput;
