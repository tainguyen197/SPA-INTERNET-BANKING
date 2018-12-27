import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../../style/login.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserAction from '../../actions/userActions'
import * as BalancesAction from '../../actions/availableBalances'
import * as userListAccount from '../../actions/userListAccountActions'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submidLogin = this.submidLogin.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    submidLogin = () => {
        var req = "http://localhost:4000/login/?username=" + this.state.username + "&password=" + this.state.password;
        axios.get(req)
            .then(result => {
                return result.data;
            }).then(data => {
                if (data.length === 0) {
                    window.alert('Sai tên đăng nhập hoặc tài khoản');
                }
                else {
                    //lấy thông tin user lưu vào store
                    var userID = data[0].IDUser;
                    var req = "http://localhost:4000/user/loadUserInfoById/?id=" + userID;
                    axios.get(req)
                        .then(result => {
                            return result.data;
                        }).then(data => {
                            var userInfo = data[0];
                            this.props.updateUserAction(userInfo);
                        })
                        
                    //lấy thông tin userListAccount lưu vào store
                    var req = "http://localhost:4000/user/loadUserAccountsById?id=" + userID;
                    axios.get(req)
                    .then(result => {
                        return result.data;
                    }).then(data => {
                        var userListAccount = data;

                        userListAccount.forEach(element => {
                            this.props.userListAccountAction(element);

                        }); 
                        console.log(this.props.state);
                    })

                    //return  this.props.history.push('/home#/account');
                }
            }
            )
    }

    updatePassword = (evt) => {
        this.setState({
            password: evt.target.value
        })
    }

    updateUsername = (evt) => {
        this.setState({
            username: evt.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid login-content">
                <div className="center-login">
                    <div className="left-login hidden-xs">
                        <label className="login-title">Hãy tham gia</label>
                        <p className="join-us-desc">Ngân hàng số thế hệ mới đã có mặt! Tiên phong trải nghiệm ngay hôm nay!</p>
                        <button className="buttonTransparent">Tham gia ngay</button>
                    </div>
                    <div className="right-login">
                        <div className="login_form">
                            <div className="content-input">
                                <div className="form-group">
                                    <div>
                                        <input onChange={this.updateUsername} type="text" className="form-control input-kyc" id="usernameTxt" name="username" maxlength="25" placeholder="Tên đăng nhập" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" restrict-special-character="a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ" convert-vietnamese-character="true"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <input onChange={this.updatePassword} type="text" className="form-control input-kyc" id="passwordTxt" name="password" maxlength="25" placeholder="Mật khẩu" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" restrict-special-character="a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ" convert-vietnamese-character="true"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <ReCAPTCHA
                                        sitekey="6LcTM4EUAAAAAA1fBzaH1PA55UTDLkRDKVV-PshC"
                                    />,
                                </div>
                                <div className="form-group">
                                    <button onClick={this.submidLogin} className="btn btn-default-green btn-kyc buttonPurple ">
                                        <span>Đăng nhập</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

var mapStateToProps = (state) => {
    return {
        state: state
    };
}
var mapDispatchToProps = (dispatch) => {
    return {
        updateUserAction: bindActionCreators(UserAction.UPDATE_USER_INFO, dispatch),
        userListAccountAction: bindActionCreators(userListAccount.USER_LIST_ACCOUNT, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
