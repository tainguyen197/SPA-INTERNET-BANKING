import React, {Component} from 'react'
import {Glyphicon } from 'react-bootstrap'
import {NavLink } from 'react-router-dom'

class Menu extends Component{
    render(){
        return(
            <div className = "center-menu">
                <div className = "col-md-6"><NavLink  to = "/account"> <Glyphicon glyph="glyphicon glyphicon-usd" className ="glyph-menu"></Glyphicon>Tài khoản</NavLink></div>
                <div className = "col-md-6"><NavLink  to = "/receiver"><Glyphicon glyph="glyphicon glyphicon-transfer"className ="glyph-menu"></Glyphicon>Chuyển tiền</NavLink></div>
            </div>
            
        )
    }
}

export default Menu;