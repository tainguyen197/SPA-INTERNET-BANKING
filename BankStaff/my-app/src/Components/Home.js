import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Menu from './Menu';

class Home extends Component {
    constructor(props) {
        super(props);
        this.selectAccount = this.selectAccount.bind(this);
        this.state = {
            isMoveMoneyModal: true,
            nameAccount: undefined,
            accountNumber: undefined
        }
    }

    selectAccount(account) {
        this.setState({
            accountNumber: account.NumberAccount
        })
    }

    componentDidMount() {
        console.log(this.props.state);
        this.setState({
            nameAccount: this.props.state.userReducer[0].HoTen
        })
    }


    render() {
        const { state, actions } = this.props;
        var userState = state.userReducer;
        var userListAccount = state.UserListAccountReducer;
        console.log(userState[0].HoTen);
        
        return (
            <div className="center-menu">
                <div className="dashboard-header">
                    <img className="icon-avatar"></img>
                    <div onClick={this.test} className="usernam-lable">Xin chào, {userState[0].HoTen}</div>

                </div >
                <div className="menu-content">
                    <Menu></Menu>
                    <div className="col-md-12 menu-line-cross"></div>
                </div>
            </div>

        )
    }
}

var mapStateToProps = (state) => {
    return {
        state: state
    };
}
var mapDispatchToProps = (dispatch) => {
    return {
        //actions: bindActionCreators(userActions.UPDATE_USER_INFO, dispatch),
        //actions1: bindActionCreators(BalancesAction.DECREASE_BALANCES, dispatch)
    };
}

export default Home;