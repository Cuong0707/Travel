import React from "react";
import '../../style/Contact.scss'

class ContactUs extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="mb-4 m-auto card border-3 col-8">
                    <h2 className="fw-bold bg-success text-center text-white">Liên Hệ Với Chúng Tôi</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Bạn có câu hỏi nào không? Xin vui
                        lòng liên hệ trực tiếp với chúng tôi. Chúng tôi sẽ quay lại với bạn trong vòng
                        vài giờ để giúp bạn.</p>
                    <div className="row">
                        <div className="col-md-9 mb-md-2 mb-3">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-5 ms-3">
                                        <div className="md-form mb-3">
                                            <label htmlFor="name" className="">Họ Và Tên</label>
                                            <input type="text" id="name" name="name" className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="md-form mb-3">
                                            <label htmlFor="email" className="">Địa Chỉ Email</label>
                                            <input type="email" id="email" name="email" className="form-control" />
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-10 ms-3">
                                        <div className="md-form mb-3">
                                            <label htmlFor="subject" className="">Số Điện Thoại</label>
                                            <input type="number" id="subject" name="subject" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-md-10 ms-3">

                                        <div className="md-form">
                                            <label htmlFor="message">Câu Hỏi Của Bạn</label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>

                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div className="col-10 text-md-end mt-2">
                                <button className="btn btn-secondary btn-lg" onclick="">Reset</button>
                                <button className="ms-2 btn btn-success btn-lg" onclick="">Gửi</button>
                            </div>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center">
                            <div className="list-unstyled">
                                <p><i className="bi bi-geo-alt-fill h1 mt-4"></i>
                                    <p>Quận 12, Thành Phố Hồ Chí Minh</p>
                                </p>

                                <p><i className="bi bi-telephone-fill h1 mt-4"></i>
                                    <p>+ 01 234 567 89</p>
                                </p>

                                <p><i className="bi bi-envelope-at-fill h1 mt-4"></i>
                                    <p>hotro@saigontrip.vn</p>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
export default ContactUs;