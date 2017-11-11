import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';


export default class Routes extends Component {
   render() {
      return(
       <div>
         <Switch>
           {/* <Route path="/" exact={true} component={MainPageContainer}/> */}
         </Switch>
       </div>
     )
   }
}
