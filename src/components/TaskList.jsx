import { useTaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, selectedDate, deleteTask } = useTaskContext();
  const dateKey = selectedDate?.toISOString().split("T")[0];
  const tasksForDate = tasks?.[dateKey] || [];

  const handleDeleteTask = (taskIndex) => {
    deleteTask(selectedDate, taskIndex);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">
        Tasks for {selectedDate.toDateString()}
      </h2>
      {tasksForDate.length > 0 ? (
        <ul className="list-disc pl-5">
          {tasksForDate.map((task, index) => (
            <li key={index} className="mb-1">
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks for this date.</p>
      )}
    </div>
  );
};

export default TaskList;
