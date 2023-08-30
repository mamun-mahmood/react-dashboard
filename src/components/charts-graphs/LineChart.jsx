import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ graphData, backgroundColor }) => {
  const series = [
    {
      data: graphData.map((e) => {
        return e.y;
      }),
    },
  ];
  const options = {
    chart: {
      offsetX: 0,
      offsetY: 0,
      parentHeightOffset: 0,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: { left: -10, right: 0, top: -50, bottom: -10 },
    },
    stroke: {
      curve: "smooth",
      show: true,
      colors: backgroundColor,
      width: 2,
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={60}
      width={"80%"}
    />
  );
};

export default LineChart;
