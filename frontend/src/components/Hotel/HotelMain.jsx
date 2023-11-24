import React from "react";
import '../../style/Hotel/MainHotel.scss'
import { GeoAltFill } from 'react-bootstrap-icons';
import { EyeFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const MainHotel = () => {
    return (
        <main className="col-9">
            <div className="card-MainHotel">
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-3 img-MainHotel">
                            <img src="https://ksvadl.com/sites/default/files/field/image/anh-62219550.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body row">
                                <h5 className="card-title fw-bold col-10">Hàm Rồng </h5>
                                <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 857</p>
                                <p className="card-text fw-bold"><GeoAltFill /> Thành phố Pleiku, tỉnh Gia Lai, Việt Nam</p>
                                <p className="card-text">
                                    <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">Hotel</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">2 sao</span>
                                </p>
                                <p className="card-text fw-bold text-danger h4 text-end">500.000 VNĐ</p>
                                <div className="text-end">
                                    <Link to="/HotelList/HamRong"><button className="btn btn-danger fw-bold col-2 blink-button">Chi Tiết</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-MainHotel">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 img-MainHotel">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/288120128.jpg?k=e1f2d1a02626ee8e29ebbb9383e1e9f73ddb0a29ca652f5894029d06280e8226&o=&hp=1" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body row">
                                <h5 className="card-title fw-bold col-10">Red River View </h5>
                                <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 408</p>
                                <p className="card-text fw-bold"><GeoAltFill /> 178 Lê Đại Hành, Kim Tân, Lào Cai</p>
                                <p className="card-text">
                                    <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">Hotel</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">3 sao</span>
                                </p>
                                <p className="card-text fw-bold text-danger h4 text-end">800.000 VNĐ</p>
                                <div className="text-end">
                                    <button className="btn btn-danger fw-bold col-2 blink-button">Chi Tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-MainHotel">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 img-MainHotel">
                            <img src="https://maichautourist.com/assets/uploads/nha-san-nhin-tu-ben-ngoai.JPG" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body row">
                                <h5 className="card-title fw-bold col-10">Nhà Sàn 3 8 Bản Lác </h5>
                                <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 756</p>
                                <p className="card-text fw-bold"><GeoAltFill /> 8 Bản Lác, Chiềng Châu, Mai Châu, Hòa Bình</p>
                                <p className="card-text">
                                    <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">Nhà Sàn</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">TC</span>
                                </p>
                                <p className="card-text fw-bold text-danger h4 text-end">800.000 VNĐ</p>
                                <div className="text-end">
                                    <button className="btn btn-danger fw-bold col-2 blink-button">Chi Tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-MainHotel">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 img-MainHotel">
                            <img src="https://maichautourist.com/assets/uploads/nha-san-nhin-tu-ben-ngoai.JPG" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body row">
                                <h5 className="card-title fw-bold col-10">Nhà Sàn 3 8 Bản Lác </h5>
                                <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> 756</p>
                                <p className="card-text fw-bold"><GeoAltFill /> 8 Bản Lác, Chiềng Châu, Mai Châu, Hòa Bình</p>
                                <p className="card-text">
                                    <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">Nhà Sàn</span>
                                    <span className="badge bg-warning text-dark text-secondary ms-2">TC</span>
                                </p>
                                <p className="card-text fw-bold text-danger h4 text-end">800.000 VNĐ</p>
                                <div className="text-end">
                                    <button className="btn btn-danger fw-bold col-2 blink-button">Chi Tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainHotel;