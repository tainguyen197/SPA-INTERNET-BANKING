import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserAccount from './UserAccount';
import checkingAccount from './CheckingAccount';
import { Route } from 'react-router-dom'
const divstyle = {
    'background-color': 'rgba(255, 255, 255, 0)',
    'position': 'relative',
    'top': '10px'
};
const divstyle1 = {
    'background-color': 'rgba(255, 255, 255, 0)',
};

const divposition = {
    'background-color': 'rgba(255, 255, 255, 0)',
    'position': 'relative',
    'top': '60px'
}

class CreateAccount extends Component {
    render() {
        return (
            <div>
                <div style={divstyle} className="center-menu">
                    <div style={divstyle}  className = "col-md-6"><NavLink  to = "/create-account/create-user-account"> <Glyphicon glyph="glyphicon glyphicon-usd" className ="glyph-menu"></Glyphicon>Tài khoảng người dùng</NavLink></div>
                    <div style={divstyle}  className = "col-md-6"><NavLink  to = "/create-account/create-checking-account"><Glyphicon glyph="glyphicon glyphicon-transfer"className ="glyph-menu"></Glyphicon>Tài khoảng thanh toán</NavLink></div>
                </div>
                <div style={divposition} className="dashboard-body">
                        <Route path="/create-account/create-user-account" component={UserAccount}></Route>
                        <Route path="/create-account/create-checking-account" component={checkingAccount}></Route>
                </div>
            </div>
        )
    }
}

export default CreateAccount;