import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Title from '../components/Title';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AppContainer = ({ name }) => {
    return (
        <div>
            <NavBar />
            <Footer />
        </div>
=======
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

const AppContainer = ({ name }) => {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
>>>>>>> 67eca5be665a79b4057abb41b35c6390230c9310
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
