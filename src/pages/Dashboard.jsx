import Markets from "../components/dashboard/Markets";
import "./Dashboard.css";
import Balances from "../components/dashboard/Balances";
import CoinChart from "../components/dashboard/CoinChart";
import Assets from "../components/dashboard/Assets";
import Convert from "../components/dashboard/Convert";
const Dashboard = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTCUSDT",
      total: 15302,
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
    {
      name: "Ethereum",
      symbol: "ETHUSDT",
      total: 23738,
      pnlDaily: 189.78,
      growth: 14.67,
      graphData: [
        {
          x: 1,
          y: 0,
        },
        {
          x: 2,
          y: 10,
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
          y: 7,
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
          y: 0,
        },
        {
          x: 9,
          y: 25,
        },
        {
          x: 10,
          y: 30,
        },
      ],
      image: "/images/eth.png",
      backgroundColor: "#9181DB",
    },
    {
      name: "Solana",
      symbol: "SOLUSDT",
      total: 23738,
      pnlDaily: 556.78,
      growth: 14.67,
      graphData: [
        {
          x: 1,
          y: 21,
        },
        {
          x: 2,
          y: 10,
        },
        {
          x: 3,
          y: 15,
        },
        {
          x: 4,
          y: 4,
        },
        {
          x: 5,
          y: 7,
        },
        {
          x: 6,
          y: 0,
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
          y: 25,
        },
        {
          x: 10,
          y: 30,
        },
      ],
      image: "/images/sol.png",
      backgroundColor: "#F0A0A0",
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <div className="first-row">
          <Balances coins={coins} />
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
            <Assets coins={coins} />
          </div>
          <div className="column">
            <Convert coins={coins} />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
