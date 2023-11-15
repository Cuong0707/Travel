import React, { useState } from "react";
import '../../style/Login.scss'
import { Link } from "react-router-dom";
import ArticleAds from "../Article/ArticleAds";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <div className="row">
                <div className="col-9">
                    <div className={`container-login ${isSignIn ? "right-panel-active" : ""}`}>
                        <div className="form-container sign-up-container text-center">
                            <form className="bg-white d-flex justify-content-center row" onSubmit={handleSubmit}>
                                <h3 className="mt-3 text-uppercase fw-bold">Đăng ký Tài Khoản</h3>
                                <input className="col-10" type="text" name="fname" placeholder="Họ Và Tên" />
                                <input className="col-10 mt-2" type="text" name="address" placeholder="Email" />
                                <input className="col-10 mt-2" type="password" name="password" placeholder="Mật Khẩu" />
                                <input className="col-10 mt-2" type="password" name="password" placeholder=" Nhập Lại Mật Khẩu" />
                                <input className="col-10 mt-2" type="text" name="phone" placeholder="Số Điện Thoại" />
                                <button className="btn btn-success btn-sm col-7 mt-3">Xác Nhận</button>
                                <h6 className="mt-3">
                                    Bạn Đã Có Tài Khoản!{" "}
                                    <Link className="ghost fw-bold" id="signIn" style={{ color: "blue" }} onClick={toggleForm}>
                                        <u>Đăng Nhập</u>
                                    </Link>
                                </h6>
                            </form>
                        </div>
                        <div className="form-container sign-in-container text-center">
                            <form className="bg-white d-flex justify-content-center row" onSubmit={handleSubmit}>
                                <h3 className="mt-3 text-uppercase fw-bold">Đăng Nhập</h3>
                                <input className="col-10" type="email" name="email" placeholder="Email" />
                                <input className="col-10 mt-2" type="password" name="password" placeholder="Mật Khẩu" />
                                <Link className="mt-2 fw-bold col-10 text-end" to="#" >
                                    Quên Mật Khẩu?
                                </Link>
                                <button className="btn btn-success btn-sm col-5 mt-3">Xác Nhận</button>
                                <h6 className="mt-3 mb-3">
                                    Chưa Có Tài Khoản ?{" "}
                                    <Link className="ghost fw-bold" id="signUp" onClick={toggleForm}>
                                        <u>Đăng Ký</u>
                                    </Link>
                                </h6>
                                <hr style={{
                                    width: "60%",
                                    margin: "0 auto"
                                }} />

                                <div className="sign-in-with row">
                                    <h6 className="m-auto mt-3 col-12">Hoặc</h6>
                                    <Link to="" className="mt-2 col-12">
                                        <button className="btn btn-primary btn-sm"><i className="bi bi-facebook"></i> Đăng Nhập Bằng Facebook</button>

                                    </Link>
                                    <Link to="" className="mt-2 col-12">
                                        <button className="sign-in-gg btn btn-danger btn-sm "><i className="bi bi-google"></i> Đăng Nhập Bằng Google</button>
                                    </Link>
                                </div>
                            </form>
                        </div>

                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <img src="images/images-signup.png"
                                        alt="movie-1" height="480" width="430" />
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <img src="images/images-signin.jpg"
                                        alt="movie-2" height="480" width="430" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3" style={{ marginTop: "90px" }}>
                    <ArticleAds />
                </div>
            </div>
        </>
    );
};

export default Login;