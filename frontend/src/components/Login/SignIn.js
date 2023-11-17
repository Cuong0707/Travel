import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../style/Login.scss'
import { Link } from "react-router-dom";


function SignIn() {
  return (
    <div className='container-login'>
      <div className="container my-3">
        <div className='card'>
          <div className='g-0 row'>
            <div className='col-md-5 m-auto'>
              <h1 className="fw-normal my-4 fw-bold text-center">Đăng Nhập</h1>
              <div className='card-body d-flex flex-column'>
                <form method=''>
                  <input className='mb-3 form-control form-control-lg' type='email' placeholder='Email' />
                  <input className='mb-3 form-control form-control-lg' type='password' placeholder='Mật Khẩu' />
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
              <img src='images/images-signin.jpg' alt="login form" style={{ height: "600px", width: "650px" }} className="rounded-start" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;