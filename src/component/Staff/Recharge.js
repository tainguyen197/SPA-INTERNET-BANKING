import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const divstyle = {
    'background-color': 'rgba(255, 255, 255, 0)',
    'position': 'relative',
    'top': '60px'
};

const leftStyle = {
    'margin': '0px 0px 0px 0px'
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            money: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.id+ ' '+  this.state.money);
        axios.post('/create', { values: this.state.name, ages: this.state.age })
            .then(function (response) {
                console.log(response);
            })
        this.setState({
            id: '',
            money: '',
        })
    }

    render() {
        return (
            <div style={divstyle} className="sidenav" className="center-menu">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-row" >
                        <div className="form-group col-md-12">
                            <label htmlFor="inputEmail4">Tên tài khoảng</label>
                            <input type="text" className="form-control" id="inputEmail4" name = "id" value={this.state.id} onChange={this.handleChange} placeholder="Tên tài khoảng" />
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <div className="form-group">
                            <label htmlFor="inputAddress">Số tiền</label>
                            <input type="text" className="form-control" id="inputAddress" name = "money" value={this.state.money} onChange={this.handleChange} placeholder="Số tiền" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Nạp tiền</button>
                </form>
            </div>

        )
    }
}

export default Menu;