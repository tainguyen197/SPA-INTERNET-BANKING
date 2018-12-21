import React, { Component } from 'react';
import '../../../style/dashboard.css'
import { Route, NavLink,  HashRouter } from 'react-router-dom'

class ListAccount extends Component {
    constructor(props){
        super(props);
        this.TransactionMoney = this.TransactionMoney.bind(this);
    }

    TransactionMoney(){
       
    }


    render() {
        return (
            <div>     

              
                    <br></br>
                    <br></br>
                    <div className="center-home">
                        <div className="col-md-5">
                            <label className="account-mode">Tài khoản tín dụng</label>
                        </div>
                        <div className="col-md-7">
                            <label className="account-number">Số tài khoản: 0272616121</label>
                        </div>
                        <div className="col-md-12 home-line-cross"></div>

                        <div className="col-md-1 wallet-icon timo-spendaccounticon"></div>
                        <div className="col-md-3 wallet-transaction">3.200.333</div>

                        <a className="col-md-2 move-money-label" onClick={this.TransactionMoney} ><NavLink to="/receiver">Chuyển tiền</NavLink></a>
                        <div className="col-md-1 transfer-icon"></div>

                    </div>
                    <div className="center-home">
                        <div className="col-md-5">
                            <label className="account-mode">Tài khoản tín dụng</label>
                        </div>
                        <div className="col-md-7">
                            <label className="account-number">Số tài khoản: 0272616121</label>
                        </div>
                        <div className="col-md-12 home-line-cross"></div>

                        <div className="col-md-1 wallet-icon timo-spendaccounticon"></div>
                        <div className="col-md-3 wallet-transaction">3.200.333</div>

                        <div className="col-md-2 move-money-label">Chuyển tiền</div>
                        <div className="col-md-1 transfer-icon"></div>

                    </div>
                    <div className="center-home">
                        <div className="col-md-5">
                            <label className="account-mode">Tài khoản tín dụng</label>
                        </div>
                        <div className="col-md-7">
                            <label className="account-number">Số tài khoản: 0272616121</label>
                        </div>
                        <div className="col-md-12 home-line-cross"></div>

                        <div className="col-md-1 wallet-icon timo-spendaccounticon"></div>
                        <div className="col-md-3 wallet-transaction">3.200.333</div>

                        <div className="col-md-2 move-money-label">Chuyển tiền</div>
                        <div className="col-md-1 transfer-icon"></div>

                    </div>

               
            </div>
        )
    }
}

export default ListAccount;