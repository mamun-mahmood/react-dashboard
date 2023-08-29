import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
        }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Main;
