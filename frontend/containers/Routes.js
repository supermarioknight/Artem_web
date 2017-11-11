import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Type from '../components/Type';
import MainPageContainer from './MainPageContainer';
import Footer from '../components/Footer.js'
import Chart from '../components/Chart.js'

const Routes = ({ name }) => {
    return (
        <div>
          <div>
            <Switch>
              <Route path="/" exact={true} component={MainPageContainer}/>
            </Switch>
          </div>
        </div>
    );
};

Routes.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);
