import React from "react";
import '../style/style.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

class Top_Destination extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="destination-title">Địa Điểm Nổi Bật</h2>
                <div className="destination-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                        spaceBetween={40}
                        slidesPerView={5}
                        autoplay={{ delay: 2500 }}
                        navigation
                        // effect="coverflow"
                        // EffectFade pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img className="card-img-top" src="images/CauVang.jpg" alt="Card image cap" />
                                <Link className="destinations-list-top-favourite">
                                    <i className="ri-heart-3-line"></i>
                                </Link>
                                <span className="destinations-list-top-tag">Popular</span>
                                <div className="card-body">
                                    <h6 className="card-title">Bà Nà Hills, thành phố Đà Nẵng</h6>
                                    <p className="card-text">Miễn Phí</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <a href="#" class="btn btn-primary">Chi Tiết</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="images/Fansipan.jpg" alt="Card image cap" />
                                <a className="destinations-list-top-favourite">
                                    <i className="ri-heart-3-line"></i>
                                </a>
                                <span className="destinations-list-top-tag">Popular</span>
                                <div className="card-body">
                                    <h6 className="card-title">Fansipan, biên giới tỉnh Lào Cai và tỉnh Lai Châu</h6>
                                    <p className="card-text">100.000VNĐ/2 chiều</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <Link to="#" className="btn btn-primary">Chi Tiết</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="images/BaiTamSao.jpg" alt="Card image cap" />
                                <Link className="destinations-list-top-favourite">
                                    <i className="ri-heart-3-line"></i>
                                </Link>
                                <span className="destinations-list-top-tag">Popular</span>
                                <div className="card-body">
                                    <h6 className="card-title">Bãi Tắm Sao, Thành phố Phú Quốc</h6>
                                    <p className="card-text">Miễn Phí</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <Link to="#" className="btn btn-primary">Chi Tiết</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="images/ThacDatanla.jpg" alt="Card image cap" />
                                <Link className="destinations-list-top-favourite">
                                    <i className="ri-heart-3-line"></i>
                                </Link>
                                <div className="card-body">
                                    <h6 className="card-title">Thác Datanla, thành phố Đà Lạt</h6>
                                    <p className="card-text">Giá vé và giá khu vui chơi </p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <Link to="#" className="btn btn-primary">Chi Tiết</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="images/DinhDocLap.jpg" alt="Card image cap" />
                                <Link className="destinations-list-top-favourite">
                                    <i className="ri-heart-3-line"></i>
                                </Link>
                                <span className="destinations-list-top-tag">Popular</span>
                                <div className="card-body">
                                    <h6 className="card-title">Dinh Độc Lập, Thành phố Hồ Chí Minh</h6>
                                    <p className="card-text">40.000VNĐ/người</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <Link to="#" className="btn btn-primary">Chi Tiết</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="card">
                            <img className="card-img-top" src="images/CauVang.jpg" alt="Card image cap" />
                            <Link className="destinations-list-top-favourite">
                                <i className="ri-heart-3-line"></i>
                            </Link>
                            <span className="destinations-list-top-tag">Popular</span>
                            <div className="card-body">
                                <h6 className="card-title">Bà Nà Hills, thành phố Đà Nẵng</h6>
                                <p className="card-text">Miễn Phí</p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <Link to="#" class="btn btn-primary">Chi Tiết</Link>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="card">
                            <img className="card-img-top" src="images/CauVang.jpg" alt="Card image cap" />
                            <Link className="destinations-list-top-favourite">
                                <i className="ri-heart-3-line"></i>
                            </Link>
                            <span className="destinations-list-top-tag">Popular</span>
                            <div className="card-body">
                                <h6 className="card-title">Bà Nà Hills, thành phố Đà Nẵng</h6>
                                <p className="card-text">Miễn Phí</p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <Link to="#" class="btn btn-primary">Chi Tiết</Link>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img className="card-img-top" src="images/CauVang.jpg" alt="Card image cap" />
                                <Link className="destinations-list-top-favourite">
                                    <i className="ri-heart-3-line"></i>
                                </Link>
                                <span className="destinations-list-top-tag">Popular</span>
                                <div className="card-body">
                                    <h6 className="card-title">Bà Nà Hills, thành phố Đà Nẵng</h6>
                                    <p className="card-text">Miễn Phí</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <Link to="#" class="btn btn-primary">Chi Tiết</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        )
    }
}

export default Top_Destination;