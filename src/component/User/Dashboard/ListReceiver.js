import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import MoveMoneyModel from '../MoveMoney'




class ListReceiver extends Component {
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
        this.showinfo = this.showinfo.bind(this);
        this.state = {
            isModelShow: false
        }
    }
    showinfo = () => {
        window.alert('a');
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
                <div onClick={this.addNew} className="center-list-receiver">
                    <div className="col-md-1 icon-avatar-receiver "></div>
                    <div className="col-md-10">
                        <div className=" name-account-receiver">Nguyen Van A</div>
                        <div>27462764273423</div>
                    </div>

                </div>
                <div className="center-list-receiver">
                    <div className="col-md-1 icon-avatar-receiver "></div>
                    <div className="col-md-10">
                        <div className=" name-account-receiver">Nguyen Van A</div>
                        <div>27462764273423</div>
                    </div>

                </div>
                <div className="center-list-receiver">
                    <div className="col-md-1 icon-avatar-receiver "></div>
                    <div className="col-md-10">
                        <div className=" name-account-receiver">Nguyen Van A</div>
                        <div>27462764273423</div>
                    </div>

                </div>
                <div>
                    {this.state.isModelShow && <MoveMoneyModel
                        hindModal = {this.hindModal}
                    >

                    </MoveMoneyModel>}
                </div>
            </div>
        )
    }
}



export default ListReceiver;