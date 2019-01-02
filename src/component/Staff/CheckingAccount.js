import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const divstyle = {
    'background-color': 'rgba(255, 255, 255, 0)',
};

const leftStyle = {
    'margin': '0px 0px 0px 0px'
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.username);
        axios.post('/create', { values: this.state.name, ages: this.state.age })
            .then(function (response) {
                console.log(response);
            })
        this.setState({
            username: '',
        })
    }

    render() {
        return (
            <div style={divstyle} className="sidenav" className="center-menu">
                <form className="col-md-12" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-row col-md-12" >
                        <div className="form-group">
                            <label htmlFor="inputEmail4">Tên tài khoảng</label>
                            <input type="text" className="form-control" id="inputEmail4" name = "username" value={this.state.username} onChange={this.handleChange} placeholder="Tên tài khoảng" />
                        </div>
                    </div>
                    <button  className="col-xs-8" type="submit" className="btn btn-primary">Khởi tạo</button>
                </form>
            </div>

        )
    }
}

export default Menu;