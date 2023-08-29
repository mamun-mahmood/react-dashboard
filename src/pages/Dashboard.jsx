import { svg } from "../assets/svg";
import "./Dashboard.css";
const Dashboard = () => {
  const estimatedBalance = {
    name: "Estimated Balance",
    total: 123978,
    monthlyProfit: 2560.78,
    growth: 14.67,
  };
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
      image: "/images/btc.png",
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
      image: "/images/eth.png",
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
      image: "/images/sol.png",
    },
  ];
  const { growth, monthlyProfit, name, total } = estimatedBalance;
  return (
    <div className="dashboard-container">
      <div className="first-row">
        <div className="column card estimated-balance-card">
          <div className="card-header">
            <img src="/images/wallet.png" alt="wallet-icon" />
            <h3>{name}</h3>
            <img src="/images/eye.png" alt="eye-icon" />
          </div>
          <div className="card-body">
            <h3 className="balance">${total}</h3>
            <div className="profit">
              <p className="profit-text">Monthly Profit</p>
              <p className="profit-value">
                {monthlyProfit < 1 ? "-" : "+"}${monthlyProfit}
              </p>
              <p className="growth">
                {growth < 1 ? "-" : "+"}${growth}
              </p>
            </div>
          </div>
        </div>
        {coins?.map(
          ({ growth, name, total, graphData, pnlDaily, image, symbol }) => (
            <div className="column card coin-card">
              <div className="card-header">
                <img src={image} alt="wallet-icon" />
                <div className="name-symbol">
                  <h3>{symbol}</h3>
                  <p>{name}</p>
                </div>
              </div>
              <div className="card-body">
                <h3 className="balance">${total}</h3>
                <div className="profit">
                  <p className="profit-text">PNL Daily</p>
                  <p className="profit-value">
                    {pnlDaily < 1 ? "-" : "+"}${pnlDaily}
                  </p>
                  <p className="growth">
                    {growth < 1 ? "-" : "+"}${growth}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
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
