import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
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
