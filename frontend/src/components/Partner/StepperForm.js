import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import { MdMosque } from "react-icons/md";
import { MdPinDrop } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button } from "reactstrap";

import '../../style/stepper.scss'
import Step3 from "./Step3";

const ActionButtons = (props) => {
    const handleBack = () => {
        props.previousStep();
    };

    const handleNext = () => {
        props.nextStep();
    };

    const handleFinish = () => {
        props.lastStep();
    };

    return (

        <div>
            <Row>
                {props.currentStep > 1 && (
                    <Col>
                        <Button onClick={handleBack}>Back</Button>
                    </Col>
                )}
                <Col>
                    {props.currentStep < props.totalSteps && (
                        <button className="btn btn-success" onClick={handleNext}>Next</button>
                    )}
                    {props.currentStep === props.totalSteps && (
                        <Button className="btn btn-success" onClick={handleFinish}>Finish</Button>
                    )}
                </Col>
            </Row>
        </div>
    );
};

const One = (props) => {
    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo1((info1) => ({
            ...info1,
            [targetName]: targetValue
        }));
    };

    const validate = () => {
        if (!info1.name) setError("Name is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info1);
        }
    };

    return (
        <div className="row d-flex ms-2 me-2">
            <span style={{ color: "red" }}>{error}</span>
            <h4 className="text-center mb-3 h5 text-uppercase fw-bold">Thông Tin Đối Tác</h4>
            {/* <input className="col-5" type="text" name="name" placeholder="Họ Và Tên" onChange={onInputChanged} /> */}
            {/* <input className="col-5 ms-2" type="text" name="name" placeholder="Họ Và Tên" onChange={onInputChanged} required/> */}
            <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom01" className="form-label">Họ Và Tên</label>
                <input type="text" className="form-control" name="name" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">Tên Doanh Nghiệp</label>
                <input type="text" className="form-control"
                    id="validationCustom02" required
                    name="name" onChange={onInputChanged} />
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="email" className="form-control"
                        id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
                        name="name" onChange={onInputChanged} />
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom03" className="form-label">Dịch Vụ</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Chọn...</option>
                    <option>Khách Sạn</option>
                    <option>Nhà Hàng</option>
                    <option>Phương Tiện Di Chuyển</option>
                    <option>Địa Điểm Du Lịch</option>
                </select>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom05" className="form-label">Tax Code</label>
                <input type="number" className="form-control"
                    id="validationCustom05" required
                    name="name" onChange={onInputChanged} />
            </div>
            <div class="mb-3 col-md-6">
                <label for="formFile" class="form-label">Hình Ảnh Doanh Nghiệp</label>
                <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3 col-md-6">
                <label for="formFile" class="form-label">Giấy Phép Kinh Doanh</label>
                <input class="form-control" type="file" id="formFile" />
            </div>

            <br />
            <div className="d-flex justify-content-end mb-2 mt-3">
                <ActionButtons {...props} nextStep={validate} className="btn btn-primary" />
            </div>
        </div>
    );
};

