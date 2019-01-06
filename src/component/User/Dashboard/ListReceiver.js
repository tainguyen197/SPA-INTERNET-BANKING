import React, { Component } from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import MoveMoneyModel from '../MoveMoney'
import { connect } from 'react-redux'
import * as userAccountActions from '../../../actions/userAccountActions'
import { bindActionCreators } from 'redux'
class EditName extends Component {
    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this.editName = this.editName.bind(this);
        this.state = {
            Name: undefined
        }
    }

    editName(evt) {
        this.setState({
            Name: evt.target.value
        })
    }
    goNext() {
        this.props.Data(this.state.Name);
        this.props.hindModalName();
    }

    render() {
        return (
            <Modal
                show={true}
                onHide={this.props.hindModalName}
            >
                <Modal.Header>
                    <Modal.Title>Nhập tên mới</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <div className="form-move-money">
                            <input onChange={this.editName} type="text" className="form-control input-kyc" id="OTP" name="OTP" maxLength="25" placeholder="Nhập tên mới cho người nhận này ..." required="" fix-ie-only="" focus-me="" float-labels="" convert-vietnamese-character="true"></input>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.hindModalName}>Đóng</Button>
                    <Button bsStyle="primary" onClick={this.goNext}>Tiếp tục</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


class ListReceiver extends Component {
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
        this.showinfo = this.showinfo.bind(this);
        this.editName = this.editName.bind(this);
        this.getData = this.getData.bind(this);
        this.deleteName = this.deleteName.bind(this);
        this.state = {
            receiverInfo: undefined,
            isModeEditShow: false,
            isModelShow: false,
        }
    }
    showinfo = (e, receiver) => {
        this.setState({
            receiverInfo: receiver
        })

        this.addNew();
    }

    deleteName(e, receiver) {
        if (window.confirm("Bạn chắc chắn muốn xóa tài khoản này?")) {
            this.props.DeleteReceiver(receiver);
            window.alert('Đã xóa');
        }
    }
    hindModal = () => {
        this.setState({
            isModelShow: false
        })
    }

    hindModalName = () => {
        this.setState({
            isModeEditShow: false
        })
    }

    addNew = () => {
        this.setState({
            isModelShow: true
        })
    }

    getData(name) {
        var newData =
        {
            ID: this.state.receiverInfo.IDUser,
            Name: name
        };
        this.props.UpdateListReceiver(newData);
    }

    editName = (e, receiver) => {
        console.log(receiver);
        this.setState({
            isModeEditShow: true,
            receiverInfo: receiver
        })
    }

    render() {
        var { state } = this.props;

        return (
            <div>
                <div className="center-list-receiver-label">
                    <div className="col-md-6">Danh sách người nhận</div>
                    <div className="col-md-6">
                        <Button className="center-list-receiver-button" onClick={this.addNew}>Thêm mới</Button>
                    </div>
                    <div className="col-md-12 home-line-cross"></div>
                    <br></br>
                </div>

                <br></br>
                <br></br>
    
                {state.map(receiver => {
                    if (receiver.Account !== undefined) {
                        return (
                            <div>
                                <div className="center-list-receiver">
                                    <div className="col-md-1 icon-avatar-receiver "></div>
                                    <div onClick={e => this.showinfo(e, receiver)} className="col-md-8">
                                        <div className=" name-account-receiver">{receiver.Name}</div>
                                        <div>{receiver.Account}</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div onClick={e => this.editName(e, receiver)} className="name-account-receiver-edit"><Glyphicon glyph="glyphicon glyphicon-pencil" className=""></Glyphicon></div>
                                    </div>
                                    <div className="col-md-1">
                                        <div onClick={e => this.deleteName(e, receiver)} className="name-account-receiver-edit"><Glyphicon glyph="glyphicon glyphicon-remove" className=""></Glyphicon></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}


                <div>
                    {this.state.isModelShow && < MoveMoneyModel
                        hindModal={this.hindModal}
                        receiverInfo={this.state.receiverInfo}
                    >
                    </MoveMoneyModel>}
                </div>
                <div>
                    {this.state.isModeEditShow && < EditName
                        hindModalName={this.hindModalName}
                        receiverInfo={this.state.receiverInfo}
                        Data={this.getData}
                    >
                    </ EditName>}
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        state: state.UserReceiverReducer
    };
}

var mapDispatchToProps = (dispatch) => {
    return {
        UpdateListReceiver: bindActionCreators(userAccountActions.UPDATE_LIST_RECEIVER, dispatch),
        DeleteReceiver: bindActionCreators(userAccountActions.DELETE_USER_ACCOUNT_RECEIVER, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListReceiver);