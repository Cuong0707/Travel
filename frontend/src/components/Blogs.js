import React from "react";
import '../style/style.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

class Blogs extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <h2 className="destination-title">Blogs</h2>
                <div className="destination-wrapper">

                    {/* <div className="destination-list" id="destination-list">
                        <div className="card">
                            <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2021/09/bai-viet-hay-nhat-2.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">Kinh Nghiệm Đi Du Lịch Phú Quốc A-Z</h6>
                                <p className="card-text">Chia sẽ</p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <a href="https://hellodulich.com/kinh-nghiem-du-lich-phu-quoc-20/" class="btn btn-primary">Chi Tiết</a>
                            </div>
                        </div>

                        <div className="card" >
                            <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2021/09/cong-vien-nuoc-hon-thom-phu-quoc-1.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">Review Công Viên Nước Hòn Thơm Phú Quốc</h6>
                                <p className="card-text">Chia sẽ</p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <a href="https://hellodulich.com/review-cong-vien-nuoc-hon-thom-phu-quoc-20/" class="btn btn-primary">Chi Tiết</a>
                            </div>
                        </div>

                        <div className="card" >
                            <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/12/nen-an-gi-o-hue.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">Nên ăn gì ở Huế đây? Top 10 món ăn đậm xứ Kinh Thành</h6>
                                <p className="card-text">Ẩm Thực </p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <a href="https://hellodulich.com/nen-an-gi-o-hue/" class="btn btn-primary">Chi Tiết</a>
                            </div>
                        </div>

                        <div className="card" >
                            <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/11/quan-hai-san-o-duong-dong-phu-quoc.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">Top 10 quán hải sản ở Phú Quốc nhất định phải thử</h6>
                                <p className="card-text">Ẩm Thực</p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <a href="#" class="btn btn-primary">Chi Tiết</a>
                            </div>
                        </div>

                        <div className="card" >
                            <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/12/vuon-anh-sang-lumiere-da-lat.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">Vườn ánh sáng Lumiere Đà Lạt nơi không gian “Hư Ảo”</h6>
                                <p className="card-text">Check-in</p>
                                <div className="destination-list-content-rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <a href="https://hellodulich.com/vuon-anh-sang-lumiere-da-lat/" class="btn btn-primary">Chi Tiết</a>
                            </div>
                        </div>
                    </div> */}
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={5}
                        autoplay={{ delay: 2500 }}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/11/doi-cat-phuong-mai-quy-nhon-300x200.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">Đồi cát Phương Mai Quy Nhơn – “Tiểu sa mạc”</h6>
                                    <p className="card-text">Chia sẽ</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <Link to="https://hellodulich.com/doi-cat-phuong-mai-quy-nhon/" class="btn btn-primary">Chi Tiết</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2021/09/bai-viet-hay-nhat-2.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">Kinh Nghiệm Đi Du Lịch Phú Quốc A-Z</h6>
                                    <p className="card-text">Chia sẽ</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <a href="https://hellodulich.com/kinh-nghiem-du-lich-phu-quoc-20/" class="btn btn-primary">Chi Tiết</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2021/09/cong-vien-nuoc-hon-thom-phu-quoc-1.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">Review Công Viên Nước Hòn Thơm Phú Quốc</h6>
                                    <p className="card-text">Chia sẽ</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <a href="https://hellodulich.com/review-cong-vien-nuoc-hon-thom-phu-quoc-20/" class="btn btn-primary">Chi Tiết</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/12/nen-an-gi-o-hue.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">Top 10 món ăn đậm xứ Kinh Thành</h6>
                                    <p className="card-text">Ẩm Thực </p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <a href="https://hellodulich.com/nen-an-gi-o-hue/" class="btn btn-primary">Chi Tiết</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card" >
                                <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/11/quan-hai-san-o-duong-dong-phu-quoc.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">Top 10 quán hải sản Phú Quốc nhất định phải thử</h6>
                                    <p className="card-text">Ẩm Thực</p>
                                    <div className="destination-list-content-rating">
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
                                <img className="card-img-top" src="https://hellodulich.com/wp-content/uploads/2022/12/vuon-anh-sang-lumiere-da-lat.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">Vườn ánh sáng Lumiere nơi không gian “Hư Ảo”</h6>
                                    <p className="card-text">Check-in</p>
                                    <div className="destination-list-content-rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <a href="https://hellodulich.com/vuon-anh-sang-lumiere-da-lat/" class="btn btn-primary">Chi Tiết</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        )
    }
}

export default Blogs;