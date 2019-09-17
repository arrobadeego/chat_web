import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Login from './pages/Login';
// import Registration from './pages/Registration';
// import Main from './pages/Main';
import SignUp from '../pages/SignUp';

function Routes() {
    return (
        <Switch>
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/registration" exact component={SignUp} />
            {/* <Route path="/main" exact component={Main} /> */}
        </Switch>
    );
}

export default Routes;
