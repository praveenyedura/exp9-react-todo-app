import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, currentFilter, onToggle, onDelete }) {
  if (todos.length === 0) {
    let emptyMessage = 'No tasks yet. Add one above to get started!';
    let emptySubtitle = 'Stay productive and keep track of your goals.';

    if (currentFilter === 'active') {
      emptyMessage = 'No active tasks!';
      emptySubtitle = 'All your current tasks are completed. Great job!';
    } else if (currentFilter === 'completed') {
      emptyMessage = 'No completed tasks yet.';
      emptySubtitle = 'Complete tasks by clicking their checkboxes.';
    }

    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3>{emptyMessage}</h3>
        <p>{emptySubtitle}</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
