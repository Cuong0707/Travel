import React from "react";
import '../style/style.scss'
import { Link } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="fixed-top shadow" style={{ backgroundColor: "var(--green-50)" }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <h3 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse row" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                        data-mdb-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-destination.gif"></img> Điểm Đến
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item h5">
                                                Miền Bắc &raquo;
                                            </Link>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li>
                                                    <Link className="dropdown-item h6">Đồng Bằng Sông Hồng &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hà Nội <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bắc Ninh</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hà Nam</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hải Dương</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hưng Yên</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hải Phòng</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Nam Định</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Ninh Bình</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Thái Bình</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Vĩnh Phúc</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item h6">Tây Bắc Bộ &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Lào Cai</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Yên Bái</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Lào Cai</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Điện Biên</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hòa Bình</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Lai Châu</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Sơn La</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" >Đông Bắc Bộ &raquo; </Link>
                                                    <ul class="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hà Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Cao Bằng</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bắc Kạn</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Lạng Sơn</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Tuyên Quang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Thái Nguyên</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Phú Thọ</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bắc Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Quảng Ninh</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item h5">
                                                Miền Nam &raquo;
                                            </Link>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li>
                                                    <Link className="dropdown-item h6">Đông Nam Bộ &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hồ Chí Minh <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bình Phước</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bình Dương</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Đồng Nai</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Tây Ninh</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bà Rịa-Vũng Tàu</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item h6">Tây Nam Bộ &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Cần Thơ</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Long An</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Đồng Tháp</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Tiền Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">An Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bến Tre</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Vĩnh Long</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Trà Vinh</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hậu Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Kiên Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Sóc Trăng</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bạc Liêu</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Cà Mau</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item">Đông Bắc Bộ &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hà Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Cao Bằng</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bắc Kạn</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Lạng Sơn</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Tuyên Quang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Thái Nguyên</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Phú Thọ</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bắc Giang</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Quảng Ninh</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item h5">
                                                Miền Trung &raquo;
                                            </Link>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li>
                                                    <Link className="dropdown-item h6">Bắc Trung Bộ &raquo; </Link>
                                                    <ul class="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Thừa Thiên-Huế <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Thanh Hoá</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Nghệ An</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Hà Tĩnh</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Quảng Bình</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Quảng Trị</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item h6">Nam Trung Bộ &raquo; </Link>
                                                    <ul className="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Đà Nẵng <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Quảng Nam</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Quảng Ngãi</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bình Định</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Phú Yên</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Khánh Hoà</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Ninh Thuận</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Bình Thuận</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item">Tây Nguyên &raquo; </Link>
                                                    <ul class="dropdown-menu dropdown-submenu">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Kon Tum</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Gia Lai</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Đắk Lắk</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Đắc Nông</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#">Lâm Đồng</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item dropdown position-static ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                        data-mdb-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-destination.gif"></img> Điểm Đến
                                    </Link>

                                    <div className="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown">
                                        <div className="container-fluid">

                                            <div className="row my-1">
                                                <div className="col-md-6 col-lg-2 mb-lg-0">
                                                    <div className="list-group list-group-flush">
                                                        <p className="mb-0 list-group-item fw-bold text-center">
                                                            MIỀN BẮC (ĐBSH)
                                                        </p>
                                                        <Link to="" className="list-group-item list-group-item-action" >
                                                            Hà Nội <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Bắc Ninh</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hải Dương</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hà Nam</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hưng Yên</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hải Phòng</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hải Dương</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Nam Định</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Ninh Bình </Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Thái Bình</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Vĩnh Phúc</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hà Nam</Link>

                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-2 mb-lg-0">
                                                    <div className="list-group list-group-flush">
                                                        <p className="mb-0 list-group-item fw-bold text-center text-uppercase">
                                                            Đông, Tây Bắc Bộ
                                                        </p>
                                                        <Link to="" className="list-group-item list-group-item-action">Lào Cai</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Yên Bái</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Điện Biên</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hòa Bình</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Lai Châu</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Sơn La</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hà Giang</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Cao Bằng</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Bắc Kạn</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Tuyên Quang</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Thái Nguyên</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Phú Thọ</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Bắc Giang</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Quảng Ninh</Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-2 mb-md-0">
                                                    <div className="list-group list-group-flush">
                                                        <p className="mb-0 list-group-item fw-bold text-center text-uppercase">
                                                            Miền Nam
                                                        </p>
                                                        <div className="list-group list-group-flush" style={{ fontSize: "11px" }}>
                                                            <Link to="" className="list-group-item list-group-item-action">Bình Phước</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Bình Dương</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Đồng Nai</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Tây Ninh</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Hồ Chí Minh <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Bà Rịa Vũng Tàu <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Long An</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Đồng Tháp</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Tiền Giang</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">An Giang</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Bến Tre</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Vĩnh Long</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Trà Vinh</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Hậu Giang</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Kiên Giang</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Sóc Trăng</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Bạc Liêu</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Sóc Trăng</Link>
                                                            <Link to="" className="list-group-item list-group-item-action">Bạc Liêu</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-2 mb-md-0">
                                                    <div className="list-group list-group-flush">
                                                        <p className="mb-0 list-group-item fw-bold text-center text-uppercase">
                                                            Miền Trung
                                                        </p>
                                                        <Link to="" className="list-group-item list-group-item-action">Thanh Hoá</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Hà Tĩnh</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Quảng Bình</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Quảng Trị</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Nghệ An <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Thừa Thiên-Huế <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Đà Nẵng <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Quảng Nam</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Quảng Ngãi</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Bình Định</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Phú Yên</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Khánh Hòa</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Ninh Thuận</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Bình Thuận</Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-2 mb-md-0">
                                                    <div className="list-group list-group-flush">
                                                        <p className="mb-0 list-group-item fw-bold text-center text-uppercase">
                                                            Tây Nguyên
                                                        </p>
                                                        <Link to="" className="list-group-item list-group-item-action">Kon Tum</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Gia Lai</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Đắc Lắc</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Đắc Nông</Link>
                                                        <Link to="" className="list-group-item list-group-item-action">Lâm Đồng <span className="badge rounded-pill bg-danger">Hot</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}



                                <li className="nav-item dropdown ms-1">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-services.gif"></img> Dịch Vụ</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="#">Khách Sạn <span className="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
                                            </Link>
                                        </li>
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
                                        <img src="images/icon-login1.gif"></img> Đăng Nhập
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#" data-toggle="modal" data-target="#myModal">Đăng Nhập & Đăng Ký</Link></li>
                                        <li><Link className="dropdown-item" to="myaccount">Thông Tin Cá Nhân</Link></li>
                                        <li><Link className="dropdown-item" to="#">Đổi Mật Khẩu</Link></li>
                                        <li><Link className="dropdown-item" to="#">Quên Mật Khẩu</Link></li>
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
                                        <img src="images/icon-partner.gif"></img> Trở Thành Đối Tác
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