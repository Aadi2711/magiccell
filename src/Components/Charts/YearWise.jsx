import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class YearWise extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'donut',
        },
        colors: ['#2D9576', '#54997E', '#7CAE85', '#A3C38D', '#CAD994'], // Different shades of green
        labels: ['2020', '2021', '2022', '2023', '2024'], // Year labels
        title: {
          text: 'Year Wise Data',
          align: 'center',
          style: {
            color: '#FFFFFF', // Title text color
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: undefined,
          },
        },
      },
      series: [44, 55, 41, 17, 15],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
      </div>
    );
  }
}

export default YearWise;
