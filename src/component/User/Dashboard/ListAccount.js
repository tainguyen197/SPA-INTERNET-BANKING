import React, { Component } from 'react';
import '../../../style/dashboard.css'
import { NavLink } from 'react-router-dom'
import {Glyphicon } from 'react-bootstrap'



class ListAccount extends Component {
    constructor(props) {
        super(props);
        this.TransactionMoney = this.TransactionMoney.bind(this);
    }

    TransactionMoney() {
        console.log(this.props.actions);
        console.log(this.props.avaiableBalaces);
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
                    <div>
                        <div className="col-md-1 wallet-icon timo-spendaccounticon"></div>
                        <div className="col-md-3 ">
                            <div className="wallet-transaction">12.200.333</div>
                            <div ><NavLink  className="link btn-menu" to = "/transaction">Xem các giao dịch </NavLink></div>
                        </div>

                        <div className="col-md-3 move-money-label">Chuyển tiền<Glyphicon glyph="glyphicon glyphicon-transfer"className ="glyph-menu"></Glyphicon></div>
                       
                       </div>
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
                    <div className="col-md-3 ">
                        <div className="wallet-transaction">12.200.333</div>
                        <div onClick = {this.TransactionMoney}>Xem các giao dịch</div>
                    </div>

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
                    <div className="col-md-3 ">
                        <div className="wallet-transaction">12.200.333</div>
                        <div>Xem các giao dịch</div>
                    </div>

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
                    <div className="col-md-3 ">
                        <div className="wallet-transaction">12.200.333</div>
                        <div>Xem các giao dịch</div>
                    </div>

                    <div className="col-md-2 move-money-label">Chuyển tiền</div>
                    <div className="col-md-1 transfer-icon"></div>

                </div>

            </div>
        )
    }
}

export default  (ListAccount);