import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class Content extends Component {
    render() {
        return (
            <div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="account-number" name="account-number" maxLength="25" placeholder="Số tài khoản" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="account-number-name" name="account-number-name" maxLength="25" placeholder="Tên chủ tài khoản" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>

                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="money" name="money" maxLength="25" placeholder="Nhập số tiền (VND)" required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                </div>
                <div className="form-move-money">
                    <input type="text" className="form-control input-kyc" id="decription" name="decription" maxLength="25" placeholder="Mô tả" required="" fix-ie-only="" focus-me="" float-labels=""  convert-vietnamese-character="true"></input>
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

class MoveMoneyModel extends React.Component {
    constructor(props){
        super(props);
        this.goOTP = this.goOTP.bind(this);
        this.hindModal = this.hindModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
            isOTP: false,
            isContent: true,
            
        }
    }

    showModal = () =>{
        this.setState({
            isModelShow: true
        })
        console.log(this.state.isModelShow);
    }

    hindModal = () =>{
    }

    goOTP = () =>{
        this.setState({
            isOTP: !this.state.isOTP,
            isContent: !this.state.isContent
        })
    }

    render() {
        return (
            <div className="static-modal">
                <Modal
                    show ={true}
                    onHide = {this.props.hindModal}
                    >
                    <Modal.Header>
                        <Modal.Title>Vui lòng nhập thông tin người nhận</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.state.isContent && <Content />}
                        {this.state.isOTP && <OTP/>}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick = {this.props.hindModal}>Đóng</Button>
                        <Button bsStyle="primary" onClick = {this.goOTP}>Chuyển tiền</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default MoveMoneyModel;