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
  const colors = [];
  coins.map((e) => {
    colors.push(e.backgroundColor);
  });
  const options = {
    labels: labels,
    chart: {
      type: "donut",
    },
    colors: colors,

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
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "16px",
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
        width={"100%"}
      />
    </div>
  );
};

export default PieChart;
