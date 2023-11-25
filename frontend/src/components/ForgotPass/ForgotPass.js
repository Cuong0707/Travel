import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/ForgotPass.scss'

function ForgotPass() {
    return (
        <div className='container-forgot w-50'>
            <div className="card text-center">
                <div className="card-header h5 text-white bg-primary">Quên Mật Khẩu</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Nhập địa chỉ email của bạn.
                    </p>
                    <div className="form-outline">
                        <input type="email" id="typeEmail" placeholder='Email' className="form-control my-3" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Gửi</button>
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="/login">Đăng Nhập</Link>
                        <Link to="/register">Đăng Ký</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;
