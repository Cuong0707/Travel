import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../style/Login.scss'
import { Link } from "react-router-dom";


function SignUp() {
    return (
        <div className='container-login'>
            <div className="container my-3 ">
                <div className='card'>
                    <div className='g-0 row'>
                        <div className='col-md-5 m-auto'>
                            <h1 className="fw-normal my-4 fw-bold text-center">Đăng Ký</h1>
                            <div className='card-body d-flex flex-column'>
                                <form method=''>
                                    <div className="row mb-3">
                                        <div className='col-6'>
                                            <label htmlFor='label1' className='mb-2'>Họ Và Tên</label>
                                            <input type="text" className='form-control' />
                                        </div>

                                        <div className='col-6'>
                                            <label htmlFor='label2' className='mb-2'>Email</label>
                                            <input type="email" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col">
                                            <label htmlFor="province" className="form-label">Tỉnh</label>
                                            <select id="province" className="form-select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="district" className="form-label">Quận/Huyện</label>
                                            <select id="district" className="form-select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="commune" className="form-label">Xã</label>
                                            <select id="commune" className="form-select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Mật Khẩu</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Xác Nhận Mật Khẩu</label>
                                        <input type="password" className="form-control" id="confirmPassword" />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="agreeTerms" />
                                                <label className="form-check-label" htmlFor="agreeTerms">Đồng Ý Các Điều Khoản</label>
                                            </div>
                                        </div>
                                        <div className="col text-end">
                                            <p className="pb-lg-2 fw-bold">Đã Có Tài Khoản ? <Link to="/login" style={{ color: '#393f81' }}> <u>Đăng Nhập</u></Link></p>
                                        </div>
                                    </div>
                                </form>
                                <div className='row'>
                                </div>
                                <button className="btn btn-success col-5 m-auto" type='submit'>Xác Nhận</button>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src='images/images-signup.png' alt="login form" style={{ height: "600px", width: "650px" }} className="rounded-start" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;