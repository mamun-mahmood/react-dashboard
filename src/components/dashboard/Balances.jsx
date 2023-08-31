import LineChart from "../charts-graphs/LineChart";
import "./Balances.css";
const Balances = ({ coins }) => {
  const estimatedBalance = {
    name: "Estimated Balance",
    total: 123978,
    monthlyProfit: 2560.78,
    growth: 14.67,
    backgroundColor: "#2F80ED33",
  };
  const { growth, monthlyProfit, name, total, backgroundColor } =
    estimatedBalance;
  return (
    <>
      <div className="column card estimated-balance-card">
        <div className="card-header">
          <div
            style={{
              backgroundColor: `${backgroundColor}`,
              padding: "8px",
              borderRadius: 10,
              display: "flex",
              width: "44px",
              height: "43px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/images/wallet.png" alt="wallet-icon" />
          </div>
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
              {growth < 1 ? "-" : "+"}
              {growth.toString().replace("-", "")}
            </p>
          </div>
        </div>
      </div>
      {coins?.map(
        ({
          growth,
          name,
          total,
          graphData,
          pnlDaily,
          image,
          symbol,
          backgroundColor,
        }) => (
          <div className="column card coin-card" key={name}>
            <div className="card-header">
              <div
                style={{
                  backgroundColor: `${backgroundColor}`,
                  borderRadius: 10,
                  display: "flex",
                  width: "44px",
                  height: "43px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
              >
                <div
                  style={{
                    borderRadius: 10,
                    background: "rgba(0, 0, 0, 0.3)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={image} alt="wallet-icon" />
                </div>
              </div>
              <div className="name-symbol">
                <h3>{symbol}</h3>
                <p>{name}</p>
              </div>
            </div>
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 className="balance">${total}</h3>

                <LineChart
                  graphData={graphData}
                  backgroundColor={backgroundColor}
                />
              </div>
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
    </>
  );
};

export default Balances;
