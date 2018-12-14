import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../style/login.css';


class LoginComponent extends Component {
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
                                        <input type="text" className="form-control input-kyc" id="usernameTxt" name="username" maxlength="25" placeholder="Tên đăng nhập" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" restrict-special-character="a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ" convert-vietnamese-character="true"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <input type="text" className="form-control input-kyc" id="passwordTxt" name="password" maxlength="25" placeholder="Mật khẩu" required="" fix-ie-only="" focus-me="" float-labels="" autocomplete="off" restrict-special-character="a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ" convert-vietnamese-character="true"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <ReCAPTCHA
                                        sitekey="6LcTM4EUAAAAAA1fBzaH1PA55UTDLkRDKVV-PshC"
                                    />,
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-default-green btn-kyc buttonPurple ">
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

export default LoginComponent;
