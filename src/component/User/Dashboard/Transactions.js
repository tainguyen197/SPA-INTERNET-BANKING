import React, {Component} from 'react'

class Transaction extends Component{
    render(){
        return(
                <div>
                    <div className="center-list-transaction-label">
                        <div className="col-md-6">Danh sách giao dịch</div>                       
                        <div className="col-md-12 home-line-cross"></div>
                        <br></br>
                    </div>
    
                    <br></br>
                    <br></br>
                    <div onClick={this.addNew} className="center-list-receiver">
                        <div className="col-md-1 icon-avatar-receiver "></div>
                        <div className="col-md-8">
                            <div className="name-account-transaction">Chuyển tiền</div>
                            <div>14:20 Thứ 6, Ngày 14 tháng 12</div>
                        </div>
                        <div className="col-md-2 account-transaction-right-content">
                            <div className = "name-account-transaction-number">- 7.000</div>
                            <div  className = "account-transaction-wallet">3.567.323</div>
                        </div>
    
                    </div>
                    <div onClick={this.addNew} className="center-list-receiver">
                        <div className="col-md-1 icon-avatar-receiver "></div>
                        <div className="col-md-8">
                            <div className="name-account-transaction">Chuyển tiền</div>
                            <div>14:20 Thứ 6, Ngày 14 tháng 12</div>
                        </div>
                        <div className="col-md-2 account-transaction-right-content">
                            <div className = "name-account-transaction-number">- 7.000</div>
                            <div  className = "account-transaction-wallet">3.567.323</div>
                        </div>
    
                    </div>
                    <div onClick={this.addNew} className="center-list-receiver">
                        <div className="col-md-1 icon-avatar-receiver "></div>
                        <div className="col-md-8">
                            <div className="name-account-transaction">Chuyển tiền</div>
                            <div>14:20 Thứ 6, Ngày 14 tháng 12</div>
                        </div>
                        <div className="col-md-2 account-transaction-right-content">
                            <div className = "name-account-transaction-number">- 7.000</div>
                            <div  className = "account-transaction-wallet">3.567.323</div>
                        </div>
    
                    </div>
                    <div onClick={this.addNew} className="center-list-receiver">
                        <div className="col-md-1 icon-avatar-receiver "></div>
                        <div className="col-md-8">
                            <div className="name-account-transaction">Chuyển tiền</div>
                            <div>14:20 Thứ 6, Ngày 14 tháng 12</div>
                        </div>
                        <div className="col-md-2 account-transaction-right-content">
                            <div className = "name-account-transaction-number">- 7.000</div>
                            <div  className = "account-transaction-wallet">3.567.323</div>
                        </div>
    
                    </div>
                    <div onClick={this.addNew} className="center-list-receiver">
                        <div className="col-md-1 icon-avatar-receiver "></div>
                        <div className="col-md-8">
                            <div className="name-account-transaction">Chuyển tiền</div>
                            <div>14:20 Thứ 6, Ngày 14 tháng 12</div>
                        </div>
                        <div className="col-md-2 account-transaction-right-content">
                            <div className = "name-account-transaction-number">- 7.000</div>
                            <div  className = "account-transaction-wallet">3.567.323</div>
                        </div>
    
                    </div>
                    <div onClick={this.addNew} className="center-list-receiver">
                        <div className="col-md-1 icon-avatar-receiver "></div>
                        <div className="col-md-8">
                            <div className="name-account-transaction">Chuyển tiền</div>
                            <div>14:20 Thứ 6, Ngày 14 tháng 12</div>
                        </div>
                        <div className="col-md-2 account-transaction-right-content">
                            <div className = "name-account-transaction-number">- 7.000</div>
                            <div  className = "account-transaction-wallet">3.567.323</div>
                        </div>
    
                    </div>

                </div>
            )
    }
}
export default Transaction;