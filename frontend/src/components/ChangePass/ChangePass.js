import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/ChangePass.scss'
// import { EyeFill } from 'react-bootstrap-icons';

function ChangePass() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true); // State để lưu trạng thái xác nhận mật khẩu
    // const [showPassword, setShowPassword] = useState(false);


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordMatch(event.target.value === password); // Kiểm tra xem mật khẩu xác nhận có khớp với mật khẩu mới hay không
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý khi người dùng ấn nút submit
    };
    return (
        <div className='container-forgot'>
            <form onSubmit={handleSubmit}>
                <div className="card text-center">
                    <div className="card-header h5 text-white bg-primary">Đổi Mật Khẩu</div>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Nhập Các Thông Tin Của Bạn Để Thay Đổi Mật Khẩu Mới
                        </p>
                        <div className="form-outline">
                            <input type="email" id="typeEmail" placeholder='Email' className="form-control my-3" />

                            <input type="password" id="typePass1" placeholder='Mật Khẩu Cũ' className="form-control my-3" />
                            
                            <input
                                type="password" // Sử dụng conditional (ternary) operator để thay đổi kiểu input
                                id="password"
                                value={password}
                                onChange={handlePasswordChange} placeholder='Mật Khẩu Mới' className="form-control" />
                            {/* <div className="input-group mb-3">
                                <input
                                    type={showPassword ? 'text' : 'password'} // Sử dụng conditional (ternary) operator để thay đổi kiểu input
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange} placeholder='Mật Khẩu Mới' className="form-control" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <EyeFill
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </button>
                                </div>
                            </div> */}

                            <input type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange} placeholder='Xác Nhận Mật Khẩu Mới' className="form-control my-3" />
                            {!passwordMatch && <p style={{ color: 'red' }}>Mật Khẩu Không Trùng Kìa Ba</p>} {/* Hiển thị thông báo nếu mật khẩu không khớp */}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Xác Nhận</button>
                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/login">Đăng Nhập</Link>
                            <Link to="/register">Đăng Ký</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangePass;
