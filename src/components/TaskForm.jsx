import { useTaskContext } from "../context/TaskContext";
import { useState } from "react";

const TaskForm = () => {
  const { selectedDate, addTask, tasks } = useTaskContext();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataKey = selectedDate.toLocaleDateString("en-CA");
    const tasksForDate = tasks?.[dataKey] || [];

    if (tasksForDate.length >= 20) {
      setError("You can only add up to 20 tasks per day.");
      return;
    }

    if (!task) {
      setError("Task cannot be empty.");
      setTimeout(() => setError(""), 2000);
      return;
    }

    addTask(selectedDate, task.trim());
    setTask("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2 className="text-xl font-bold mb-2">
        Add a task for {selectedDate.toDateString()}
      </h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-gray-300 p-2 rounded-md"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
      >
        Add Task
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default TaskForm;
