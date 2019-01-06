import React, { Component } from 'react';
import '../../../style/dashboard.css'
import { NavLink } from 'react-router-dom'
import { Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAccounAction from '../../../actions/userAccountActions'
import * as userAction from '../../../actions/userActions'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import Dropdown from 'react-dropdown'
import { ToastContainer, ToastStore } from 'react-toasts';

var selectedAccount;
var selectedAccountBalance;
class Account extends Component {

    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this._onSelect = this._onSelect.bind(this);
        this.state = {
            selectedAccount: null,
            balance: undefined,
        }
    }

    _onSelect = (value) => {
        selectedAccount = value.label
        selectedAccountBalance = value.value;
    }

    goNext() {
        this.props.hindModal();
        var data = {
            selectedAccount: selectedAccount,
            balance: selectedAccountBalance
        }
        this.props.sendDataAccount(data);
    }


    render() {
        var i = 0;
        const { account, accountSelected } = this.props;
        var options = [];
        account.forEach(element => {
            if (element.NumberAccount !== undefined && element.NumberAccount !== accountSelected) {
                i++;
                var option = { value: element.Balance, label: element.NumberAccount }
                options.push(option);
            }
        });

        return (
            <Modal
                show={true}
                onHide={this.props.hindModal}
            >
                <Modal.Header>
                    <Modal.Title>Chuyển tiền trong tài khoản của bạn</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <div className="form-move-money">
                            <Dropdown options={options} onChange={this._onSelect} placeholder="Lựa chọn tài khoản" />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.hindModal}>Đóng</Button>
                    <Button bsStyle="primary" onClick={this.goNext} >Tiếp tục</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}



class ListAccount extends Component {
    constructor(props) {
        super(props);
        this.customBalance = this.customBalance.bind(this);
        this.showTransaction = this.showTransaction.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.getDataAccount = this.getDataAccount.bind(this);
        this.hindModal = this.hindModal.bind(this);
        this.state = {
            AccountDelete: undefined,
            AccountDeleteBalance: undefined,
            AccountSelected: undefined,
            showModel: false
        }
    }

    getDataAccount(data) {
        var today = new Date()
        var date = today.getHours() + ':' + today.getMinutes() + ', Ngày ' + today.getDate() + ' Tháng ' + (today.getMonth() + 1) + ' Năm ' + today.getFullYear();
        var info = {
            ID: undefined,
            AccountNumberFrom: parseInt(this.state.AccountDelete),
            AccountNumberTo: parseInt(data.selectedAccount),
            Type: 'CHUYEN_TIEN',
            Time: date,
            MoneyTransaction: parseInt(this.state.AccountDeleteBalance),
            MoneyBalance: parseInt(this.state.AccountDeleteBalance),
            MoneyBalanceReceiver: parseInt(data.balance),
        }
        this.props.Transaction(info);
        //cập nhật tiền trong balance
        var money = {
            AccountNumberFrom: parseInt(this.state.AccountDelete),
            AccountNumberTo: parseInt(data.selectedAccount),
            MoneyTransaction: parseInt(this.state.AccountDeleteBalance),
        }
        this.props.UpdateBalance(money);
        ToastStore.success("Đã xóa tài khoản thành công");
        this.props.deleteAccount(parseInt(this.state.AccountDelete));
    }

    deleteAccount = (e, numberAccount, balance) => {
        var Verify;
        this.setState({
            AccountDelete: numberAccount,
            AccountDeleteBalance: balance
        })

        if (window.confirm("Bạn chắc chắn muốn xóa tài khoản này?")) {
            var { state } = this.props;
            var length = 0;
            for(var i = 0;i<state.length;i++){
                if(state[i].Status === 0)
                    length++;
            }
            if (length < 2) {
                window.alert('Bạn phải duy trì ít nhất 1 tài khoản thanh toán');
            }
            else {
                if (balance > 0) { }
                Verify = 1;
                this.setState({
                    showModel: true
                })
            }
        } else {

        }
        if (Verify === 1) {

        }
    }

    showTransaction(e, account) {
        this.props.onSelectAccountNumber(account);
    }

    customBalance = (number) => {

        var numberAccount = number.toString();
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


    hindModal() {
        this.setState({
            showModel: false
        })
    }

    render() {
        var { state } = this.props;
        return (
            <div>
                {this.state.showModel && <Account hindModal={this.hindModal} account={state} accountSelected={this.state.AccountDelete} sendDataAccount={this.getDataAccount}></Account>}
                <ToastContainer position={ToastContainer.POSITION.BOTTOM_CENTER} lightBackground store={ToastStore} />
                <br></br>
                <br></br>

                {state.map(account => {
                    console.log(state);
                    if (account !== undefined && account.NumberAccount !== undefined && account.Status === 0) {
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
                                        <div onClick={e => this.showTransaction(e, account)}><NavLink className="link btn-menu" to="/transaction">Xem các giao dịch </NavLink></div>
                                    </div>
                                    <div className="col-md-3 move-money-label">
                                        <Button onClick={e => this.deleteAccount(e, account.NumberAccount, account.Balance)}>Xóa tài khoản

                                    </Button></div>
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
        userAccountAction: bindActionCreators(userAccounAction.USER_ACCOUNT_TRANSACTIONS, dispatch),
        Transaction: bindActionCreators(userAccounAction.DO_TRANSACTIONS, dispatch),
        deleteAccount: bindActionCreators(userAction.DELETE_ACCOUNT, dispatch),
        UpdateBalance: bindActionCreators(userAction.UPDATE_LIST_ACCOUNT, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAccount);