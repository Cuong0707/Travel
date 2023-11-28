import React from "react";
import '../../style/Hotel/HotelRoom.scss'
import { People } from 'react-bootstrap-icons';
import { InboxFill } from 'react-bootstrap-icons';
import { PatchQuestionFill } from 'react-bootstrap-icons';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import { Link } from "react-router-dom";



const HotelRoom = () => {
    const tooltip = (
        <Tooltip id="tooltip">
            <strong>Không </strong> hủy phòng được đâu bồ ơi.
        </Tooltip>
    );
    return (
        <div className="Card-HotelRoom">
            <div className="fw-bold ms-3 h4 title-room">Những phòng có tại khách sạn</div>
            <div className="card border border-0 mt-3">
                <h4 className="fw-bold ms-3 mt-2">Phòng Tiêu Chuẩn</h4>
                <div className="row">
                    <div className="col-4 ms-3">
                        <img src="https://maichautourist.com/assets/uploads/nha-san-nhin-tu-ben-ngoai.JPG" alt="" />
                        <hr style={{ width: "300px" }} />
                        <div className="mt-2"><span className="badge rounded-pill bg-success">Check-in: 14:00 - Check-out: 12:00</span></div>
                        <div className="mt-2"><span className="badge rounded-pill bg-success">Giường: 1m6</span></div>
                        <div className="mt-2">
                            <OverlayTrigger placement="top" overlay={tooltip}>
                                <button className="btn btn-light text-primary btn-sm" bsStyle="default"><PatchQuestionFill /> Chính sách hủy phòng</button>
                            </OverlayTrigger>
                        </div>

                    </div>
                    <div className="col-7">
                        <div className="h6 fw-bold"> Phòng Tiêu Chuẩn</div>
                        <div className="row">
                            <div className="col-3 fw-bold"><People /> 2 Khách</div>
                            <div className="col-3 fw-bold"><InboxFill /> Giường: DBL</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6 text-secondary fw-bold">
                                <p>Không Bao Gồm Ăn Sáng</p>
                                <p>Không Hoàn Tiền</p>
                                <p>Không Đổi Lịch</p>
                                <p>Không Hút Thuốc</p>
                            </div>
                            <div className="col-6 text-success fw-bold">
                                <p>Lễ tân 24h</p>
                                <p>Dịch vụ giặt ủi</p>
                                <p>Máy ATM/Ngân hàng</p>
                                <p>Nhà hàng</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="card-text fw-bold text-danger h5 text-end">700.000 VNĐ</p>
                            <div className="text-end">
                                <Link to="/order" ><button className="btn btn-danger fw-bold col-2 blink-button">Đặt Phòng</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card border border-0 mt-3">
                <h4 className="fw-bold ms-3 mt-2">Phòng VIP</h4>
                <div className="row">
                    <div className="col-4 ms-3">
                        <img src="https://maichautourist.com/assets/uploads/nha-san-nhin-tu-ben-ngoai.JPG" alt="" />
                        <hr style={{ width: "300px" }} />
                        <div className="mt-2"><span className="badge rounded-pill bg-success">Check-in: 14:00 - Check-out: 12:00</span></div>
                        <div className="mt-2"><span className="badge rounded-pill bg-success">Giường: 1m6</span></div>
                        <div className="mt-2">
                            <OverlayTrigger placement="top" overlay={tooltip}>
                                <button className="btn btn-light text-primary btn-sm" bsStyle="default"><PatchQuestionFill /> Chính sách hủy phòng</button>
                            </OverlayTrigger>
                        </div>

                    </div>
                    <div className="col-7">
                        <div className="h6 fw-bold"> Phòng VIP</div>
                        <div className="row">
                            <div className="col-3 fw-bold"><People /> 2 Khách</div>
                            <div className="col-3 fw-bold"><InboxFill /> Giường: DBL</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6 text-secondary fw-bold">
                                <p>Không Bao Gồm Ăn Sáng</p>
                                <p>Không Hoàn Tiền</p>
                                <p>Không Đổi Lịch</p>
                                <p>Không Hút Thuốc</p>
                            </div>
                            <div className="col-6 text-success fw-bold">
                                <p>Lễ tân 24h</p>
                                <p>Dịch vụ giặt ủi</p>
                                <p>Máy ATM/Ngân hàng</p>
                                <p>Nhà hàng</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="card-text fw-bold text-danger h5 text-end">900.000 VNĐ</p>
                            <div className="text-end">
                                <button className="btn btn-danger fw-bold col-2 blink-button">Đặt Phòng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelRoom