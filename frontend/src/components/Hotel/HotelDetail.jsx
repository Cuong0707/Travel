import React, { useRef, useEffect } from "react";
import '../../style/Hotel/MainHotel.scss'
import '../../style/Main/style.scss'
import { GeoAltFill } from 'react-bootstrap-icons';
import NavHotel from './HotelNav';
import HotelCarousel from "./HotelImg";
import HotelDescription from './HotelDescription'
import HotelRoom from "./HotelRoom";
import Aos from "aos";
import 'aos/dist/aos.css';

const HotelDetail = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const scrollRef = useRef(null);

    const handleButtonClick = () => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className='container-hotel'>
            <NavHotel />

            <div className="container mt-3">
                <div className="row">
                    <div className="col-7">
                        <h3 className="card-title fw-bold">Hàm Rồng </h3>
                        <h5 className="card-title small mt-2">Hàm Rồng </h5>
                        <p className="card-text fw-bold mt-2"><GeoAltFill /> Thành phố Pleiku, tỉnh Gia Lai, Việt Nam</p>
                    </div>
                    <div className="col-5">
                        <p className="card-text fw-bold h6 text-end">Giá phòng mỗi đêm từ</p>
                        <p className="card-text fw-bold text-danger h4 text-end">500.000 VNĐ</p>
                        <div className="text-end">
                            <button className="btn btn-danger fw-bold col-5" onClick={handleButtonClick}>Chọn Phòng</button>
                        </div>
                    </div>
                </div>
                <div className="img-HotelDetail mt-3">
                    <HotelCarousel />
                </div>
                <div className="description mt-3" ref={scrollRef} data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <HotelDescription />
                </div>
                <div className="HotelRoom mt-1" data-aos="fade-right" data-aos-duration="3000">
                    <HotelRoom />
                </div>
            </div>
        </div>
    )
}

export default HotelDetail;