import React, { Component } from 'react';
import '../../../style/dashboard.css'

import ListAccount from './ListAccount';
import ListReceiver from './ListReceiver';
import { Route, NavLink, HashRouter } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.TransactionMoney = this.TransactionMoney.bind(this);
        this.state = {
            isMoveMoneyModal: true
        }
    }

    TransactionMoney() {

    }

    myCallback = (dataFromChild) => {
      console.log('a');
    }

    render() {
        return (
            <HashRouter>
                <div >
                    <div className="dashboard-header">
                        <img className="icon-avatar"></img>
                        <div className="usernam-lable">Xin chào, Nguyễn Trung Tài</div>
                    </div >
                    <div className="dashboard-body">
                        <Route path="/receiver" component={ListReceiver}></Route>
                        <Route path="/account" component={ListAccount}></Route>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Dashboard;