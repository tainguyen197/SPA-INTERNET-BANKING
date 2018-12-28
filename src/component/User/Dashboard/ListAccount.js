import React, { Component } from 'react';
import '../../../style/dashboard.css'
import { NavLink } from 'react-router-dom'
import { Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import {bindActionCreators } from 'redux'
import * as userAccounAction from '../../../actions/userAccountActions'
import axios from 'axios'


class ListAccount extends Component {
    constructor(props) {
        super(props);
        this.customBalance = this.customBalance.bind(this);
        this.showTransaction = this.showTransaction.bind(this);
    }

    showTransaction(e, account){
        this.props.onSelectAccountNumber(account);
    }

    customBalance = (number) => {
        console.log(number);
            var numberAccount = number.toString();
            //console.log(numberAccount);

            if (number) {
                var array = [];
                var i = 0;
                while (numberAccount.length >= 3) {
                    array[i] = numberAccount.substr(numberAccount.length - 3, 3);
                    numberAccount = numberAccount.substr(0, numberAccount.length - 3);
                    i++;
                }
                if (numberAccount.length > 0)
                    array[i] = numberAccount.substr(0, numberAccount.length);

                //console.log(array);
                var result = null;

                result = array[array.length - 1] + '.';
                for (var i = array.length - 2; i >= 0; i--) {
                    result = result + array[i] + '.'
                }
                result = result.substr(0, result.length - 1);

                return result;
            }
    }


    render() {
        var { state } = this.props;
        return (
            <div>
                <br></br>
                <br></br>
                {state.map(account => {
                    
                    if (account.NumberAccount !== undefined) {
                        var CustomBalance = this.customBalance(account.Balance);
                        return (
                            <div className="center-home">
                                <div className="col-md-5">
                                    <label className="account-mode">Tài khoản tín dụng</label>
                                </div>
                                <div className="col-md-7">
                                    <label className="account-number">Số tài khoản: {account.NumberAccount}</label>
                                </div>
                                <div className="col-md-12 home-line-cross"></div>
                                <div>
                                    <div className="col-md-1 wallet-icon timo-spendaccounticon"></div>
                                    <div className="col-md-3 ">
                                        <div className="wallet-transaction">{CustomBalance}</div>
                                        <div onClick = {e => this.showTransaction(e, account)}><NavLink className="link btn-menu" to="/transaction">Xem các giao dịch </NavLink></div>
                                    </div>
                                    <div className="col-md-3 move-money-label">Chuyển tiền<Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon></div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        state: state.UserListAccountReducer
    };
}

var mapDispatchToProps = (dispatch) => {
    return {
        userAccountAction: bindActionCreators(userAccounAction.USER_ACCOUNT_TRANSACTIONS, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAccount);