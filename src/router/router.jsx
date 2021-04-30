
import React, { Component } from 'react';
import App from '../App';
import SearchCountries from '../pages/searchCountries';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";




class Routerr extends Component {
  
    render() { 

        return ( 
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/searchCountries" component={SearchCountries} />
                </Switch>
            </Router>
         );
    }
}
 
export default Routerr;