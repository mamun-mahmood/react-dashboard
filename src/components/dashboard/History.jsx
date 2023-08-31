import { svg } from "../../assets/svg";
import "./History.css";
const History = () => {
  const histories = [
    {
      name: "Deposit",
      total: 15302,
      timestamp: new Date().getTime(),
      staus: "Pending",
    },
    {
      name: "SANDUSDT",
      total: -153,
      timestamp: new Date().getTime(),
      staus: "Done",
    },
    {
      name: "DOGEUSDT",
      total: 3500,
      timestamp: new Date().getTime(),
      staus: "Done",
    },
    {
      name: "SANDUSDT",
      total: 791,
      timestamp: new Date().getTime(),
      staus: "Done",
    },
  ];
  return (
    <div className="history-container">
      <div className="header">
        <h3>History</h3>
        <button>View All</button>
      </div>
      <div className="body">
        {histories.map(({ name, staus, timestamp, total }, index) => (
          <div
            key={index}
            className="history"
            style={{
              borderBottom: `${index === histories.length - 1 && "none"}`,
            }}
          >
            <div className="image">
              <img
                src={`/images/${
                  total < 1 ? "up-arrow-red.png" : "down-arrow-green.png"
                }`}
                alt=""
              />
            </div>
            <p className="name">{name}</p>
            <h3
              style={{
                color: `${total < 1 ? "#EB5757" : "#219653"}`,
              }}
            >
              ${total}
            </h3>
            <p
              className="status"
              style={{
                backgroundColor: `${
                  staus === "Pending" ? "#F2C94C33" : "rgba(33, 150, 83, 0.20)"
                }`,
                color: `${staus === "Pending" ? "#F2994A" : "#219653"}`,
              }}
            >
              {staus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
