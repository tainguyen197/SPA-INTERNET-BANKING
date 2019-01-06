import React, { Component } from 'react'
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
            password: '',
            name: '',
            email: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("aaaaaaaa");
            var req = "http://localhost:4000/user-account/create-user-account/?username=" + this.state.username + "&password=" + this.state.password
                + "&name=" + this.state.name + "&email=" + this.state.email + "&phone=" + this.state.phone;
            axios.post(req).then(result => {
                console.log(result);
                return result.data;
                
            }).then(data => {
                console.log(data);
                if (data.length === 0) {
                    window.alert('Tạo tài khoản khách hàng thất bại. Vui lòng thử lại.');
                }
                else{
                    this.setState({
                        username: '',
                        password: '',
                        name: '',
                        email: '',
                        phone: ''
                    })
                    window.alert('Tạo tài khách hàng khoản thành công.');
                }
            });
    }

    render() {
        return (
            <div style={divstyle} className="sidenav" className="center-menu">
                <form className = "form-row col-md-12" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-row" >
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Tên tài khoảng</label>
                            <input type="text" className="form-control" id="inputEmail4" name = "username" value={this.state.username} onChange={this.handleChange} placeholder="Tên tài khoảng" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Mật khẩu</label>
                            <input type="password" className="form-control" id="inputPassword4" name = "password" value={this.state.password} onChange={this.handleChange} placeholder="Mật khẩu" />
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <div className="form-group">
                            <label htmlFor="inputAddress">Họ và tên khách hàng</label>
                            <input type="text" className="form-control" id="inputAddress" name = "name" value={this.state.name} onChange={this.handleChange} placeholder="Họ và tên khách hàng" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Địa chỉ email khách hàng</label>
                            <input type="email" className="form-control" id="inputAddress2" name = "email" value={this.state.email} onChange={this.handleChange} placeholder="Địa chỉ email khách hàng" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Số điện thoại khách hàng</label>
                            <input type="phone" className="form-control" id="inputAddress2" name = "phone" value={this.state.phone} onChange={this.handleChange} placeholder="Số điện thoại khách hàng" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Đăng ký</button>
                </form>
            </div>

        )
    }
}

export default Menu;