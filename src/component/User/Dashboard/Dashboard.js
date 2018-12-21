import React, { Component } from 'react';
import '../../../style/dashboard.css'
import MoveMoneyModel from '../MoveMoney';
import ListAccount from './ListAccount';
import ListReceiver from './ListReceiver';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.TransactionMoney = this.TransactionMoney.bind(this);
    }

    TransactionMoney(){
        window.alert("Hello");
    }


    render() {
        return (
            <div>     
               <div className = "dashboard-header">
                <img className = "icon-avatar"></img>
                <div className = "usernam-lable">Xin chào, Nguyễn Trung Tài</div>
                </div>
                <ListReceiver></ListReceiver>
                {false & <ListAccount></ListAccount>}
                <MoveMoneyModel></MoveMoneyModel>
            </div>
        )
    }
}

export default Dashboard;