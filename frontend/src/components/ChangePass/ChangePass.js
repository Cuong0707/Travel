import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../style/ChangePass.scss'
import { AuthContext } from '../../context/auth-context';
// import { EyeFill } from 'react-bootstrap-icons';

function ChangePass() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { changePassword, user } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        const setError = () => { };
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }
        try {
            const { email } = user || {}; // Extract email from user object
            if (!email) {
                throw new Error('User email not found.');
            }
            await changePassword(email, oldPassword, newPassword);
            console.log('Password changed successfully');
        } catch (error) {
            console.error(error);
            setError('Failed to change password. Please try again.');
        }
    };
    return (
        <div className='container-forgot'>
            <form onSubmit={handleSubmit}>
                <div className="card text-center">
                    <div className="card-header h5 text-white bg-primary">Đổi Mật Khẩu</div>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Nhập Các Thông Tin Để Thay Đổi Mật Khẩu Mới
                        </p>
                        <div className="form-outline">
                            {/* <input type="email" id="typeEmail" placeholder='Email' className="form-control my-3" /> */}

                            <input type="password" value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)} id="typePass1" placeholder='Mật Khẩu Cũ' className="form-control my-3" />

                            <input
                                type="password" // Sử dụng conditional (ternary) operator để thay đổi kiểu input
                                id="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} placeholder='Mật Khẩu Mới' className="form-control" />
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
                                onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Xác Nhận Mật Khẩu Mới' className="form-control my-3" />
                            {newPassword !== confirmPassword && <p style={{ color: 'red' }}>Mật Khẩu Không Trùng Kìa Ba</p>} {/* Hiển thị thông báo nếu mật khẩu không khớp */}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Xác Nhận</button>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangePass;
