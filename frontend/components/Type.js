import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Typed from 'Typed.js';

export default class Type extends Component {

  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const strings = [
      'Fine Art</br>Meets</br>Investment',
      'Invest</br>With</br>Artem'
    ];
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  };

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  };

  render() {
    return(
      <div className="type-container">
        <div className="type-wrap">
          <span
            className="typed-words"
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
        <div className="type-caption">
          <img src="https://preview.ibb.co/jnguxb/intertwine.png" alt="intertwine" border="0"/>
        </div>
      </div>
    )
  }
}
