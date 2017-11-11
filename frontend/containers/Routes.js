import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Type from '../components/Type';
import MainPageContainer from './MainPageContainer';
import Footer from '../components/Footer.js'
import Chart from '../components/Chart.js'

// export default class Routes extends Component {
//    render() {
//       return(
//        <div>
//          <Switch>
//            <Route path="/" exact={true} component={Type}/>
//          </Switch>
//        </div>
//      )
//    }
// }

const Routes = ({ name }) => {
    return (
        <div>
          <div>
            <Switch>
              <Route path="/" exact={true} component={Footer}/>
              // <Route path="/" exact={true} component={Chart}/>
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
