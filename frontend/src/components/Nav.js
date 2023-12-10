import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from '../Services/ScrollToTop';
import DarkModeToggle from "../Services/DarkModeToggle";
import useAppContext from "../hook/useAppContext";
import { clearLS } from "../utils/auth.utils";
import { useQuery } from "react-query";
import addressApi from "../api/address.api";
import HeaderListRegion from "./HeaderListRegion";
const Nav = () => {
    const { profile, isAuthenticated, reset } = useAppContext()
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (event) => {
        // const value = event.target.value;
        // setInputValue(value);

        // const selected = provinceList.find(
        //     (province) => province.nameOfProvince === value
        // );

        // if (selected) {

        //     setSelectedProvince(selected.provinceID);
        // } else {
        //     setSelectedProvince('');
        // }
    };
    const handleLogout = () => {
        reset();
        navigate("/login");
        clearLS();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const datahotel = await LoadListHotel(selectedProvince);
            // navigate('/search', { state: { searchResults: datahotel.data.content } });
            // window.location.href = '/';
        } catch (error) {
            console.error("fill list hotel fail :" + error);
        }
    };

    const fetchAllProvice = useQuery({
        queryKey: ['getALlProvince'],
        queryFn: () => {
            return addressApi.getALlProvince();
        }
    });

    return (
        <div className="fixed-top shadow" style={{ backgroundColor: "var(--green-50)" }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid fw-bold">
                    <Link to="/" className="navbar-brand">
                        {/* <img src="images/icon-web1.png"></img> */}
                        <ScrollToTop><h3 className="text-success"><span className="text-dark">SAIGON</span>TRIP</h3></ScrollToTop>
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
                                <HeaderListRegion />
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="images/icon-services.gif" alt="icon-service" /> Dịch Vụ</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item" to="/HotelList">
                                            <ScrollToTop>Khách Sạn
                                                <span className="badge rounded-pill bg-danger" style={{ fontSize: "8px" }}> Hot</span>
                                            </ScrollToTop>
                                        </Link>
                                    </li>
                                    <ScrollToTop><li><Link className="dropdown-item" to="/restaurant">Nhà Hàng</Link></li></ScrollToTop>
                                    <ScrollToTop><li><Link className="dropdown-item" to="/vist-location">Địa Điểm Tham Quan</Link></li></ScrollToTop>
                                    <ScrollToTop><li><Link className="dropdown-item" to="/transport">Phương Tiện Di Chuyển</Link></li></ScrollToTop>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <ScrollToTop><Link className="nav-link" to="/blog"> <img src="images/icon-blog1.gif" alt="icon-blog" /> Gợi Ý</Link></ScrollToTop>
                            </li>
                            <form className="d-flex" onSubmit={handleSubmit}>
                                {/* <input class="form-control me-2 col-ms-12" type="search" placeholder="Search" aria-label="Search" style={{ width: "350px" }} /> */}

                                <input value={inputValue} onChange={handleInputChange} className="form-control me-2 col-ms-12" list="datalistOptions" id="exampleDataList" placeholder="Chọn Tỉnh, TP Muốn Tìm.." style={{ width: "350px" }} />
                                <datalist id="datalistOptions">
                                    {fetchAllProvice?.data?.data?.map((province) => {
                                        return <option key={province.provinceID}>{province.nameOfProvince}</option>
                                    })}
                                </datalist>
                                <ScrollToTop><button className="btn btn-success" type="submit"><i className="bi bi-search"></i></button></ScrollToTop>
                            </form>
                            <li className="nav-item">
                                <ScrollToTop><Link className="nav-link" to="contact"> <img src="images/icon-contact.gif" alt="icon-contact" /> Liên Hệ</Link></ScrollToTop>
                            </li>
                            {isAuthenticated &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/partner">
                                        <img src="images/icon-partner.gif" alt="icon-partner"></img> Trở Thành Đối Tác
                                    </Link>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src="images/icon-login1.gif" alt="icon-login" /> {isAuthenticated ? <span>{profile.fullname}</span> : 'Đăng Nhập'}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {isAuthenticated ? (
                                        <>
                                            <ScrollToTop><li><Link className="dropdown-item" to="/my-account">Thông Tin Cá Nhân</Link></li></ScrollToTop>
                                            <ScrollToTop><li><Link className="dropdown-item" to="/change-password">Đổi Mật Khẩu</Link></li></ScrollToTop>
                                            <ScrollToTop><li><Link className="dropdown-item" to="/" onClick={handleLogout}>Đăng Xuất</Link></li></ScrollToTop>
                                        </>
                                    ) : (
                                        <>
                                            <ScrollToTop><li><Link className="dropdown-item" to="/login">Đăng Nhập</Link></li></ScrollToTop>
                                            <ScrollToTop><li><Link className="dropdown-item" to="/register">Đăng Ký</Link></li></ScrollToTop>
                                            <ScrollToTop><li><Link className="dropdown-item" to="/forgot-password">Quên Mật Khẩu</Link></li></ScrollToTop>
                                        </>
                                    )}
                                </ul>
                            </li>

                            {/* <button className="button-partner btn btn-success d-table ms-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalForm"><i class="bi bi-people-fill"></i>Become our partner</button> */}


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-translate"></i>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">Việt Nam</Link></li>
                                    <li><Link className="dropdown-item" to="#">English</Link></li>
                                </ul>
                            </li>
                            <div className="ms-2">
                                <DarkModeToggle />
                            </div>
                        </ul>
                    </div>
                </div >
            </nav >
        </div>
    )
}

export default Nav;