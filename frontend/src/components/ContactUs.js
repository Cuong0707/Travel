import React from "react";

class ContactUs extends React.Component {
    render() {
        return (
            <>
                <section className="mb-4 m-auto card border-3 col-8">
                    <h2 className="fw-bold bg-success text-center text-white">Liên Hệ Với Chúng Tôi</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Bạn có câu hỏi nào không? Xin vui
                        lòng liên hệ trực tiếp với chúng tôi. Chúng tôi sẽ quay lại với bạn trong vòng
                        vài giờ để giúp bạn.</p>
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">

                                    <div className="col-md-5 ms-3">
                                        <div className="md-form mb-3">
                                            <label for="name" className="">Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="md-form mb-3">
                                            <label for="email" className="">Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" />
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-10 ms-3">
                                        <div className="md-form mb-3">
                                            <label for="subject" className="">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-md-10 ms-3">

                                        <div className="md-form">
                                            <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>

                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div className="text-center text-md-left mt-3">
                                <a className="btn btn-success btn-lg" onclick="document.getElementById('contact-form').submit();">Gửi</a>
                            </div>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center">
                            <div className="list-unstyled mb-0">
                                <p><i className="bi bi-geo-alt-fill h1 mt-4"></i>
                                    <p>San Francisco, CA 94126, USA</p>
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

                </section>
            </>
        )
    }
}
export default ContactUs;