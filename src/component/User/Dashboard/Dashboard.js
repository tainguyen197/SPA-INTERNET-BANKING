import React, { Component } from 'react';
import '../../../style/dashboard.css'
import MoveMoneyModel from '../MoveMoney';
import ListAccount from './ListAccount';
import ListReceiver from './ListReceiver';
import { Route, NavLink,  HashRouter } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.TransactionMoney = this.TransactionMoney.bind(this);
        this.state = {

        }
    }

    TransactionMoney(){
        
    }


    render() {
        return (
            <HashRouter>
            <div>     
               <div className = "dashboard-header">
                <img className = "icon-avatar"></img>
                <div className = "usernam-lable">Xin chào, Nguyễn Trung Tài</div>
                </div>
                <Route path = "/receiver" component = {ListReceiver}></Route>
                <Route path = "/account" component = {ListAccount}></Route>
                {/* <MoveMoneyModel></MoveMoneyModel> */}
            </div>
            </HashRouter>
        )
    }
}

export default Dashboard;