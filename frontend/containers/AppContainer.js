import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import Title from '../components/Title';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
>>>>>>> dd78ed88974f65a658a56ec3b3991742bd4c3390
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';


const AppContainer = ({ name }) => {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
