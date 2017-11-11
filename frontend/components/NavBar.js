import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="topnav">
          <ul className="navEl">
              <li className="signup"><img src="http://preview.ibb.co/fP3zxb/magnify.png" alt="magnify" width="40" height="40"/></li>
              <li className="login"><a href="#">LOGIN</a></li>
              <li className="about"><a href="#">ABOUT</a></li>
              <li className="home"><a href="#">HOME</a></li>
              <li className="logo"><img src="http://preview.ibb.co/jx5Mcb/Logo.png" alt="Logo" width="175" height="175"/></li>
          </ul>
      </div>
    );
  }
}

export default NavBar;
