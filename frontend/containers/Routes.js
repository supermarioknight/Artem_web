import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Type from './components/Type'


export default class Routes extends Component {
   render() {
      return(
       <div>
         <Switch>
           <Route path="/" exact={true} component={Type}/>
         </Switch>
       </div>
     )
   }
}
