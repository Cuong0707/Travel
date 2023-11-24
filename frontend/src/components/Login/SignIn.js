import React, { useContext, useState } from 'react';
import '../../style/Login.scss'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
//import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signIn(email, password);
      navigate('/');
      // window.location.href = '/';
    } catch (error) {
      console.error(error);
      setError("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
    }
  };

  return (
    <div className='container-login'>
      <div className="container my-3">
        <div className='card shadow p-3 mb-5 bg-white rounded'>
          <div className='g-0 row'>
            <div className='col-md-5 m-auto'>
              <h1 className="fw-normal my-4 fw-bold text-center">Đăng Nhập</h1>
              <div className='card-body d-flex flex-column'>
                <form onSubmit={handleSubmit}>

                  {/* Nơi hiển thị báo lỗi*/}
                  {error && <div className="text-danger">{error}</div>}
                  <input className='mb-3 form-control form-control-lg'
                    value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                  <input className='mb-3 form-control form-control-lg'
                    value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Mật Khẩu' />

                  <div className='row'>
                    <h6 className="col-6 mb-3 fw-bold">
                      Chưa Có Tài Khoản ?{" "}
                      <Link className="" to="/register">
                        <u>Đăng Ký</u>
                      </Link>
                    </h6>
                    <Link className=" fw-bold col-6 text-end" to="/forgot-pass" >
                      Quên Mật Khẩu?
                    </Link>
                  </div>
                  <div class="col-md-12 text-center">
                    <button className="btn btn-success col-5 mb-3" type='submit'>Xác Nhận</button>
                  </div>
                </form>
                <div class="col-md-12 text-center">
                  <hr style={{
                    width: "60%",
                    margin: "0 auto"
                  }} />
                  <div className="sign-in-with row m-auto">
                    <h6 className="mt-3 col-12">Hoặc</h6>
                    <Link to="" className="mt-2 col-12">
                      <button className="btn btn-primary btn-sm"><i className="bi bi-facebook"></i> Đăng Nhập Bằng Facebook</button>

                    </Link>
                    <Link to="" className="mt-2 col-12">
                      <button className="sign-in-gg btn btn-danger btn-sm "><i className="bi bi-google"></i> Đăng Nhập Bằng Google</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 img-signin'>
              <img src='images/images-signin.jpg' alt="login form" style={{ height: "600px", width: "630px" }} className="rounded-start" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;