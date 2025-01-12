import { createContext, useState, useContext, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  //Load tasks from local storage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const storedDate = localStorage.getItem("selectedDate");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }

    if (storedDate) {
      setSelectedDate(new Date(storedDate));
    }
  }, []);

  //Save tasks to local storage
  const saveToLocalStorage = (updateedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updateedTasks));
    localStorage.setItem("selectedDate", selectedDate.toISOString());
  };

  //Add task to date
  const addTask = (date, task) => {
    const dataKey = date.toISOString().split("T")[0];
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
  const deleteTask = (date, taskIndex) => {
    const dataKey = date.toISOString().split("T")[0];
    setTasks((prev) => {
      const updatedTasks = { ...prev };

      if (updatedTasks[dataKey]) {
        updatedTasks[dataKey] = updatedTasks[dataKey].filter(
          (_, index) => index !== taskIndex
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

export const useTaskContext = () => useContext(TaskContext);
