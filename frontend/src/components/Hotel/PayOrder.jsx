import React from "react";
import { Link } from "react-router-dom";
import '../../style/Hotel/PayOrder.scss'

const PayOrder = () => {
    return (
        <div className="container-PayOrder">
            <div className="container ">
                <div className="row">
                    <div className="card border border-2 col-md-8">
                        <div className="h2 text-center">Thanh Toán Hóa Đơn</div>
                        <div className="row mt-2 h6">
                            <div className="h4 text-uppercase fw-bold">
                                <label className="text-primary">Thông Tin Khách Hàng:</label>
                            </div>
                            <label className="form-label col-md-4">Họ Tên: <span>Ngụy Miêu Thức</span></label>
                            <label className="form-label col-md-4">Email: <span>mieuthuc@gmail.com</span></label>
                            <label className="form-label col-md-4 mb-3">Số Điện Thoại: <span>0123456789</span></label>

                            <hr />
                            <div className="h4 text-uppercase fw-bold">
                                <label className="text-primary">Thông Tin Dịch Vụ:</label>
                            </div>
                            <label className="form-label col-md-6">Tên Khách Sạn: <span>La Vela Saigon Hotel</span></label>
                            <label className="form-label col-md-6">Địa Chỉ: <span>280 Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, TP. Hồ Chí Minh</span></label>
                            <label className="form-label col-md-4 mb-3">Số Lượng Phòng: <span>1</span></label>
                            <label className="form-label col-md-4 mb-3">Số Lượng Người: <span>3</span></label>
                            <label className="form-label col-md-4 mb-3">Số Lượng Trẻ Em: <span>0</span></label>
                            <label className="form-label col-md-4 mb-3">Check-In: <span>10/12/2023</span></label>
                            <label className="form-label col-md-4 mb-3">Check-Out: <span>11/12/2023</span></label>

                            <hr />
                            <label htmlFor="" className="form-label h4 col-md-5 text-primary">Phương Thức Thanh Toán:</label>
                            <div className="form-check col-md-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Thanh Toán Ngân Hàng
                                </label>
                            </div>
                            <div className="form-check col-md-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">

                                    Thanh Toán Tiền Mặt
                                </label>
                            </div>
                        </div>
                        <small className="text-end"><span className="text-danger">(*)</span> Vui Lòng Kiểm Tra Lại Thông Tin Trước Khi Thanh Toán</small>

                    </div>

                    <div className="ms-5 card border border-2 col-md-3 ">
                        <div className="h2 text-center">Tổng Hóa Đơn</div>
                        <div className="row mt-2">
                            <img src="images/DinhDocLap.jpg" alt="" className="w-100" />
                        </div>
                        <div className="row mt-2">
                            <p className="h5 col-md-6">Giá Ban Đầu:</p>
                            <label className="h5 col-md-6">3,000,000 VND</label>
                        </div>

                        <div className="row mt-2">
                            <p className="h5 col-md-6">Giá Ưu Đãi:</p>
                            <label className=" h5 col-md-6">2,500,000 VND</label>
                        </div>

                        <hr />
                        <div className="row mt-2">
                            <p className="fw-bold h5 col-md-6">Tổng Tiền:</p>
                            <label className="fw-bold h5 col-md-6 text-success">2,500,000 VND</label>
                        </div>
                        <div className="d-flex justify-content-md-end">
                            <div className="mt-2 mb-2">
                                <button className="btn btn-secondary fw-bold">Hủy Hóa Đơn</button>
                            </div>
                            <div className="ms-2 mt-2 mb-2">
                                <button className="btn btn-primary fw-bold">Thanh Toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayOrder;