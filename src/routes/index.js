import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/registration" exact component={SignUp} />

            <Route path="/dashboard" exact component={Dashboard} isPrivate />
        </Switch>
    );
}

export default Routes;
