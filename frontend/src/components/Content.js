import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "#EEE5F9" }}>
                <div className="row">
                    <video autoPlay muted loop className="d-flex col-6" height={500}>
                        <source src="images/video-banner.mp4" type="video/mp4"></source>
                    </video>
                    <div className="d-flex col-6 " style={{ borderRadius: "50px", height: "230px", marginTop: "140px" }}>
                        <div className="mt-5">
                            <h3 className="title text-uppercase fw-bold">Về Chúng Tôi</h3>
                            <p className="text">Chúng tôi là một công ty du lịch hàng đầu, chuyên cung cấp trải nghiệm du lịch tuyệt
                                vời cho khách hàng. Với đội ngũ chuyên gia giàu kinh nghiệm và sự tận tâm, chúng tôi cam kết mang đến chuyến
                                du lịch thú vị và đáng nhớ cho bạn. Chúng tôi đảm bảo chất lượng và an toàn cho khách hàng thông qua việc liên
                                kết với các đối tác hàng đầu. Hãy để chúng tôi giúp bạn tạo ra những kỷ niệm đáng nhớ.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-5">
                        <div className="body">
                            <h3 className="title text-uppercase fw-bold">Kiến Tạo Cho Những Kỉ Niệm</h3>
                        </div>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;