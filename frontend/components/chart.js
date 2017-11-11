<<<<<<< HEAD
// import React from "react";
// import { Link } from 'react-router-dom';
// import Chart from 'chart.js';
//
//
// class LineChart extends React.Component {
//
//   render() {
//     var ctx = "myChart";
//     var chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'line',
//
//       // The data for our dataset
//       data: {
//           labels: ["January", "February", "March", "April", "May", "June", "July"],
//           datasets: [{
//               label: "My First dataset",
//               backgroundColor: 'rgb(255, 99, 132)',
//               borderColor: 'rgb(255, 99, 132)',
//               data: [0, 10, 5, 2, 20, 30, 45],
//           }]
//       },
//
//       // Configuration options go here
//       options: {}
//   });
//     return (
//       <div className="Line">
//         <canvas id="myChart" width="400" height="400"></canvas>
//       </div>
//     );
//   }
// }
//
// export default LineChart;
=======
import React from "react";
import { Link } from 'react-router-dom';
import {LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend} from 'recharts';

class Chart extends React.Component {

  render() {
    const data = [
          {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
          {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];
    return (
      <div className="Line">
        <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      );
  }
}

export default Chart;
>>>>>>> 9bbf5350129f22747cd646f7a3913eb872f19591
