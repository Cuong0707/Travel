import React from "react";
import '../style/style.scss'

class Nav extends React.Component {
    render() {
        return (
            <>
                <div>
                    
                </div>
                <div className="fixed-top shadow rounded" style={{ backgroundColor: "var(--green-50)" }}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a href="" className="navbar-brand">
                                <h3 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h3>
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ">
                                    <li className="nav-item dropdown ms-2">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-globe-europe-africa"></i> Điểm Đến
                                        </a>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Ha Noi</a></li>
                                            <li><a className="dropdown-item" href="#">Hai Phong</a></li>
                                            <li><a className="dropdown-item" href="#">Bac Ninh</a></li>
                                        </ul>


                                    </li>
                                    <li className="nav-item dropdown ms-2">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-cursor-fill"></i> Dịch Vụ <span class="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Khách Sạn</a></li>
                                            <li><a className="dropdown-item" href="#">Nhà Hàng</a></li>
                                            <li><a className="dropdown-item" href="#">Phương Tiện Di Chuyển</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item ms-2">
                                        <a className="nav-link" href="#"><i class="bi bi-backpack2-fill"></i> Blog</a>
                                    </li>
                                    <form class="d-flex ms-2">
                                        {/* <input class="form-control me-2 col-ms-12" type="search" placeholder="Search" aria-label="Search" style={{ width: "350px" }} /> */}

                                        <input className="form-control me-2 col-ms-12" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." style={{ width: "350px" }} />
                                        <datalist id="datalistOptions">
                                            <option value="San Francisco" />
                                            <option value="New York" />
                                            <option value="Seattle" />
                                            <option value="Los Angeles" />
                                            <option value="Chicago" />
                                        </datalist>
                                        <button class="btn btn-success" type="submit"><i class="bi bi-search"></i></button>
                                    </form>
                                    <li className="nav-item ms-2">
                                        <a className="nav-link" href="#"><i class="bi bi-telephone-fill"></i> Liên Hệ</a>
                                    </li>
                                    <li className="nav-item dropdown ms-2">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-person-fill"></i> Đăng Nhập
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Đăng Nhập & Đăng Ký</a></li>
                                            <li><a className="dropdown-item" href="#">Thông Tin Cá Nhân</a></li>
                                            <li><a className="dropdown-item" href="#">Đổi Mật Khẩu</a></li>
                                            <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#ModalForm" href="#">Quên Mật Khẩu</a></li>
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
                                    <li className="nav-item ms-2">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-people-fill"></i> Trở Thành Đối Tác <span class="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown ms-2">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-translate"></i>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Việt Nam</a></li>
                                            <li><a className="dropdown-item" href="#">English</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div >
                    </nav >
                </div>
            </>
        )
    }
}
export default Nav;