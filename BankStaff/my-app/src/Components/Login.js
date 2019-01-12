import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../style/login.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserAction from '../actions/userActions'
import * as userListAccount from '../actions/userAccountActions'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submidLogin = this.submidLogin.bind(this);

        this.state = {
            username: '',
            password: '',
            redirectTo: null,
        }
    }

    componentWillMount(){
        var instance = axios.create({
            baseURL: 'http://localhost:4000/login/token/',
            headers: {
            'Authorization': document.cookie
            },
            timeout: 15000
            });
        //var req = "http://localhost:4000/login/staff-login/?username=" + this.state.username + "&password=" + this.state.password;
        
        instance.get()
            .then(result => {
                console.log(result);
                return result.data;
            }).then(data => {
                if (data.length === 0) {
                }
                else {
<<<<<<< HEAD
                    var userID = data[0].IDUser;
                    var req = "http://localhost:4000/user/staff-loadUserInfoById/?id=" + userID;
                    axios.get(req)
                        .then(result => {
                            return result.data;
                        }).then(data => {
                            var userInfo = data[0];
                            this.props.updateUserAction(userInfo);
                            //console.log(this.props.state);
                        })
=======
>>>>>>> d50f84e5c68e4517343e06a4b68da9eacd06392a
                    this.props.history.push('/home#/');
                    this.setState({
                        redirectTo: '/home#/',
                    })
                    return
                    //
                }
            }
            )
    }

    submidLogin = () => {
        var instance = axios.create({
            baseURL: 'http://localhost:4000/login/staff-login/',
            headers: {
            'Authorization': document.cookie
            },
            timeout: 15000
            });
        //var req = "http://localhost:4000/login/staff-login/?username=" + this.state.username + "&password=" + this.state.password;
        
        instance.get("?username=" + this.state.username + "&password=" + this.state.password)
            .then(result => {
                console.log(result);
                return result.data;
            }).then(data => {
                if (data.length === 0) {
                    window.alert('Sai tên đăng nhập hoặc tài khoản');
                }
                else {
                     //lấy thông tin user receiver lưu vào store
                    /*var userID = data[0].IDUser;
                    var req = "http://localhost:4000/user/staff-loadUserReceiverById/?id=" + userID;
                     axios.get(req)
                         .then(result => {
                             return result.data;
                         }).then(data => {
                             var userReceiver = data[0];

                         })*/
                    //lấy thông tin user lưu vào store
                    document.cookie = 'Bearer='+data[1];
                    console.log(document.cookie);
                    var userID = data[0].IDUser;
                    var req = "http://localhost:4000/user/staff-loadUserInfoById/?id=" + userID;
                    axios.get(req)
                        .then(result => {
                            return result.data;
                        }).then(data => {
                            var userInfo = data[0];
                            this.props.updateUserAction(userInfo);
                            //console.log(this.props.state);
                        })

                    //lấy thông tin userListAccount lưu vào store
                    /*var req = "http://localhost:4000/user/staff-loadUserAccountsById?id=" + userID;
                    axios.get(req)
                        .then(result => {
                            return result.data;
                        }).then(data => {
                            var userListAccount = data;

                            userListAccount.forEach(element => {
                                this.props.userListAccountAction(element);
                                console.log('element',element);
                                //lấy thông tin giao dịch của các tài khoản
                                var req = "http://localhost:4000/user/loadUserTransactionsById/?numberAccount=" + element.NumberAccount;
                                axios.get(req)
                                    .then(data => {
                                        return data.data;
                                    }).then(transactions => {
                                        console.log('transacion',transactions);
                                      
                                    })
                            });

                        })*/


                    this.props.history.push('/home#/');

                    this.setState({
                        redirectTo: '/home#/',
                    })
                    return
                    //
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
        
        if (this.state.redirectTo) {
            //return <Redirect to = {{pathname: this.state.redirectTo}}/>
        }
        else {
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
                                            <input onChange={this.updatePassword} type="password" className="form-control input-kyc" id="passwordTxt" name="password" maxlength="25" placeholder="Mật khẩu" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" restrict-special-character="a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ" convert-vietnamese-character="true"></input>
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
}

var mapStateToProps = (state) => {
    return {
        state: state
    };
}
var mapDispatchToProps = (dispatch) => {
    return {
        updateUserAction: bindActionCreators(UserAction.UPDATE_USER_INFO, dispatch),
        userListAccountAction: bindActionCreators(userListAccount.USER_LIST_ACCOUNT, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
