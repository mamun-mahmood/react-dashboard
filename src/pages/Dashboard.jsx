import Balances from "../components/balances/Balances";
import CandleStickChart from "../components/charts-graphs/CandleStickChart";
import Markets from "../components/markets/Markets";
import "./Dashboard.css";
const Dashboard = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTCUSDT",
      total: 23738,
      pnlDaily: -16.78,
      growth: 14.67,
      graphData: [
        {
          x: 1,
          y: 12,
        },
        {
          x: 2,
          y: 3,
        },
        {
          x: 3,
          y: 5,
        },
        {
          x: 4,
          y: 4,
        },
        {
          x: 5,
          y: 2,
        },
        {
          x: 6,
          y: 10,
        },
        {
          x: 7,
          y: 15,
        },
        {
          x: 8,
          y: 20,
        },
        {
          x: 9,
          y: 15,
        },
        {
          x: 10,
          y: 30,
        },
      ],
      image: "/images/btc.png",
      backgroundColor: "#F0C98C",
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <div className="first-row">
          <Balances />
        </div>
        <div className="second-row">
          <div className="column">
            <div className="header-container">
              <div className="coin">
                <p className="symbol">{coins[0].symbol}</p>
                <p className="name">{coins[0].name}</p>
              </div>
            </div>
            <CandleStickChart />
          </div>
          <div className="column">
            <Markets />
          </div>
        </div>
        <div className="third-row">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
