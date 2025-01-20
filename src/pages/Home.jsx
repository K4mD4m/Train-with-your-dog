import CalendarView from "../components/CalendarView";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <CalendarView />
        </div>

        <div className="lg:col-span-1">
          <TaskForm />
        </div>

        <div className="lg:col-span-1 overflow-y-auto max-h-screen">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
