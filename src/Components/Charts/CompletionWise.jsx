import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

class CompletionWise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50, 200],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ['Open', 'Close'],
        colors: ['#2D9576', 'rgba(0, 143, 251, 0.85)'], // Custom colors
        title: {
          text: "Issue Status",
          align: "center",
          style: {
            color: "#FFFFFF", // Title text color
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: undefined,
          },
        },
        legend: {
          labels: {
            colors: "#FFFFFF", // Label text color
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={400} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default CompletionWise;
