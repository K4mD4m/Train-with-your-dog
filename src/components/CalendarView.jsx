import Calendar from "react-calendar";
import { useTaskContext } from "../context/TaskContext";

const CalendarView = () => {
  const { selectedDate, setSelectedDate } = useTaskContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
        Select a date:
      </h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="bg-gray-100 shadow-md rounded-md p-4 border border-gray-200"
        tileClassName="hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default CalendarView;
