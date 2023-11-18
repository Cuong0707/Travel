import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/ChangePass.scss'

function ChangePass() {
    return (
        <div className='container-forgot'>
            <div className="card text-center">
                <div className="card-header h5 text-white bg-primary">Đổi Mật Khẩu</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Nhập Các Thông Tin Của Bạn Để Thay Đổi Mật Khẩu Mới
                    </p>
                    <div className="form-outline">
                        <input type="email" id="typeEmail" placeholder='Email' className="form-control my-3" />
                        <input type="password" id="typePass1" placeholder='Mật Khẩu Cũ' className="form-control my-3" />
                        <input type="password" id="typePass3" placeholder='Mật Khẩu Mới' className="form-control my-3" />
                        <input type="password" id="typePass4" placeholder='Xác Nhận Mật Khẩu Mới' className="form-control my-3" />

                    </div>
                    <button type="submit" className="btn btn-primary w-100">Xác Nhận</button>
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="/login">Đăng Nhập</Link>
                        <Link to="/register">Đăng Ký</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePass;
