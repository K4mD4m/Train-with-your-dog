import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Examples from "./pages/Examples";
import Header from "./components/Header";
import { TaskProvider } from "./context/TaskContext";
import Inspiration from "./pages/Inspiration";
import Footer from "./components/Footer";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </TaskProvider>
  );
};

export default App;
