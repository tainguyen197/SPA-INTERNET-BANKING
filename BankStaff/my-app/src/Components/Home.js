import React from 'react';
import '../style/dashboard.css'

import Menu from './Menu';
import { Route, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import createAccount from './CreateAccount';
import recharge from './Recharge';
import axios from 'axios'
//import * as userActions from '../../../actions/userActions'
//import * as BalancesAction from '../../../actions/availableBalances'

const divposition = {
    'background-color': 'rgba(255, 255, 255, 0)',
    'position': 'relative',
    'top': '20px'
} 

const divposition1 = {
    'background-color': 'rgba(255, 255, 255, 0)',
    'position': 'relative',
    'top': '-200px'
} 

const divposition2 = {
    'position': 'relative',
    'top': '30px',
    'left': '250px'
} 


class Dashboard extends React.Component {
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

    componentWillMount(){
        console.log("aaaaaaa");
        console.log(document.cookie);
        var instance = axios.create({
            baseURL: 'http://localhost:4000/login/token/',
            headers: {
            'Authorization': document.cookie
            },
            timeout: 15000
            });
        //var req = "http://localhost:4000/login/staff-login/?username=" + this.state.username + "&password=" + this.state.password;
        
        instance.get()
            .then(result => {
                console.log("111111111111");
                console.log(result);
                return result.data;
            }).then(data => {
                console.log("22222222222222222");
                if (data.length === 0) {
                }
                else {
                    this.props.history.push('/home#/');
                    this.setState({
                        redirectTo: '/home#/',
                    })
                    return
                    //
                }
            }
            )
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
            <HashRouter>
                <div >
                    <div className="dashboard-header">
                        <img className="icon-avatar"></img>
                        <div onClick={this.test} className="usernam-lable">Xin chào, {userState[0].HoTen}</div>

                    </div >
                    <div style={divposition2}>
                        <Menu></Menu>
                    </div>
                    <div style={divposition1} className="dashboard-body">
                        <Route path="/create-account" component={createAccount}></Route>
                        <Route path="/recharge" component={recharge}></Route>
                    </div>
                    
                </div>
            </HashRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);