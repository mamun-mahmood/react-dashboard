import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
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
      </div>
    </div>
  );
}

export default App;
