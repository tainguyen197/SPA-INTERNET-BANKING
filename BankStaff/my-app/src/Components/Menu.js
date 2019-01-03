import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div className="center-menu">
                {/*<div className="col-md-6"><NavLink to="/create-account"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Tạo tài khoảng</NavLink></div>
                <div className="col-md-6"><NavLink to="/recharge"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Nạp tiền</NavLink></div>
        </div>*/}
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Ngân hàng</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Trang chủ</a></li>
                            <li><NavLink to="/create-account"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Tạo tài khoảng</NavLink></li>
                            <li><NavLink to="/recharge"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Nạp tiền</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;