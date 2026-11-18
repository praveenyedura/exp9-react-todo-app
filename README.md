# Case Study 9: Simple & User-Friendly React TODO App

A clean, modern, and user-friendly Todo application built with React and Vite. Deployed live on GitHub Pages.

🔗 **Live Demo**: [https://praveenyedura.github.io/exp9-react-todo-app/](https://praveenyedura.github.io/exp9-react-todo-app/)

---

## 🎯 Case Study Requirements Implemented

- ✅ **Add New Tasks**: Add tasks quickly with input validation and instant update.
- ✅ **Mark Tasks as Completed/Uncompleted**: Smooth checkbox toggle with strikethrough animation.
- ✅ **Delete Tasks**: Remove individual tasks with a single click.
- ✅ **View All Tasks in a Clean Interface**: Beautiful, responsive layout with progress indicator, active/completed stats, and filter tabs (All, Active, Completed).
- ✅ **Local Persistence**: Tasks are saved in `localStorage` so data persists across refreshes.
- ✅ **Deploy Live on GitHub Pages**: Built with automated GitHub Pages deployment.

---

## 🧩 Component Architecture

The app is built modularly with clean, focused React components:

| Component | Description |
|-----------|-------------|
| `Header.jsx` | App title, date badge, and animated completion progress bar |
| `TodoStats.jsx` | Quick status metrics (Total, Pending, Completed tasks) |
| `TodoInput.jsx` | Input field with validation and "Add Task" button |
| `TodoFilter.jsx` | Filter buttons (All, Active, Completed) with counters and "Clear Completed" action |
| `TodoList.jsx` | Renders the task collection or a friendly empty-state illustration |
| `TodoItem.jsx` | Individual task item with custom checkbox, text, timestamp, and delete action |
| `App.jsx` | Main application state manager, filter handler, and localStorage synchronization |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/praveenyedura/exp9-react-todo-app.git

# Navigate to project directory
cd exp9-react-todo-app

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
npm run build
```

### Deploying to GitHub Pages
```bash
npm run deploy
```

---

## 🛠️ Tech Stack
- **React 19**
- **Vite**
- **Vanilla CSS (Modern CSS Variables & Flexbox/Grid)**
- **GitHub Pages & gh-pages**
