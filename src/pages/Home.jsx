import CalendarView from "../components/CalendarView";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CalendarView />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
