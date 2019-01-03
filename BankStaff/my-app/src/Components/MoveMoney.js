import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'react-dropdown/style.css'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAccountActions from '../actions/userAccountActions'
import * as userAction from '../actions/userActions'

import Axios from 'axios';

var receiverInfo = undefined;




class Content extends Component {
    constructor(props) {
        super(props);
        this.onChangeNumberAccount = this.onChangeNumberAccount.bind(this);
        this.onChangeMoveMoney = this.onChangeMoveMoney.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDecription = this.onChangeDecription.bind(this);
        this.goNext = this.goNext.bind(this);
        this.findNameAccount = this.findNameAccount.bind(this);
        this.state = {
            NumberAccount: undefined,
            BalanceReceiver: undefined,
            Name: undefined,
            Money: undefined,
            Decription: undefined
        }
    }

    findNameAccount = () =>{
        var req = "http://localhost:4000/user/loadUserInfoByNumberAccount/?numberAccount=" + parseInt(this.state.NumberAccount);
        Axios.get(req)
        .then(data =>{
            return data.data
        })
        .then(data =>{
            var info = data[0];
            this.setState({
                Name: info.HoTen,
                BalanceReceiver: info.Balance
            })
        })
    }

    onChangeNumberAccount(evt) {
        this.setState({
            NumberAccount: evt.target.value
        })
    }
    onChangeMoveMoney(evt) {
        this.setState({
            Money: evt.target.value
        })
    }
    onChangeName(evt) {
        this.setState({
            Name: evt.target.value
        })
    }
    onChangeDecription(evt) {
        this.setState({
            Decription: evt.target.value
        })
    }

    goNext() {
        this.props.sendDataContent(this.state);
        console.log(this.state);
        this.props.sendHideContent(1);
    }

    render() {
        return (
            <Modal
                show={true}
                onHide={this.props.hindModal}
            >
                <Modal.Header>
                    <Modal.Title>{this.state.HeaderContent}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <div className="form-move-money">
                            <input onBlur = {this.findNameAccount} onChange={this.onChangeNumberAccount} type="text" className="form-control input-kyc" id="account-number" name="account-number" maxLength="25" placeholder="Số tài khoản" required="" value={receiverInfo === undefined ? null : receiverInfo.Account} fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                        </div>
                        <div className="form-move-money">
                            <input onChange={e => this.onChangeName(e)} type="text" className="form-control input-kyc" id="account-number-name" name="account-number-name" maxLength="25" placeholder="Tên chủ tài khoản" value={receiverInfo === undefined ? this.state.Name : receiverInfo.Name} required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true" readonly></input>
                        </div>

                        <div className="form-move-money">
                            <input onChange={e => this.onChangeMoveMoney(e)} type="text" className="form-control input-kyc" id="money" name="money" maxLength="25" placeholder="Nhập số tiền (VND)" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                        </div>
                        <div className="form-move-money">
                            <input onChange={e => this.onChangeDecription(e)} type="text" className="form-control input-kyc" id="decription" name="decription" maxLength="25" placeholder="Mô tả" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.hindModal}>Đóng</Button>
                    <Button bsStyle="primary" onClick={this.goNext}>Tiếp tục</Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

class OTP extends Component {
    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this.state = {
            contentData: undefined,
            accountData: undefined
        }
    }

    goNext(){
        this.props.doTransaction();
    }

    render() {
        return(
        <Modal
            show={true}
            onHide={this.props.hindModal}
        >
            <Modal.Header>
                <Modal.Title>Xác nhận mã OTP</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <div className="form-move-money">
                        <input type="text" className="form-control input-kyc" id="OTP" name="OTP" maxLength="25" placeholder="Nhập số OTP" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button>Đóng</Button>
                <Button bsStyle="primary" onClick = {this.goNext}>Tiếp tục</Button>
            </Modal.Footer>
        </Modal>
        )
    }
}



var balance1 = 0;
class Account extends Component {

    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this._onSelect = this._onSelect.bind(this);
        this.customBalance = this.customBalance.bind(this);
        this.showAccount = this.showAccount.bind(this);
        this.state = {
            selectedAccount: null,
            balance: undefined,
            balanceShow: undefined
        }
    }

