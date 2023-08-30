import ReactApexChart from "react-apexcharts";

const CandleStickChart = ({ coin }) => {
  const series = [
    {
      data: coin.graphData,
    },
  ];

  const labels = [];
  // graphData.map((e) => {
  //   labels.push(e.total);
  // });
  const options = {
    // labels: labels
    chart: {
      type: "candlestick",
      height: 350,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    xaxis: {
      type: "numeric",
      toolTip: {
        show: false,
      },
    },
    yaxis: {
      type: "numeric",
      toolTip: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: { left: 0, right: 0, top: -0, bottom: 0 },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 2,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#C0D9FD",
          downward: "#3380FF",
        },
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "16px",
        fontFamily: undefined,
        padding: "20px",
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="candlestick"
      height={"90%"}
    />
  );
};
export default CandleStickChart;
