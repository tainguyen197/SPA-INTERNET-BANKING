import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../style/dashboard.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            redirectTo: null,
        }
    }
    logout = () => {
        //this.props.history.push('/login');
        this.setState({
            redirectTo: '/login',
        })
    }
    render() {
        return (
            <div>
                {/*<div className="center-menu"></div>
                <div className="col-md-6"><NavLink to="/create-account"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Tạo tài khoảng</NavLink></div>
                    <div className="col-md-6"><NavLink to="/recharge"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Nạp tiền</NavLink></div>
                </div>*/}
                {/*<div className="righthdr">
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
            </div>*/}
                <ul id="navigation">
                    <li><NavLink to="/" className="link1"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Home</NavLink></li>
                    <li><NavLink to="/create-account" className="link2"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Tạo tài khoảng</NavLink></li>
                    <li><NavLink to="/recharge" className="link3"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Nạp tiền</NavLink></li>
                    <li><NavLink onClick={this.logout} to="/logout" className="link4"><Glyphicon glyph="glyphicon glyphicon-transfer" className="glyph-menu"></Glyphicon>Đăng xuất</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Menu;