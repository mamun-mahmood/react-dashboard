import Markets from "../components/dashboard/Markets";
import "./Dashboard.css";
import Balances from "../components/dashboard/Balances";
import CoinChart from "../components/dashboard/CoinChart";
import Assets from "../components/dashboard/Assets";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="first-row">
          <Balances />
        </div>
        <div className="second-row">
          <div className="column">
            <CoinChart />
          </div>
          <div className="column">
            <Markets />
          </div>
        </div>
        <div className="third-row">
          <div className="column">
            <Assets />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
