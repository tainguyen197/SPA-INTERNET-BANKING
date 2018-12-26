import React from 'react';
import '../../../style/dashboard.css'

import ListAccount from './ListAccount';
import ListReceiver from './ListReceiver';
import Transaction from './Transactions';
import Menu from '../Menu/Menu';
import { Route, HashRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators } from 'redux'
import * as ChangeBalancesAction from '../../../actions/availableBalances'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.state = {
            isMoveMoneyModal: true
        }
    }

    test(){
        //console.log(actions);
    }

    componentDidMount(){
       
    }

    render() {
        const {avaiableBalaces, actions} = this.props;
        return (
            <HashRouter>
                <div >
                    <div className="dashboard-header">
                        <img className="icon-avatar"></img>
                        <div className="usernam-lable">Xin chào, Nguyễn Trung Tài</div>
                        
                    </div >
                   <div className = "menu-content">
                    <Menu></Menu>
                    <div className="col-md-12 menu-line-cross"></div>
                   </div>
                    <div className="dashboard-body">
                        <Route  path="/receiver" component={ListReceiver}></Route>
                        <Route  path="/account" render={props => <ListAccount actions = {actions} avaiableBalaces = {avaiableBalaces}  />}></Route>
                        <Route  path="/transaction" component={Transaction}></Route>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        avaiableBalaces: state.avaiableBalacesReducer
    };
}

var mapDispatchToProps = (dispatch)  => {
    return {
        actions: bindActionCreators(ChangeBalancesAction, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);