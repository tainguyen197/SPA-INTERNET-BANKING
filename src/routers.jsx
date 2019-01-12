import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './component/Login/Login';
import DashboardUser from './component/User/Dashboard/Dashboard';
import bankStaffHome from './component/Staff/BankStaffHome';
import recharge from './component/Staff/Recharge';
import createAccount from './component/Staff/CreateAccount';
import createUserAccount from './component/Staff/UserAccount';
import createCheckingAccount from './component/Staff/CheckingAccount';
const Routes = () => (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={DashboardUser}/>
            <Route exact path="/bankstaffhome" component={bankStaffHome}/>
        </Switch> )

export default Routes