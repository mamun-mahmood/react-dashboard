import { useState } from "react";
import { svg } from "../../assets/svg";
import "./Convert.css";
const Convert = ({ coins }) => {
  const [selectedFrom, setSlectedFrom] = useState({
    symbol: coins[0].symbol,
    backgroundColor: coins[0].backgroundColor,
  });
  const [selectedTo, setSlectedTo] = useState({
    symbol: coins[1].symbol,
    backgroundColor: coins[1].backgroundColor,
  });
  const handleChangeFrom = (e) => {
    const selected = coins.filter((coin) => coin.symbol === e.target.value);
    setSlectedFrom({
      symbol: selected[0].symbol,
      backgroundColor: selected[0].backgroundColor,
    });
  };
  const handleChangeTo = (e) => {
    const selected = coins.filter((coin) => coin.symbol === e.target.value);
    setSlectedTo({
      symbol: selected[0].symbol,
      backgroundColor: selected[0].backgroundColor,
    });
  };
  return (
    <div className="convert-container">
      <div className="header">
        <h3>Convert</h3>
        <p>{svg.morevertFlat}</p>
      </div>
      <div className="inputs-container">
        <div className="input">
          <input type="number" placeholder="0000" />
          <div className="coin-select-container">
            <select
              name="coinSelect"
              id="coinSelect"
              className="coin-select"
              style={{
                backgroundColor: `${selectedFrom.backgroundColor}`,
                // color: `${selectedCoins.backgroundColor}`,
              }}
              onChange={handleChangeFrom}
            >
              {coins.map((e) => (
                <option key={e.symbol} className="option" value={e.symbol}>
                  {e.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input">
          <input type="number" placeholder="0000" />
          <div className="coin-select-container">
            <select
              name="coinSelect"
              id="coinSelect"
              className="coin-select"
              style={{
                backgroundColor: `${selectedTo.backgroundColor}`,
                // color: `${selectedCoins.backgroundColor}`,
              }}
              defaultValue={coins[1].symbol}
              onChange={handleChangeTo}
            >
              {coins.map((e) => (
                <option key={e.symbol} className="option" value={e.symbol}>
                  {e.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="convert-now">Convert Now</button>
        <p>
          The ultimate price and output is determined by the amount of tokens in
          the pool at the time of your swap.
        </p>
      </div>
    </div>
  );
};

export default Convert;
