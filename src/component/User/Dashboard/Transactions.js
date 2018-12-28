import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
    render() {
        var { state } = this.props;
        var {accountNumber} = this.props;
        return (
            <div>
                <div className="center-list-transaction-label">
                    <div className="col-md-6">Danh sách giao dịch</div>
                    <div className="col-md-12 home-line-cross"></div>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                {state.map(transaction => {
                    if (transaction.Type !== undefined && transaction.AccountNumber === accountNumber)
                        return (
                            <div onClick={this.addNew} className="center-list-receiver">
                                <div className="col-md-1 icon-avatar-receiver "></div>
                                <div className="col-md-8">
                                    <div className="name-account-transaction">Chuyển tiền</div>
                                    <div>{transaction.Time}</div>
                                </div>
                                <div className="col-md-2 account-transaction-right-content">
                                    <div className="name-account-transaction-number">- {transaction.MoneyTransaction}</div>
                                    <div className="account-transaction-wallet">{transaction.MoneyBalance}</div>
                                </div>
                            </div>
                        )
                })}
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        state: state.userAccountTracsactionReducer
    };
}


export default connect(mapStateToProps, null)(Transaction);