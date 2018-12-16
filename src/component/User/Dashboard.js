import React, { Component } from 'react';
import '../../style/dashboard.css'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
               
               <div className = "dashboard-header">
                <img className = "icon-avatar"></img>
                <div className = "usernam-lable">Xin chào, Nguyễn Trung Tài</div>
                </div>
                <div className="dashboard-body">
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

                        <div className="col-md-1 wallet-icon timo-spendaccounticon"></div>
                        <div className="col-md-3 wallet-transaction">3.200.333</div>

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
                        <div className="col-md-3 wallet-transaction">3.200.333</div>

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
                        <div className="col-md-3 wallet-transaction">3.200.333</div>

                        <div className="col-md-2 move-money-label">Chuyển tiền</div>
                        <div className="col-md-1 transfer-icon"></div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;