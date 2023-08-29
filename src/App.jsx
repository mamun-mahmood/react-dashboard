import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
function App() {
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
        <Navbar />
        {/* screens */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
