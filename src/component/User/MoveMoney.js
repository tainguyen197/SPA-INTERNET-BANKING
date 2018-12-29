import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'react-dropdown/style.css'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
var receiverInfo = undefined;

class Content extends Component {
    render() {
        return (
            <div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="account-number" name="account-number" maxLength="25" placeholder="Số tài khoản" required="" value={receiverInfo === undefined ? null : receiverInfo.Account} fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="account-number-name" name="account-number-name" maxLength="25" placeholder="Tên chủ tài khoản" value={receiverInfo === undefined ? null : receiverInfo.Name} required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>

                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="money" name="money" maxLength="25" placeholder="Nhập số tiền (VND)" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="decription" name="decription" maxLength="25" placeholder="Mô tả" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>
            </div>
        )
    }
}

class OTP extends Component {
    render() {
        return (
            <div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="OTP" name="OTP" maxLength="25" placeholder="Nhập số OTP" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>
            </div>
        )
    }
}

var balance1 = 0;
class Account extends Component {

    constructor(props) {
        super(props);
        this._onSelect = this._onSelect.bind(this);
        this.customBalance = this.customBalance.bind(this);
        this.showAccount = this.showAccount.bind(this);
        this.state = {
            selectedAccount: null,
            balance: undefined
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
        this.showAccount(balance);
    }

    showAccount(balance){
        this.setState({
            balance: balance
        })
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
            <div>
                <div className="form-move-money">
                    <Dropdown options={options} onChange={this._onSelect} placeholder="Lựa chọn tài khoản" />
                    <br></br>
                    <input type="text" className="form-control input-kyc" id="balance" name="balance" maxLength="25" placeholder="Số dư khả dụng" value={i === -1 ? null : this.state.balance} required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true" readonly></input>

                </div>
            </div>
        )
    }
}

class MoveMoneyModel extends React.Component {
    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this.hindModal = this.hindModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.Test = this.Test.bind(this);
        this.state = {
            isOTP: false,
            isContent: false,
            isAccount: true,
            FooterContent: 'Tiếp Theo',
            HeaderContent: 'Vui lòng chọn tài khoản thanh toán'
        }
    }

    Test() {
        console.log(this.props.receiverInfo);
    }
    showModal = () => {
        this.setState({
            isModelShow: true
        })
        console.log(this.state.isModelShow);
    }

    hindModal = () => {
    }

    goNext = () => {
        if (this.state.isAccount) {
            this.setState({
                isOTP: false,
                isContent: true,
                isAccount:false,
                HeaderContent: 'Vui lòng nhập thông tin thanh toán'
            })
        }
        else if (this.state.isContent) {
            this.setState({
                isOTP: true,
                isContent: false,
                isAccount:false,
                FooterContent: 'Chuyển tiền',
                HeaderContent: 'Vui lòng nhập mã OTP'
            })
        }
        else if (this.state.isOTP) {
            this.setState({
                isOTP: false,
                isContent: false,
                isAccount:false,
               
            })
        }
    }

        render() {
            receiverInfo = this.props.receiverInfo;
            const { state } = this.props;
            console.log(state);
            return (
                <div className="static-modal">
                    <Modal
                        show={true}
                        onHide={this.props.hindModal}
                    >
                        <Modal.Header>
                            <Modal.Title>{this.state.HeaderContent}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                           {this.state.isAccount && <Account account={state}></Account>}
                            {this.state.isContent && <Content />}
                            {this.state.isOTP && <OTP/>}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.props.hindModal}>Đóng</Button>
                            <Button bsStyle="primary" onClick={this.goNext}>{this.state.FooterContent}</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        }
    }
var mapStateToProps = (state) => {
    return {
        state: state.UserListAccountReducer
    };
}

export default connect(mapStateToProps, null)(MoveMoneyModel);