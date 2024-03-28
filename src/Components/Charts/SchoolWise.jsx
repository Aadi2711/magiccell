import React, { Component } from "react";
import Chart from "react-apexcharts";

class SchoolWise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ['SET', 'SOB', 'SOL', 'VATEL', 'SAA', 'SOD', 'SHS'],
          labels: {
            show: true,
            style: {
              colors: "#FFFFFF", 
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: "#FFFFFF", 
            },
          },
        },
        grid: {
          show: false,
        },
        title: {
          text: "School Wise",
          align: "center",
          style: {
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: undefined,
            color: '#ffffff',
          },
        },
      },
      series: [
        {
          name: "Issues",
          data: [30, 40, 45, 50, 49, 60, 20],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SchoolWise;