import { useState } from "react";
import "./App.css";

function App() {
  // ===== Use State Variables =====
  const [tasks, setTasks] = useState([
  { text: "Project 1", completed: false },
  { text: "Laundry", completed: false },
  { text: "Walk Dogs", completed: false },
  { text: "clean room", completed: false }
]);

  const [inputValue, setInputValue] = useState("");

  // ===== Functions ======
  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
    }
    setInputValue("");
  };
  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  // ==== JSX that gets returned =====
  return (
    <div className="container">
      <h1>My To Do List</h1>
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task.text}</span>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
