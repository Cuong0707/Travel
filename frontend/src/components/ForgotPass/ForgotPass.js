import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../style/ForgotPass.scss'
import { AuthContext } from '../../context/auth-context';
function ForgotPass() {
    const [email, setEmai] = useState('');
    const { forgotPassword } = useContext(AuthContext);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("email :"+email);
            await forgotPassword(email);
            console.log("Đã gửi mail");
        } catch (error) {
            console.error(error);
        }
    };
    const handleEmailChange = (e) => {
        setEmai(e.target.value);
    }
    return (
        <div className='container-forgot w-50'>
            <div className="card text-center">
                <div className="card-header h5 text-white bg-primary">Quên Mật Khẩu</div>
                <div className="card-body px-5">
                    <form onSubmit={handleSubmit}>
                        <p className="card-text py-2">
                            Nhập địa chỉ email của bạn.
                        </p>
                        <div className="form-outline">
                            <input type="email" value={email} onChange={handleEmailChange} id="typeEmail" placeholder='Email' className="form-control my-3" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Gửi</button>
                    </form>
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
