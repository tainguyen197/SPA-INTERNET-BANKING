import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './component/Login/Login';
import DashboardUser from './component/User/Dashboard/Dashboard';
import Movee from './component/User/MoveMoney';


const Routes = () => (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={DashboardUser}/>
            <Route exact path="/test" component={Movee}/>
        </Switch> )

export default Routes