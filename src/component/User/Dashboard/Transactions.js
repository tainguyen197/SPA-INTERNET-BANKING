import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
    constructor(props){
        super(props);
        this.customBalance = this.customBalance.bind(this);
    }

    customBalance = (number) => {
        console.log(numberAccount);

        var numberAccount = number.toString();
        console.log(numberAccount);

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
    render() {
        var { state } = this.props;
        var {accountNumber} = this.props;
        console.log(state);
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
                    var  MoneyTransaction = this.customBalance(parseInt(transaction.MoneyTransaction));
                    var MoneyBalance  = this.customBalance(parseInt(transaction.MoneyBalance));
                    
                    if (transaction.Type !== undefined && (accountNumber === transaction.AccountNumberFrom || accountNumber === transaction.AccountNumberTo))
                        return (
                            <div onClick={this.addNew} className="center-list-receiver">
                                <div className="col-md-1 icon-avatar-receiver "></div>
                                <div className="col-md-7">
                                    <div className="name-account-transaction">{transaction.AccountNumberFrom===accountNumber?'Chuyển tiền':'Nhận tiền'}</div>
                                    <div>{transaction.Time}</div>
                                </div>
                                <div className="col-md-3 account-transaction-right-content">
                                    <div className="name-account-transaction-number">{transaction.AccountNumberFrom===accountNumber?'-':'+'}{MoneyTransaction}</div>
                                    <div className="account-transaction-wallet">{MoneyBalance}</div>
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