import ReactApexChart from "react-apexcharts";

const PieChart = ({ coins }) => {
  const series = [];
  coins.map((e) => {
    series.push(e.total);
  });
  const labels = [];
  coins.map((e) => {
    labels.push(e.symbol);
  });

  const options = {
    labels: labels,
    chart: {
      type: "donut",
    },
    responsive: [
      {
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
      },
      donut: {
        colors: ["#546E7A", "#E91E63", "#000"],
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
    <div>
      <ReactApexChart
        options={options}
        series={series}
        labels={labels}
        type="donut"
        width={"90%"}
      />
    </div>
  );
};

export default PieChart;
