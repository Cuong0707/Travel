import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../style/Login.scss'
import { Link } from "react-router-dom";


function SignUp() {
    return (
        <div className='container-login'>
            <MDBContainer className="my-3 ">
                <MDBCard>
                    <MDBRow className='g-0'>
                        <MDBCol md='5 m-auto'>
                            <h1 className="fw-normal my-4 fw-bold text-center">Đăng Ký</h1>
                            <MDBCardBody className='d-flex flex-column'>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Họ Và Tên</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Tỉnh</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Quận/Huyện</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Xã</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>
                                        {/* <DropdownComponent /> */}
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Mật Khẩu</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Xác Nhận Mật Khẩu</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Đồng Ý Các Điều Khoản" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3 text-end" id="formGridCheckbox">
                                            <p className="pb-lg-2 fw-bold">Đã Có Tài Khoản ? <Link to="/login" style={{ color: '#393f81' }}> <u>Đăng Nhập</u></Link></p>
                                        </Form.Group>
                                    </Row>
                                </Form>
                                <div className='row'>
                                </div>
                                <button className="btn btn-success col-5 m-auto" type='submit'>Xác Nhận</button>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBCardImage src='images/images-signup.png' alt="login form" style={{ height: "600px", width: "650px" }} className="rounded-start" />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default SignUp;