import React from 'react'
import { Route, Switch } from 'react-router-dom'
//import Login from './component/Login/Login';
import home from '../Components/Home';
const Routes = () => (
        <Switch>
            {/*<Route exact path="/login" component={Login} />*/}
            <Route exact path="/home" component={home}/>
        </Switch> )

export default Routes