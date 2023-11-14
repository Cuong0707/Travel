import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="fixed-top shadow" style={{ backgroundColor: "var(--green-50)" }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            {/* <img src="images/icon-web1.png"></img> */}
                            <h3 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse row m-auto" id="navbarNavDropdown">
                            <ul className="navbar-nav col-lg-12 col-4 ">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                        data-mdb-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-destination.gif" alt="icon-destination"></img> Điểm Đến
                                    </Link>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item h6">
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
                                                    <Link className="dropdown-item">Đông Bắc Bộ &raquo; </Link>
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
                                            <Link className="dropdown-item h6">
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
                                            <Link className="dropdown-item h6">
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
                                                    <ul className="dropdown-menu dropdown-submenu">
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


                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-services.gif" alt="icon-service" /> Dịch Vụ</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="#">Khách Sạn <span className="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
                                            </Link>
                                        </li>
                                        <li><Link className="dropdown-item" to="#">Nhà Hàng</Link></li>
                                        <li><Link className="dropdown-item" to="#">Phương Tiện Di Chuyển</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#"> <img src="images/icon-blog1.gif" alt="icon-blog" /> Blog</Link>
                                </li>
                                <form className="d-flex">
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
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact"> <img src="images/icon-contact.gif" alt="icon-contact" /> Liên Hệ</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/icon-login1.gif" alt="icon-login" /> Đăng Nhập
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="login" data-toggle="modal" data-target="#myModal">Đăng Nhập & Đăng Ký</Link></li>
                                        <li><Link className="dropdown-item" to="myaccount">Thông Tin Cá Nhân</Link></li>
                                        <li><Link className="dropdown-item" to="#">Đổi Mật Khẩu</Link></li>
                                        <li><Link className="dropdown-item" to="#">Quên Mật Khẩu</Link></li>
                                    </ul>
                                </li>

                                {/* <button className="button-partner btn btn-success d-table ms-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalForm"><i class="bi bi-people-fill"></i>Become our partner</button> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="partner">
                                        <img src="images/icon-partner.gif" alt="icon-partner"></img> Trở Thành Đối Tác
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-translate"></i>
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Việt Nam</Link></li>
                                        <li><Link className="dropdown-item" to="#">English</Link></li>
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