    customBalance = (number) => {

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

    _onSelect = (value) => {
        var balance = this.customBalance(value.value);
        this.setState({
            selectedAccount: value.label
        })
        this.setState({
            balance: value.value
        })
        this.showAccount(balance);
    }

    showAccount(balance) {
        this.setState({
            balanceShow: balance
        })
    }

    goNext() {
        this.props.sendDataAccount(this.state);
        this.props.sendHideAccount(1);
    }

    render() {
        var i = 0;
        const { account } = this.props;
        var options = [];
        account.forEach(element => {
            if (element.NumberAccount !== undefined) {
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
                    <Modal.Title>{this.state.HeaderContent}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <div className="form-move-money">
                            <Dropdown options={options} onChange={this._onSelect} placeholder="Lựa chọn tài khoản" />
                            <br></br>
                            <input type="text" className="form-control input-kyc" id="balance" name="balance" maxLength="25" placeholder="Số dư khả dụng" value={i === -1 ? null : this.state.balance} required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true" readonly></input>

                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button>Đóng</Button>
                    <Button bsStyle="primary" onClick = {this.goNext} >Tiếp tục</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

class MoveMoneyModel extends React.Component {
    constructor(props) {
        super(props);
        this.hindModalAccount = this.hindModalAccount.bind(this);
        this.hindModalContent = this.hindModalContent.bind(this);
        
        this.showModal = this.showModal.bind(this);
        this.ContentData = this.ContentData.bind(this);
        this.AccountData = this.AccountData.bind(this);
        this.Test = this.Test.bind(this);
        this.state = {
            isOTP: false,
            isContent: false,
            isAccount: true,
            FooterContent: 'Tiếp Theo',
            HeaderContent: 'Vui lòng chọn tài khoản thanh toán',
            contentData: undefined,
            accountData: undefined
        }
    }

    ContentData(data) {
        this.setState({
            contentData: data
        })
    }

    AccountData(data) {
        this.setState({
            accountData: data
        })
    }



    Test() {
        var info = {
            ID: undefined,
            AccountNumberFrom: parseInt(this.state.accountData.selectedAccount),
            AccountNumberTo: parseInt(this.state.contentData.NumberAccount),
            Type: 'CHUYEN_TIEN',
            Time: '14:20 Thứ 6, Ngày 19 tháng 12',
            MoneyTransaction: parseInt(this.state.contentData.Money),
            MoneyBalance: parseInt(this.state.accountData.balance),
            MoneyBalanceReceiver: parseInt(this.state.contentData.BalanceReceiver),

        }
        this.props.Transaction(info);
        //cập nhật tiền trong balance
        var money = {
            AccountNumberFrom: parseInt(this.state.accountData.selectedAccount),
            AccountNumberTo: parseInt(this.state.contentData.NumberAccount),
            MoneyTransaction: parseInt(this.state.contentData.Money),
        }
        this.props.UpdateBalance(money);
    }
    showModal = () => {
        this.setState({
            isModelShow: true
        })
        console.log(this.state.isModelShow);
    }

    hindModalAccount = (data) => {
        this.setState({
            isAccount: false,
            isContent: true
        })
    }

    hindModalContent = (data) => {
        this.setState({
            isAccount: false,
            isContent: false,
            isOTP: true
        })
    }



    render() {
        receiverInfo = this.props.receiverInfo;
        const { state } = this.props;
        return (
            <div className="static-modal">
                {this.state.isAccount && <Account account = {state} sendDataAccount = {this.AccountData} sendHideAccount = {this.hindModalAccount} ></Account>}
                {this.state.isContent && <Content  sendDataContent = {this.ContentData} sendHideContent = {this.hindModalContent}></Content>}
                {this.state.isOTP && <OTP doTransaction = {this.Test}></OTP>}
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
        Transaction: bindActionCreators(userAccountActions.DO_TRANSACTIONS, dispatch),
        UpdateBalance: bindActionCreators(userAction.UPDATE_LIST_ACCOUNT,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveMoneyModel);
connect(mapStateToProps, mapDispatchToProps)(Account);