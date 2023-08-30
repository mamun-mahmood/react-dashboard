import { useState } from "react";
import "./Markets.css";
const Markets = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTCUSDT",
      total: 23738,
      pnlDaily: -16.78,
      growth: 14.67,
    },
    {
      name: "Ethereum",
      symbol: "ETHUSDT",
      total: 23738,
      pnlDaily: 189.78,
      growth: -14.67,
    },
    {
      name: "Solana",
      symbol: "SOLUSDT",
      total: 23738,
      pnlDaily: 556.78,
      growth: 14.67,
    },
    {
      name: "Axie Infinity",
      symbol: "AXSUSDT",
      total: 23738,
      pnlDaily: 556.78,
      growth: 14.67,
    },
    {
      name: "Binance",
      symbol: "BNBUSDT",
      total: 23738,
      pnlDaily: 556.78,
      growth: 14.67,
    },
    {
      name: "Cardano",
      symbol: "ADAUSDT",
      total: 0.49,
      pnlDaily: 556.78,
      growth: -4.67,
    },
  ];
  const [active, setActive] = useState("All");
  const buttons = [
    {
      label: "All",
    },
    {
      label: "Metaverse",
    },
    {
      label: "Gaming",
    },
    {
      label: "Defi",
    },
    {
      label: "NFT",
    },
  ];
  return (
    <div className="markets-container">
      <div className="header-container">
        <h3>Markets</h3>
        {buttons.map((e) => (
          <button
            onClick={() => setActive(e.label)}
            className={`${active === e.label && "active"}`}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="body">
        {coins.map(({ growth, name, symbol, total }) => (
          <div className="markets-coin">
            <h3>{symbol}</h3>
            <p>{name}</p>
            <h3>{total}</h3>
            <p
              className="growth"
              style={{
                backgroundColor: `${
                  growth < 1
                    ? "rgba(235, 87, 87, 0.20)"
                    : "rgba(33, 150, 83, 0.20)"
                }`,
                color: `${growth < 1 ? "#EB5757" : "#219653"}`,
              }}
            >
              {growth < 1 ? "-" : "+"}
              {growth.toString().replace("-", "")}%
            </p>
          </div>
        ))}
        <button>View All</button>
      </div>
    </div>
  );
};

export default Markets;
