import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Type from '../components/Type';
import MainPageContainer from './MainPageContainer';

<<<<<<< HEAD

=======
>>>>>>> f0879079c392da28d5a1dcdfffa75d356caeac3a
const Routes = ({ name }) => {
    return (
        <div>
          <div>
            <Switch>
              <Route path="/" exact={true} component={MainPageContainer}/>
<<<<<<< HEAD

=======
>>>>>>> f0879079c392da28d5a1dcdfffa75d356caeac3a
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
