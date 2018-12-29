import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import MoveMoneyModel from '../MoveMoney'
import { connect } from 'react-redux'


class ListReceiver extends Component {
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
        this.showinfo = this.showinfo.bind(this);
        this.state = {
            isModelShow: false,
            receiverInfo: undefined
        }
    }
    showinfo = (e, receiver) => {
        this.setState({
            receiverInfo: receiver
        })

        this.addNew();
    }

    hindModal = () => {
        this.setState({
            isModelShow: false
        })
    }

    addNew = () => {
        this.setState({
            isModelShow: true
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
                    if (receiver.ID !== undefined) {
                        return (
                            <div onClick={e => this.showinfo(e,receiver)} className="center-list-receiver">
                                <div className="col-md-1 icon-avatar-receiver "></div>
                                <div className="col-md-10">
                                    <div className=" name-account-receiver">{receiver.Name}</div>
                                    <div>{receiver.Account}</div>
                                </div>

                            </div>
                        )
                    }
                })}


                <div>
                    {this.state.isModelShow && < MoveMoneyModel 
                        hindModal={this.hindModal}
                        receiverInfo = {this.state.receiverInfo}
                    >
                    </MoveMoneyModel>}
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

export default connect(mapStateToProps, null)(ListReceiver);