const Two = (props) => {
    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo2((info2) => ({
            ...info2,
            [targetName]: targetValue
        }));
    };

    const validate2 = () => {
        if (!info2.age) setError("Age is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info2);
        }
    };

    return (
        <div className="row d-flex ms-2 me-2">
            <span style={{ color: "red" }}>{error}</span>
            <h4 className="text-center mb-3 h5 text-uppercase fw-bold">Thông Tin Doanh Nghiệp</h4>
            <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01" className="form-label">Tên Khách Sạn</label>
                <input type="text" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">Loại Khách Sạn</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Chọn...</option>
                    <option>Resort</option>
                    <option>Khách sạn thương mại</option>
                    <option>Nhà Sàn</option>
                    <option>Nhà Nghỉ Bình Dân</option>
                    <option>Căn hộ khách sạn</option>
                </select>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom03" className="form-label">Tiêu Chuẩn</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Chọn...</option>
                    <option>1 Sao</option>
                    <option>2 Sao</option>
                    <option>3 Sao</option>
                    <option>4 Sao</option>
                    <option>5 Sao</option>
                </select>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom04" className="form-label">Check In</label>
                <input type="time" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom04" className="form-label">Check Out</label>
                <input type="time" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom06" className="form-label">Bữa Sáng</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Chọn...</option>
                    <option>Tô Ly</option>
                    <option>Buffet</option>
                    <option>Không Bao Gồm</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom07" className="form-label">Phí Dịch Vụ</label>
                <input type="number" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom08" className="form-label">Chính Sách Cho Trẻ Em</label>
                <input type="text" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div class="mb-3 col-md-6">
                <label htmlFor="validationCustom09" class="form-label">Mô Tả</label>
                <input type="text" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>
            <div class="mb-3 col-md-6">
                <label htmlFor="validationCustom10" class="form-label">Chính Sách Và Điều Khoản</label>
                <input type="text" className="form-control" name="age" onChange={onInputChanged} id="validationCustom01" required />
            </div>

            <br />
            <div className="d-flex justify-content-end mb-2 mt-3">
                <ActionButtons {...props} nextStep={validate2} />
            </div>
        </div>
    );
};

const Three = (props) => {
    console.log("step3 receive user object");
    console.log(props.user);

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };

    return (
        <div className="row d-flex ms-2 me-2">
            <Step3 />
            <div className="d-flex justify-content-end mb-2 mt-3">
                <ActionButtons {...props} lastStep={handleLastStep} />
            </div>
        </div>
    );
};

const Four = (props) => {
    console.log("step3 receive user object");
    console.log(props.user);

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };

    return (
        <div className="row d-flex ms-2 me-2">
            <div class="thank-you-message">Cảm ơn bạn đã đăng ký trở thành đối tác của chúng tôi. Chúng tôi sẽ
                liên hệ đến bạn sớm nhất có thể
            </div>
            <div className="d-flex justify-content-end mb-2 mt-3">
                <ActionButtons {...props} lastStep={handleLastStep} />
            </div>
        </div>
    );
};

const Sample = () => {
    const [stepWizard, setStepWizard] = useState(null);
    const [user, setUser] = useState({});
    const [activeStep, setActiveStep] = useState(0);

    const assignStepWizard = (instance) => {
        setStepWizard(instance);
    };

    const assignUser = (val) => {
        console.log("parent receive user callback");
        console.log(val);
        setUser((user) => ({
            ...user,
            ...val
        }));
    };

    const handleStepChange = (e) => {
        console.log("step change");
        console.log(e);
        setActiveStep(e.activeStep - 1);
    };

    const handleComplete = () => {
        alert("Bạn Đã Đăng Ký Thành Công. Vui lòng đợi chúng tôi trong vòng 24h");
    };

    return (
        <>
            <div className="stepper pyro">
                <div className='air air1'></div>
                <div className='air air2'></div>
                <div className='air air3'></div>
                <div className='air air4'></div>
                <div className="before"></div>
                <div className="after"></div>
                <div className="homeStepper">
                    <h1 className="text-center fs-3 fw-bold text-uppercase text-white bouncing-text">Trở thành đối tác của chúng tôi</h1>

                    <div className="mt-3 m-auto card w-75">
                        <Stepper className="fs-4" activeStep={activeStep}>
                            <Step label="Thông Tin Đối Tác" children={<MdDescription />} />
                            <Step label="Thông Tin Doanh Nghiệp" children={<MdPinDrop />} />
                            <Step label="Thông Tin Các Dịch Vụ" children={<MdMosque />} />
                            <Step label="Kết Thúc" children={<MdMosque />} />
                        </Stepper>
                        {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
                        <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
                            <One userCallback={assignUser} />
                            <Two user={user} userCallback={assignUser} />
                            <Three user={user} completeCallback={handleComplete} />
                            <Four user={user} completeCallback={handleComplete} />
                        </StepWizard>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Sample;
