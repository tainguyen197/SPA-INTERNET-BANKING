import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Menu from './Menu';

class Home extends Component {
    render() {
        return (
            <div className="center-menu">
                {/*<div className="dashboard-header">
                    <img className="icon-avatar"></img>
                    <div onClick={this.test} className="usernam-lable">Xin chào, {userState[0].HoTen}</div>

        </div >*/}
                <div className="menu-content">
                    <Menu></Menu>
                    <div className="col-md-12 menu-line-cross"></div>
                </div>
            </div>

        )
    }
}

export default Home;