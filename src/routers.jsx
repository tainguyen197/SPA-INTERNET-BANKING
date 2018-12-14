import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './component/Login';
import DashboardUser from './component/User/Dashboard';

const Routes = () => (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={DashboardUser}/>
        </Switch> )

export default Routes