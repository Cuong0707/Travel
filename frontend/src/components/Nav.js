import React from "react";
import '../style/style.scss'
import { Link } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="fixed-top shadow rounded" style={{ backgroundColor: "var(--green-50)" }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <h3 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-destination.gif"></img> Điểm Đến
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Ha Noi</Link></li>
                                        <li><Link className="dropdown-item" to="#">Hai Phong</Link></li>
                                        <li><Link className="dropdown-item" to="#">Bac Ninh</Link></li>
                                    </ul>


                                </li>
                                <li className="nav-item dropdown ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-services.gif"></img> Dịch Vụ <span className="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Khách Sạn</Link></li>
                                        <li><Link className="dropdown-item" to="#">Nhà Hàng</Link></li>
                                        <li><Link className="dropdown-item" to="#">Phương Tiện Di Chuyển</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item ms-1">
                                    <Link className="nav-link" to="#"> <img src="images/icon-blog1.gif"></img> Blog</Link>
                                </li>
                                <form className="d-flex ms-1">
                                    {/* <input class="form-control me-2 col-ms-12" type="search" placeholder="Search" aria-label="Search" style={{ width: "350px" }} /> */}

                                    <input className="form-control me-2 col-ms-12" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." style={{ width: "350px" }} />
                                    <datalist id="datalistOptions">
                                        <option value="San Francisco" />
                                        <option value="New York" />
                                        <option value="Seattle" />
                                        <option value="Los Angeles" />
                                        <option value="Chicago" />
                                    </datalist>
                                    <button className="btn btn-success" type="submit"><i className="bi bi-search"></i></button>
                                </form>
                                <li className="nav-item ms-1">
                                    <Link className="nav-link" to="contact"> <img src="images/icon-contact.gif"></img> Liên Hệ</Link>
                                </li>
                                <li className="nav-item dropdown ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-login.gif"></img> Đăng Nhập
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="./view/login_signup.js">Đăng Nhập & Đăng Ký</Link></li>
                                        <li><Link className="dropdown-item" to="#">Thông Tin Cá Nhân</Link></li>
                                        <li><Link className="dropdown-item" to="#">Đổi Mật Khẩu</Link></li>
                                        <li><Link className="dropdown-item" data-bs-toggle="modal" data-bs-target="#ModalForm" to="#">Quên Mật Khẩu</Link></li>
                                    </ul>
                                    <div className="modal fade" id="ModalForm" tabindex="-1" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <form action="">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title ms-auto">Forgot Password</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="mb-3">
                                                            <label htmlFor="your-email">Your Email<span className="text-danger">*</span></label>
                                                            <input text="email" name="your-email" className="form-control mt-2" id="your-email" placeholder="abc...@gmail.com" />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer pt-4">
                                                        <button type="button" className="btn btn-success mx-auto w-100">Reset Password</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <button className="button-partner btn btn-success d-table ms-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalForm"><i class="bi bi-people-fill"></i>Become our partner</button> */}
                                <li className="nav-item ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-partner.gif"></img> Trở Thành Đối Tác <span class="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-translate"></i>
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="#">Việt Nam</Link></li>
                                        <li><Link className="dropdown-item" href="#">English</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div >
                </nav >
            </div>

        )
    }
}
export default Nav;