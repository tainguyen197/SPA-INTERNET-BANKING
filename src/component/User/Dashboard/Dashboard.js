import React from 'react';
import '../../../style/dashboard.css'

import ListAccount from './ListAccount';
import ListReceiver from './ListReceiver';
import Transaction from './Transactions';
import Menu from '../Menu/Menu';
import { Route, HashRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators } from 'redux'
import * as userActions from '../../../actions/userActions'
import * as BalancesAction from '../../../actions/availableBalances'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.state = {
            isMoveMoneyModal: true,
            nameAccount: undefined
        }
    }

    test(){
        console.log('a');
        //this.props.actions1();
        console.log('avaiableBalaces',this.props.state);
    }

    componentDidMount(){
       console.log(this.props.state);
       this.setState({
           nameAccount: this.props.state.userReducer[0].HoTen
       })
    }

    render() {
        const {state, actions} = this.props;
        var userState = state.userReducer;
        var userListAccount = state.UserListAccountReducer;
        console.log(userState[0].HoTen);
        
        return (
            <HashRouter>
                <div >
                    <div className="dashboard-header">
                        <img className="icon-avatar"></img>
                        <div onClick = {this.test} className="usernam-lable">Xin chào, {userState[0].HoTen}</div>
                        
                    </div >
                   <div className = "menu-content">
                    <Menu></Menu>
                    <div className="col-md-12 menu-line-cross"></div>
                   </div>
                    <div className="dashboard-body">
                        <Route  path="/receiver" component={ListReceiver}></Route>
                        <Route  path="/account" component={ListAccount} ></Route>
                        <Route  path="/transaction" component={Transaction}></Route>
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
var mapDispatchToProps = (dispatch)  => {
    return {
        actions: bindActionCreators(userActions.UPDATE_USER_INFO, dispatch),
        actions1:  bindActionCreators(BalancesAction.DECREASE_BALANCES, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);