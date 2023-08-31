import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />
      <div
        style={{
          flex: 1,
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        {/* navbar */}
        <Navbar setDarkMode={setDarkMode} toggleSidebar={toggleSidebar} />
        {/* screens */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
