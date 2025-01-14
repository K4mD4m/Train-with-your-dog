import { useTaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, selectedDate, deleteTask } = useTaskContext();
  const dataKey = selectedDate?.toLocaleDateString("en-CA");
  const tasksForDate = tasks?.[dataKey] || [];

  const handleDeleteTask = (taskId) => {
    deleteTask(selectedDate, taskId);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        Tasks for {selectedDate.toDateString()}
      </h2>
      {tasksForDate.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2">
          {tasksForDate.map((task) => {
            const taskId = task.id;

            return (
              <li
                key={taskId}
                className="flex justify-between items-center p-2 border-b border-gray-200 hover:bg-gray-100 rounded-md"
              >
                {task.text}{" "}
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No tasks for this date.</p>
      )}
    </div>
  );
};

export default TaskList;
