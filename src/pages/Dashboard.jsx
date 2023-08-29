import { svg } from "../assets/svg";
import "./Dashboard.css";
const Dashboard = () => {
  const ballance = {
    estimated: {
      total: 123978,
      monthlyProfit: 2560.78,
      growth: 14.67,
    },
    btcusdt: {
      total: 23738,
      pnlDaily: -16.78,
      growth: 14.67,
      graphData: [
        {
          x: 1,
          y: 2,
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
    },
    ethusdt: {
      total: 23738,
      pnlDaily: 189.78,
      growth: 14.67,
      graphData: [
        {
          x: 1,
          y: 2,
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
    },
    solusdt: {
      total: 23738,
      pnlDaily: 556.78,
      growth: 14.67,
      graphData: [
        {
          x: 1,
          y: 2,
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
    },
  };
  const { estimated, btcusdt, ethusdt, solusdt } = ballance;
  return (
    <div className="dashboard-container">
      <div className="first-row">
        <div className="column estimated-balance-card">
          <div className="card-header">
            <img src="/images/wallet.png" alt="wallet-icon" />
            <h3>Estimated Balance</h3>
            <img src="/images/eye.png" alt="eye-icon" />
          </div>
          <div className="card-body">
            <h3 className="balance">${estimated.total}</h3>
            <div className="profit">
              <p className="profit-text">Monthly Profit</p>
              <p className="profit-value">
                {estimated.monthlyProfit < 1 ? "-" : "+"}$
                {estimated.monthlyProfit}
              </p>
              <p className="growth">
                {estimated.growth < 1 ? "-" : "+"}${estimated.growth}
              </p>
            </div>
          </div>
        </div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="second-row">
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="third-row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default Dashboard;
