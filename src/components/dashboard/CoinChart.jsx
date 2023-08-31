import { useState } from "react";
import CandleStickChart from "../charts-graphs/CandleStickChart";

const CoinChart = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTCUSDT",
      total: 23738,
      pnlDaily: -16.78,
      growth: 14.67,
      graphData: [
        {
          x: new Date().toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date().toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03],
        },
      ],
      image: "/images/btc.png",
      backgroundColor: "#F0C98C",
    },
  ];

  const [active, setActive] = useState("1H");
  const chartButtons = ["1H", "3H", "5H", "1D", "1W", "1M"];
  return (
    // css are in Dashboard.css
    <div className="coin-chart-container">
      <div className="header-container">
        <div className="coin">
          <h3 className="symbol">{coins[0].symbol}</h3>
          <p className="name">{coins[0].name}</p>
        </div>
        <div className="balance">
          <div>
            <h3>${coins[0].total}</h3>
            <p className="growth">
              {coins[0].growth < 1 ? "-" : "+"}${coins[0].growth}
            </p>
          </div>
          <img src="/images/down-arrow.png" alt="down-arrow" />
        </div>
        <div className="chart-buttons">
          {chartButtons.map((e) => (
            <button
              key={e}
              onClick={() => setActive(e)}
              className={`${active === e && "active"}`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
      <CandleStickChart coin={coins[0]} />
    </div>
  );
};

export default CoinChart;
