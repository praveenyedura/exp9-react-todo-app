import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoStats from './components/TodoStats';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import './App.css';

const LOCAL_STORAGE_KEY = 'taskmate_todos_exp9';

const INITIAL_TODOS = [
  {
    id: 1,
    text: 'Welcome to your React Todo App! 👋',
    completed: false,
    createdAt: 'Just now',
  },
  {
    id: 2,
    text: 'Check this task to mark it as completed ✅',
    completed: true,
    createdAt: 'Earlier',
  },
  {
    id: 3,
    text: 'Add your own tasks using the input above ✍️',
    completed: false,
    createdAt: 'Today',
  },
];

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load tasks from localStorage', e);
    }
    return INITIAL_TODOS;
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error('Failed to save tasks to localStorage', e);
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = totalCount - completedCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <main className="todo-card">
        <Header totalCount={totalCount} completedCount={completedCount} />

        <TodoStats
          total={totalCount}
          active={activeCount}
          completed={completedCount}
        />

        <TodoInput onAddTodo={addTodo} />

        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={{ all: totalCount, active: activeCount, completed: completedCount }}
          onClearCompleted={clearCompleted}
        />

        <TodoList
          todos={filteredTodos}
          currentFilter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <footer className="todo-footer">
          <p>
            Case Study 9 &bull; React Full Stack &bull; Built with React &amp; Vite
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
