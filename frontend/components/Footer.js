import React from "react";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">

      <div className="socialbar">
        <li className="left"> ©2017 Artem, Inc. </li>
        <li className="right1"><a href="#" className="fa fa-facebook"></a></li>
        <li className="right1"><a href="#" className="fa fa-twitter"></a></li>
        <li className="right1"><a href="#" className="fa fa-instagram"></a></li>
      </div>

      </div>
    );
  }
}

export default Footer;
