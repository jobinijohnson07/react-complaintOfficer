import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/login/login';
import Dash from '../components/dashboard/dashboard';



class Routes extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/dashboard" component={Dash} />
                                 
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
