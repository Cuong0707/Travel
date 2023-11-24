import React from "react";
import '../style/Search.scss';
import { Link, useSearchParams } from "react-router-dom";
import { EyeFill, GeoAltFill } from "react-bootstrap-icons";

const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.warn(searchParams.get('city'))
    const city = searchParams.get('city')

    return (
        <div className="container">
            <div className="container-search">
                <p className="fs-3">Kết quả hiển thị: {city}</p>
                <div className="card-MainHotel">
                    <div className="card mb-3 border-0">
                        <div className="row g-0">
                            <div className="col-md-3 img-MainHotel">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/456936518.jpg?k=14ffdb04c291754bc446aba9faa968424f66967324f7866fbfd094aa78316e60&o=&hp=1" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body row">
                                    <h5 className="card-title fw-bold col-10">TTC Hotel Phan Thiet </h5>
                                    <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 207</p>
                                    <p className="card-text fw-bold"><GeoAltFill /> Nguyễn Tất Thành, Thành phố Phan Thiết, Việt Nam</p>
                                    <p className="card-text">
                                        <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">Hotel</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">4 sao</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-MainHotel">
                    <div className="card mb-3 border-0">
                        <div className="row g-0">
                            <div className="col-md-3 img-MainHotel">
                                <img src="https://lh3.googleusercontent.com/p/AF1QipMBKFU-m65L4Hjt0z63TiS7FADL6OLzczelYeMk=s1360-w1360-h1020" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body row">
                                    <h5 className="card-title fw-bold col-10">Hải sản Phú Quý - Phan Thiết </h5>
                                    <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 127</p>
                                    <p className="card-text fw-bold"><GeoAltFill /> 31 Phạm Văn Đồng, Bình Hưng, Thành phố Phan Thiết, Bình Thuận</p>
                                    <p className="card-text">
                                        <span className="badge bg-warning text-dark text-secondary ms-2">Restaurant</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">4 sao</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-MainHotel">
                    <div className="card mb-3 border-0">
                        <div className="row g-0">
                            <div className="col-md-3 img-MainHotel">
                                <img src="https://lh3.googleusercontent.com/p/AF1QipN5SWX66zEnGIbouJ-4REYZxPE0J-MFImN5HWrE=s1360-w1360-h1020" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body row">
                                    <h5 className="card-title fw-bold col-10">Nhà hàng Mỹ Duyên Phan Thiết </h5>
                                    <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 417</p>
                                    <p className="card-text fw-bold"><GeoAltFill /> 138 Nguyễn Thông, Phú Hài, Thành phố Phan Thiết, Bình Thuận, Việt Nam</p>
                                    <p className="card-text">
                                        <span className="badge bg-warning text-dark text-secondary ms-2">Restaurant</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">3 sao</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-MainHotel">
                    <div className="card mb-3 border-0">
                        <div className="row g-0">
                            <div className="col-md-3 img-MainHotel">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/11/f5/1e/le-viva-mui-ne-resort.jpg?w=700&h=-1&s=1" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body row">
                                    <h5 className="card-title fw-bold col-10">Khu nghỉ dưỡng Le Viva Muine (Le Viva Muine Resort) </h5>
                                    <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 807</p>
                                    <p className="card-text fw-bold"><GeoAltFill /> 32 Huỳnh Thúc Kháng , Phường Hàm Tiến, Mũi Né, Phan Thiết, Việt Nam</p>
                                    <p className="card-text">
                                        <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">Hotel</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">4 sao</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-MainHotel">
                    <div className="card mb-3 border-0">
                        <div className="row g-0">
                            <div className="col-md-3 img-MainHotel">
                                <img src="https://lh3.googleusercontent.com/p/AF1QipPzB_GqADC9ZdPpqWcR3S2VQ7PicgwEEBZKL3Ew=s1360-w1360-h1020" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body row">
                                    <h5 className="card-title fw-bold col-10">Lâu đài rượu vang RD Phan Thiết - Mũi Né </h5>
                                    <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 54</p>
                                    <p className="card-text fw-bold"><GeoAltFill /> Đường Võ Nguyên Giáp, Phú Hài, Thành phố Phan Thiết, Bình Thuận</p>
                                    <p className="card-text">
                                        <span className="badge bg-warning text-dark text-secondary ms-2">Vist Location</span>
                                        <span className="badge bg-warning text-dark text-secondary ms-2">5 sao</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search