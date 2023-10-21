import React from "react";
import '../style/style.scss'

class Header extends React.Component {
    render() {
        return (
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
                        <div className="carousel-inner" style={{ height: "580px" }}>
                            <div className="carousel-item active">
                                <img src="images/banner1.png" className="d-block w-100" alt="..." style={{ height: "550px" }} />
                                {/* <video autoPlay controls className="d-block bg-success" height={550} >
                                    <source src="images/video-banner.mp4" type="video/mp4"></source>
                                </video> */}
                            </div>
                            <div className="carousel-item">
                                <img src="images/hero-bg-1.webp" className="d-block w-100" alt="..." style={{ height: "550px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.thuthuatphanmem.vn/uploads/2018/10/26/anh-dep-cau-rong-da-nang-viet-nam_055418962.jpg" className="d-block w-100" alt="..." style={{ height: "550px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://hinhanhonline.com/Images/Album/DulichVietNam/vinh-ha-long-01.jpg" className="d-block w-100" alt="..." style={{ height: "550px" }} />
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
        )
    }
}
export default Header;