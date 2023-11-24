import React from 'react';
import '../../style/Hotel/HotelImg.scss';

const HotelImg = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="../images/BaiTamSao.jpg" alt="LargeImage" className="main-image" />
                    </div>
                    <div className="col-lg-6">
                        <div className='small-image1'>
                            <img src="../images/CauVang.jpg" alt="SmallImage1" className="small-image" />
                            <img src="../images/CauVang.jpg" alt="SmallImage2" className="small-image" />
                        </div>
                        <div className='small-image2 mt-2'>
                            <img src="../images/CauVang.jpg" alt="SmallImage1" className="small-image" />
                            <img src="../images/CauVang.jpg" alt="SmallImage2" className="small-image" />
                        </div>
                        <div className='small-image3 mt-2'>
                            <img src="../images/CauVang.jpg" alt="SmallImage1" className="small-image" />
                            <img src="../images/CauVang.jpg" alt="SmallImage2" className="small-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelImg;