import Calendar from "react-calendar";
import { useTaskContext } from "../context/TaskContext";

const CalendarView = () => {
  const { selectedDate, setSelectedDate } = useTaskContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select a date:</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="bg-white shadow-md rounded-md p-4"
      />
      <p className="mt-4">Selected date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default CalendarView;
