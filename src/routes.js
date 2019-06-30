import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Contacts from './pages/Contacts';

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/contacts" exact component={Contacts} />
        </Switch>
    );
}

export default Routes;