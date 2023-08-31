import { svg } from "../../assets/svg";
import PieChart from "../charts-graphs/PieChart";

const Assets = ({ coins }) => {
  return (
    // css are in Dashboard.css
    <div className="assets-container">
      <div className="header">
        <h3>Assests</h3>
        <p>{svg.morevertFlat}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PieChart coins={coins} />
      </div>
    </div>
  );
};

export default Assets;
