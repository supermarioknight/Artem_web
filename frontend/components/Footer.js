import React from "react";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <li className="left"> ©2017 Artem, Inc. </li>
        <li className="left1"> About </li>
        <li className="left1"> Contact </li>
        <li className="left1"> Blog </li>
        <li className="left1"> Press </li>


        <li className="right1"><a href="#" className="fa fa-facebook"></a></li>
        <li className="right1"><a href="#" className="fa fa-twitter"></a></li>
        <li className="right1"><a href="#" className="fa fa-instagram"></a></li>
      </div>
    );
  }
}

export default Footer;
