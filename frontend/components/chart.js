import React from "react";
import { Link } from 'react-router-dom';
import {LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend} from 'recharts';

class Chart extends React.Component {

  render() {
    const data = [
          {name: 'January', uv: 4000, pv: 2400, amt: 2400},
          {name: 'February', uv: 3000, pv: 1398, amt: 2210},
          {name: 'March', uv: 2000, pv: 9800, amt: 2290},
          {name: 'April', uv: 2780, pv: 3908, amt: 2000},
          {name: 'May', uv: 1890, pv: 4800, amt: 2181},
          {name: 'June', uv: 2390, pv: 3800, amt: 2500},
          {name: 'July', uv: 3490, pv: 4300, amt: 2100},
    ];
    return (
      <div className="bigasscontainer">


      <div className="Artist">

        <div className="risingContemporaries">
            RISING CONTEMPORARIES
        </div>

        <div className="artImage">
          <img className="type-picture" src="https://preview.ibb.co/k3eAoG/Rose_Kuan_2.jpg" alt="intertwine" height="450" border="0"/>
        </div>

      </div>


        <div className="Line">
          <LineChart width={750} height={450} data={data}
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




      </div>
      );
  }
}
<<<<<<< HEAD

export default Chart;
=======
>>>>>>> f0879079c392da28d5a1dcdfffa75d356caeac3a
