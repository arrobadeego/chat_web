import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
        </Switch>
    );
}

export default Routes;