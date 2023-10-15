import React, { Component } from 'react';
import vnTopo from './geo_data/mapvn1.json';
import hs from './geo_data/Hoangsa.json';
import ts from './geo_data/Truongsa.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';

const vietnam = [vnTopo, hs, ts];

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav>
                    {/* <div className="container-fluid row col-sm-12 col-md-12 col-xs-12">
                        <div className="nav-wrapper">
                            <a href="" className="navbar-brand">
                                <h1 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h1>
                            </a>
                            <div className="nav-menu-wrapper mt-1">
                                <div className="navbar-menu-header">
                                    <p className="navbar-menu-title">Menu</p>
                                    <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                </div>
                                <ul className="nav-menu">
                                    <li><a href="#" data-toggle="navbar-submenu" data-target="#destination">Destinations <i
                                        className="ri-arrow-down-s-line"></i></a>
                                        <div className="navbar-submenu-wrapper">
                                            <div className="navbar-submenu-menu-wrapper" id="destination">
                                                <div className="navbar-submenu-header">
                                                    <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                                    <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                                </div>
                                                <ul className="navbar-submenu-menu">
                                                    <li><a href="#" className="active"
                                                        data-toggle="navbar-submenu-content navbar-submenu"
                                                        data-target="#destination-north">Province North<i
                                                            className="ri-arrow-right-s-line"></i></a></li>
                                                    <li><a href="#" data-toggle="navbar-submenu-content navbar-submenu"
                                                        data-target="#destination-central">Province Centrel<i
                                                            className="ri-arrow-right-s-line"></i></a></li>
                                                    <li><a href="#" data-toggle="navbar-submenu-content navbar-submenu"
                                                        data-target="#destination-south">Province South<i
                                                            className="ri-arrow-right-s-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="navbar-submenu-content-wrapper active" id="destination-north">
                                                <div className="navbar-submenu-header">
                                                    <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                                    <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                                </div>
                                                <div className="navbar-submenu-content-title">List Of Provinces</div>
                                                <ul className="navbar-submenu-content">
                                                    <li><a href="">Ha Noi</a></li>
                                                    <li><a href="">Ha Giang</a></li>
                                                    <li><a href="">Bac Can</a></li>
                                                    <li><a href="">Cao Bang</a></li>
                                                    <li><a href="">Tuyen Quang</a></li>
                                                    <li><a href="">Lang Son</a></li>
                                                    <li><a href="">Thai Nguyen</a></li>
                                                    <li><a href="">Bac Giang</a></li>
                                                    <li><a href="">Phu Tho</a></li>
                                                    <li><a href="">Quang Ninh</a></li>
                                                    <li><a href="">Lao Cai</a></li>
                                                    <li><a href="">Đien Bien</a></li>
                                                    <li><a href="">Yen Bai</a></li>
                                                    <li><a href="">Lai Chau</a></li>
                                                    <li><a href="">Hoa Binh</a></li>
                                                    <li><a href="">Son La</a></li>
                                                    <li><a href="">Bac Ninh</a></li>
                                                    <li><a href="">Hai Duong</a></li>
                                                    <li><a href="">Ha Nam</a></li>
                                                    <li><a href="">Hai Phong</a></li>
                                                    <li><a href="">Nam Dinh</a></li>
                                                    <li><a href="">Hung Yen</a></li>
                                                    <li><a href="">Thai Binh</a></li>
                                                    <li><a href="">Ninh Binh</a></li>
                                                    <li><a href="">Vinh Phuc</a></li>
                                                </ul>
                                            </div>
                                            <div className="navbar-submenu-content-wrapper" id="destination-central">
                                                <div className="navbar-submenu-header">
                                                    <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                                    <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                                </div>
                                                <div className="navbar-submenu-content-title">List Of Provinces</div>
                                                <ul className="navbar-submenu-content">
                                                    <li><a href="">Nghe An</a></li>
                                                    <li><a href="">Thanh Hoa</a></li>
                                                    <li><a href="">Ha Tinh</a></li>
                                                    <li><a href="">Quang Tri</a></li>
                                                    <li><a href="">Quang Binh</a></li>
                                                    <li><a href="">Thua Thien - Hue</a></li>
                                                    <li><a href="">Khanh Hoa</a></li>
                                                    <li><a href="">Binh Thuan</a></li>
                                                    <li><a href="">Ninh Thuan</a></li>
                                                    <li><a href="">Quang Nam</a></li>
                                                    <li><a href="">Quang Ngai</a></li>
                                                    <li><a href="">Da Nang</a></li>
                                                    <li><a href="">Binh Dinh</a></li>
                                                    <li><a href="">Phu Yen</a></li>
                                                </ul>
                                            </div>
                                            <div className="navbar-submenu-content-wrapper" id="destination-south">
                                                <div className="navbar-submenu-header">
                                                    <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                                    <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                                </div>
                                                <div className="navbar-submenu-content-title">List Of Provinces</div>
                                                <ul className="navbar-submenu-content">
                                                    <li><a href="">Ho Chi Minh</a></li>
                                                    <li><a href="">Binh Duong</a></li>
                                                    <li><a href="">Binh Phuoc</a></li>
                                                    <li><a href="">Tay Ninh</a></li>
                                                    <li><a href="">Dong Nai</a></li>
                                                    <li><a href="">Ba Ria Vung Tau</a></li>
                                                    <li><a href="">Long An</a></li>
                                                    <li><a href="">Dong Thap</a></li>
                                                    <li><a href="">An Giang</a></li>
                                                    <li><a href="">Tien Giang</a></li>
                                                    <li><a href="">Ben Tre</a></li>
                                                    <li><a href="">Tra Vinh</a></li>
                                                    <li><a href="">Vinh Long</a></li>
                                                    <li><a href="">Kien Giang</a></li>
                                                    <li><a href="">Hau Giang</a></li>
                                                    <li><a href="">Bac Lieu</a></li>
                                                    <li><a href="">Soc Trang</a></li>
                                                    <li><a href="">Can Tho</a></li>
                                                    <li><a href="">Ca Mau</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown" style={{ marginTop: "3px" }}>
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Hotel</a></li>
                                            <li><a className="dropdown-item" href="#">Restaurant</a></li>
                                            <li><a className="dropdown-item" href="#">Transport</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li className="dropdown" style={{ marginTop: "3px" }}>
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Login
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Login & Register</a></li>
                                            <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#ModalForm" href="#">Change Password</a></li>
                                            <li><a className="dropdown-item" href="#">Forgot Password</a></li>
                                        </ul>
                                    </li>
                                    <button className="buttonLogin btn btn-success d-table mx-auto ms-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalForm">Become our parter</button>
                                    <div className="modal fade" id="ModalForm" tabindex="-1" aria-hidden="true">

                                        <div className="modal-dialog modal-dialog-centered ">
                                            <div className="modal-content">
                                                <form action="">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" style={{ marginLeft: "135px", textTransform: "uppercase" }}>Change Password</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">

                                                        <div className="mb-3">
                                                            <label htmlFor="current-pass">Current Password<span className="text-danger">*</span></label>
                                                            <input type="password" name="name" className="form-control" id="current-pass" placeholder="Please enter" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="new-pass">Your New Password<span className="text-danger">*</span></label>
                                                            <input text="password" name="5photo" className="form-control" id="new-pass" placeholder="Please enter" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="confirm-pass">Confirm New Password<span className="text-danger">*</span></label>
                                                            <input text="password" name="5photo" className="form-control" id="confirm-pass" placeholder="Please enter" />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer pt-4">
                                                        <button type="button" className="btn btn-success mx-auto w-100">Except</button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <a href="#" className="navbar-toggle">
                                <i className="ri-menu-line"></i>
                            </a>
                        </div >
                    </div > */}
                    <div className="fixed-top shadow rounded" style={{ backgroundColor: "var(--green-50)" }}>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a href="" className="navbar-brand">
                                    <h2 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h2>
                                </a>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item dropdown ms-2">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-globe-europe-africa"></i> Điểm Đến
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
                                                <i class="bi bi-cursor-fill"></i> Trở Thành Đối Tác <span class="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}>Hot</span>
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
                </nav >

                <header>
                    <div className="container-fluid">
                        {/* <div className="header-image">
                            <img className="active" src="images/beach.jpg" alt="carousel" />
                            <img src="images/hero-bg-2.webp" alt="carousel" />
                            <img src="images/hero-bg-3.webp" alt="carousel" />
                        </div>
                        <div className="header-wrapper">
                            <h2 className="header-title">DISCOVER THE WORLD ONE ADVENTURE AT A TIME</h2>
                            <p className="header-description">Discover the world with tour. Explore new destinations and book your next
                                tour today.</p>
                            <form className="header-form">
                                <input type="text" placeholder="Search for your adventure..." />
                                <button className="btn btn-success"><i className="ri-search-line"></i> Search</button>
                            </form>
                        </div>
                        <div className="header-image-indicator">
                            <a href="#" className="active"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div> */}

                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner" style={{ height: "650px" }}>
                                <div className="carousel-item active">
                                    <img src="images/beach.jpg" className="d-block w-100" alt="..." style={{ height: "650px" }} />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/hero-bg-1.webp" className="d-block w-100" alt="..." style={{ height: "650px" }} />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.pexels.com/photos/14021006/pexels-photo-14021006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style={{ height: "650px" }} />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </header>
                <div className="container-fluid row">
                    <aside className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Filter</h5>
                                <label htmlFor="Location">Location<span className="text-danger">*</span></label>
                                <select id="Location" name="Location" className="form-control mt-2">
                                    <option value="hcm">Ho Chi Minh</option>
                                    <option value="hanoi">Ha Noi</option>
                                    <option value="hcm">Hai Phong</option>
                                    <option value="danang">Da Nang</option>
                                </select>

                            </div>
                        </div>
                    </aside>
                    <article className="col-7">
                        <div className="map">
                            <ComposableMap
                                projection="geoMercator"
                                projectionConfig={{
                                    scale: 2100,
                                    center: [105, 15] // coordinate of VietNam [long, lat]
                                }}
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            >
                                <ZoomableGroup center={[104, 16]}>
                                    {vietnam.map((geoUrl) => (
                                        <Geographies key={geoUrl} geography={geoUrl}>
                                            {({ geographies }) =>
                                                geographies.map((geo) => (
                                                    <Geography
                                                        key={geo.rsmKey}
                                                        geography={geo}
                                                        style={{
                                                            default: {
                                                                fill: '#808080',
                                                                stroke: '#212529',
                                                                strokeWidth: 0.75,
                                                                outline: 'none',
                                                            },
                                                            hover: {
                                                                fill: '#e6dfd9',
                                                                stroke: '#212529',
                                                                strokeWidth: 0.75,
                                                                outline: 'none',
                                                            },
                                                        }}
                                                    />
                                                ))
                                            }
                                        </Geographies>
                                    ))}
                                </ZoomableGroup>
                            </ComposableMap>
                        </div>
                    </article>
                </div>
                <section className="destination">
                    <div className="container">
                        <h2 className="destination-title">Top Destinations</h2>
                        <div className="destination-wrapper">
                            <a href="#" className="slider-arrow prev" data-slide="prev" data-target="#destination-list"><i
                                className="ri-arrow-left-s-line"></i></a>
                            <a href="#" className="slider-arrow next" data-slide="next" data-target="#destination-list"><i
                                className="ri-arrow-right-s-line"></i></a>
                            <div className="destination-list" id="destination-list">
                                <div>
                                    <div className="destination-list-top">
                                        <img src="images/hero-bg-1.webp" />
                                        <a className="destinations-list-top-favourite">
                                            <i className="ri-heart-3-line"></i>
                                        </a>
                                        <span className="destinations-list-top-tag">Popular</span>
                                    </div>
                                    <div className="destination-list-content">
                                        <div className="destination-list-content-location">
                                            <i className="ri-global-line"></i>
                                            Marrakech, Morocco
                                        </div>
                                        <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                                        <div className="destination-list-content-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </div>
                                        <div className="destination-list-content-price">
                                            from <span>$123</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="destination-list-top">
                                        <img src="images/hero-bg-1.webp" />
                                    </div>
                                    <div className="destination-list-content">
                                        <div className="destination-list-content-location">
                                            <i className="ri-global-line"></i>
                                            Marrakech, Morocco
                                        </div>
                                        <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                                        <div className="destination-list-content-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </div>
                                        <div className="destination-list-content-price">
                                            from <span>$123</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="destination-list-top">
                                        <img src="images/hero-bg-1.webp" />
                                    </div>
                                    <div className="destination-list-content">
                                        <div className="destination-list-content-location">
                                            <i className="ri-global-line"></i>
                                            Marrakech, Morocco
                                        </div>
                                        <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                                        <div className="destination-list-content-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </div>
                                        <div className="destination-list-content-price">
                                            from <span>$123</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="destination-list-top">
                                        <img src="images/hero-bg-1.webp" />
                                    </div>
                                    <div className="destination-list-content">
                                        <div className="destination-list-content-location">
                                            <i className="ri-global-line"></i>
                                            Marrakech, Morocco
                                        </div>
                                        <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                                        <div className="destination-list-content-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </div>
                                        <div className="destination-list-content-price">
                                            from <span>$123</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="destination-list-top">
                                        <img src="images/hero-bg-1.webp" />
                                    </div>
                                    <div className="destination-list-content">
                                        <div className="destination-list-content-location">
                                            <i className="ri-global-line"></i>
                                            Marrakech, Morocco
                                        </div>
                                        <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                                        <div className="destination-list-content-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </div>
                                        <div className="destination-list-content-price">
                                            from <span>$123</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial">
                    <div className="container">
                        <h2 className="section-title">Join the Adventure, Read Our Reviews</h2>
                        <div className="testimonial-wrapper">
                            <div className="testimonial-list">
                                <div>
                                    <img src="images/user-2.webp" className="testimonial-user-image" />
                                    <p className="testimonial-content">"I had an amazing time on my tour with tour. The guide was
                                        fantastic and showed us all the best sights. I highly recommend tour.”</p>
                                    <div className="testimonial-user-name">Micheal</div>
                                    <div className="testimonial-user-job">Teacher</div>
                                </div>
                                <div>
                                    <img src="images/user-2.webp" className="testimonial-user-image" />
                                    <p className="testimonial-content">"I had an amazing time on my tour with tour. The guide was
                                        fantastic and showed us all the best sights. I highly recommend tour.”</p>
                                    <div className="testimonial-user-name">Micheal</div>
                                    <div className="testimonial-user-job">Teacher</div>
                                </div>
                                <div>
                                    <img src="images/user-2.webp" className="testimonial-user-image" />
                                    <p className="testimonial-content">"I had an amazing time on my tour with tour. The guide was
                                        fantastic and showed us all the best sights. I highly recommend tour.”</p>
                                    <div className="testimonial-user-name">Micheal</div>
                                    <div className="testimonial-user-job">Teacher</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="footer-top">
                            <a href="#" className="footer-logo"><img src="images/tour-logo.png" /></a>
                            <div className="footer-social">
                                <a href="#"><i className="ri-facebook-fill"></i></a>
                                <a href="#"><i className="ri-instagram-fill"></i></a>
                                <a href="#"><i className="ri-twitter-fill"></i></a>
                                <a href="#"><i className="ri-linkedin-fill"></i></a>
                            </div>
                        </div>
                        <div className="footer-links row mt-4">
                            <div className="col-6">
                                <b style={{ fontSize: "20px" }}>Công ty cổ phần du lịch Việt Nam SaiGonTrip</b>
                                <p className="mt-2">Tổng đài chăm sóc: 1900 2083</p>
                                <p>Email: hotro@saigontrip.vn</p>
                                <p>Văn phòng chính: Cong vien phan mem Quang Trung</p>
                                <div className="mb-3 row">
                                    <label for="exampleInputEmail1" className="form-label">Đăng ký nhận thông báo mới nhất từ chúng tôi:</label>
                                    <form className="d-flex">
                                        <input className="form-control me-2 col-ms-12" type="Email" placeholder="Email" aria-label="Email" style={{ width: "280px" }} />
                                        <button className="btn btn-success" type="submit">Gửi</button>
                                    </form>
                                </div>
                                <div>
                                    <a href=""><img src="../images/logo-bocongthuong.png" style={{ height: "50px" }}></img></a>
                                    <a href=""><img src="../images/logo-dkbocongthuong.png" style={{ height: "40px", marginLeft: "20px" }}></img></a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-links-title">Chính sách & Quy định</div>
                                <ul className="footer-links-list">
                                    <li><a href="#">Điều khoản & điều kiện</a></li>
                                    <li><a href="#">Quy định thanh toán</a></li>
                                    <li><a href="#">Quy chế hoạt động</a></li>
                                    <li><a href="#">Chương trình khách hàng thân thiết</a></li>
                                    <li><a href="#">Chương trình đánh giá trải nghiệm khách sạn</a></li>
                                </ul>
                            </div>
                            <div className="col-2">
                                <div className="footer-links-title">Khách hàng và đối tác</div>
                                <ul className="footer-links-list">
                                    <li><a href="#">Dịch Vụ</a></li>
                                    <li><a href="#">Liên Hệ</a></li>
                                    <li><a href="#">Chi Tiết Dịch Vụ</a></li>
                                    <li><a href="#">Đăng Nhập</a></li>
                                    <li><a href="#">Tuyển Dụng</a></li>
                                </ul>
                            </div>
                            <div className="col-2">
                                <div className="footer-links-title">Khác</div>
                                <ul className="footer-links-list">
                                    <li><a href="#">SaiGonTrip Blog</a></li>
                                    <li><a href="#">Địa Điểm Nổi Tiếng</a></li>
                                    <li><a href="#">Xu Hướng</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom text-center row">
                            <p>SaiGonTrip là thành viên của FPT Services - Một trong những tập đoàn đứng đầu Đông Nam Á về du lịch trực tuyến và các dịch vụ liên quan</p>
                            <div className="footer-line-img">
                                <img src="../images/logo-fpt.png" className="col-4 " style={{ height: "100px", width: "100px" }}></img>
                                <img src="../images/logo-footer1.png" className="col-4 " style={{ height: "100px", width: "100px" }}></img>
                                <img src="../images/logo-footer2.png" className="col-4 " style={{ height: "120px", width: "120px" }}></img>
                                <img src="../images/logo-footer3.png" className="col-4" style={{ height: "100px", width: "100px" }}></img>
                            </div>
                            <p>Copyright © 2023 - CÔNG TY CỔ PHẦN DU LỊCH SaiGonTrip - Đăng ký kinh doanh số 113 - do Sở Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp lần đầu ngày 29 tháng 11 năm 2023</p>
                        </div>
                    </div>
                </footer>
            </div >
        );
    }
}

export default App;

