import React, {Component} from 'react'
import {Glyphicon } from 'react-bootstrap'
import {NavLink } from 'react-router-dom'

class Menu extends Component{
    render(){
        return(
            <div className = "center-menu">
                <div className = "col-md-3"><NavLink  to = "/account"> <Glyphicon glyph="glyphicon glyphicon-usd" className ="glyph-menu"></Glyphicon>Tài khoản</NavLink></div>
                <div className = "col-md-3"><NavLink  to = "/receiver"><Glyphicon glyph="glyphicon glyphicon-transfer"className ="glyph-menu"></Glyphicon>Chuyển tiền</NavLink></div>
                <div className = "col-md-3"><NavLink  to = "/create-account"><Glyphicon glyph="glyphicon glyphicon-transfer"className ="glyph-menu"></Glyphicon>Tạo tài khoảng</NavLink></div>
                <div className = "col-md-3"><NavLink  to = "/recharge"><Glyphicon glyph="glyphicon glyphicon-transfer"className ="glyph-menu"></Glyphicon>Nạp tiền</NavLink></div>
            </div>
            
        )
    }
}

export default Menu;