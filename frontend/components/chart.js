import React from "react";
import { Link } from 'react-router-dom';
import Chart from 'chart.js';


class LineChart extends React.Component {

  render() {
    var ctx = "myChart";
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
              label: "My First dataset",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45],
          }]
      },

      // Configuration options go here
      options: {}
  });
    return (
      <div className="Line">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }
}

export default LineChart;
