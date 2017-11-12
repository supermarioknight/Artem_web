import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Type from '../components/Type';
import NavBar from '../components/NavBar';
import Typed from 'Typed.js';
import Footer from '../components/Footer.js'
import Demo from '../components/Demo.js'
import Chart from '../components/chart.js'

export default class MainPageContainer extends Component {
  render() {
    return(
      <div className="main-paige-container">
        <NavBar/>
        <Type/>
        <Demo/>
        <Chart/>
        <Footer/>
      </div>
    )
  }
}
