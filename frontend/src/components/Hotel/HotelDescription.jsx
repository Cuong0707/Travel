import React from "react";
import { GeoAltFill } from 'react-bootstrap-icons';

const HotelDescription = () => {
    return (
        <div className="row">
            <div className="card border-0 mb-2 col-4">
                <div className="card-body">
                    <h5 className="fw-bold">Giới Thiệu Cơ Sở</h5>
                    <p>
                        Khách sạn nằm ở trung tâm của Sapa, dưới chân núi Hàm Rồng và tiếp theo đến Nhà thờ đá cổ.
                        Nó được coi là một trong những vị trí tốt nhất trong thị trấn Sa Pa và đã trở thành
                        phổ biến với du khách từ những ngày đầu của Sapa du lịch
                    </p>
                </div>
            </div>

            <div className="card border-0 mb-2 col-4">
                <div className="card-body row">
                    <h5 className="fw-bold">Các Tiện Ích</h5>
                    <div className=" col-6">
                        <p>Bàn làm việc</p>
                        <p>Điều hòa</p>
                        <p>Phòng tắm vòi sen</p>
                        <p>TV</p>
                    </div>
                    <div className="col-6">
                        <p>Lễ tân 24h</p>
                        <p>Dịch vụ giặt ủi</p>
                        <p>Máy ATM/Ngân hàng</p>
                        <p>Nhà hàng</p>
                    </div>
                </div>
            </div>

            <div className="card border-0 mb-2 col-4">
                <div className="card-body">
                    <h5 className="fw-bold">Địa Chỉ</h5>
                    <p className="card-text fw-bold mt-2"><GeoAltFill /> Thành phố Pleiku, tỉnh Gia Lai, Việt Nam</p>
                </div>
            </div>
        </div>
    )
}

export default HotelDescription;