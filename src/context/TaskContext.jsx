import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  //Load tasks from local storage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    setSelectedDate(today);
  }, []);

  //Save tasks to local storage
  const saveToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem(
      "selectedDate",
      selectedDate.toLocaleDateString("en-CA")
    );
  };

  //Add task to date
  const addTask = (date, taskText) => {
    const taskId = Date.now();
    const task = { id: taskId, text: taskText };

    const dataKey = date.toLocaleDateString("en-CA");
    setTasks((prev) => {
      const updatedTasks = {
        ...prev,
        [dataKey]: [...(prev[dataKey] || []), task],
      };
      saveToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  //Delete task from date
  const deleteTask = (date, taskId) => {
    const dataKey = date.toLocaleDateString("en-CA");

    setTasks((prev) => {
      const updatedTasks = { ...prev };

      if (updatedTasks[dataKey]) {
        updatedTasks[dataKey] = updatedTasks[dataKey].filter(
          (task) => task.id !== taskId
        );

        if (updatedTasks[dataKey].length === 0) {
          delete updatedTasks[dataKey];
        }
      }

      saveToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, selectedDate, setSelectedDate }}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTaskContext = () => useContext(TaskContext);
