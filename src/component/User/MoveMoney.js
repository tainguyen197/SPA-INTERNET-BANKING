import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class MoveMoney extends React.Component {
    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Vui lòng nhập thông tin người nhận</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                        <div  className = "form-move-money">
                            <input type="text" className="form-control input-kyc" id="account-number" name="account-number" maxlength="25" placeholder="Số tài khoản" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" convert-vietnamese-character="true"></input>
                        </div>
                        <div className = "form-move-money">
                            <input type="text" className="form-control input-kyc" id="account-number-name" name="account-number-name" maxlength="25" placeholder="Tên chủ tài khoản" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" convert-vietnamese-character="true"></input>
                        </div>
                       
                        <div className = "form-move-money">
                            <input type="text" className="form-control input-kyc" id="money" name="money" maxlength="25" placeholder="Nhập số tiền (VND)" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" convert-vietnamese-character="true"></input>
                        </div>
                        <div className = "form-move-money">
                            <input type="text" className="form-control input-kyc" id="decription" name="decription" maxlength="25" placeholder="Mô tả" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" convert-vietnamese-character="true"></input>
                        </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Đóng</Button>
                        <Button bsStyle="primary">Tiếp theo</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

export default MoveMoney;