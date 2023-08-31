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
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* sidebar */}
      <Sidebar />
      <div
        style={{
          flex: 1,
        }}
      >
        {/* navbar */}
        <Navbar setDarkMode={setDarkMode} />
        {/* screens */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
