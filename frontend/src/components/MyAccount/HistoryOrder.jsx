import React, { useState } from "react";
import MyAccount from "./MyAccount";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const drawerWidth = 240;

export default function HistoryOrder() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <MyAccount />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: "30px" }}
                >
                    <Toolbar />
                    <div className="container mt-4">
                        <div className="row justify-content-md-center">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <label htmlFor="Location" className="h4">Các Dịch Vụ<span className="text-danger">*</span></label>
                                        <div className="form-check col-md-3 mt-2">
                                            <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Khách Sạn
                                            </label>
                                        </div>
                                        <div className="form-check col-md-3 mt-2">
                                            <input className="form-check-input" type="checkbox" id="defaultCheck2" disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck2">
                                                Nhà Hàng
                                            </label>
                                        </div>
                                        <div className="form-check col-md-3">
                                            <input className="form-check-input" type="checkbox" id="defaultCheck3" disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck3">
                                                Địa Điểm Tham Quan
                                            </label>
                                        </div>
                                        <div className="form-check col-md-3">
                                            <input className="form-check-input" type="checkbox" id="defaultCheck4" disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck4">
                                                Phương Tiện Di Chuyển
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mt-3 form-group row">
                                        <label htmlFor="time" className="h4 col-md-2">Thời Gian<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <input type="date" className="form-control" placeholder="Chọn" />
                                        </div>
                                        <div className="col-md-5">
                                            <input type="date" className="form-control" placeholder="Chọn" />
                                        </div>
                                    </div>

                                    <div className="mt-3 form-group row">
                                        <label htmlFor="province" className="h4 col-sm-2">Địa Điểm<span className="text-danger">*</span></label>
                                        <div className="col-sm-5">
                                            <select className="form-select" aria-label="Default select example">
                                                <option defaultValue>Tỉnh</option>
                                                <option value="1">Hồ Chí Minh</option>
                                                <option value="2">Hà Nội</option>
                                                <option value="3">Bình Thuận</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-select" aria-label="Default select example">
                                                <option defaultValue>Quận/Huyện</option>
                                                <option value="1">Hồ Chí Minh</option>
                                                <option value="2">Hà Nội</option>
                                                <option value="3">Bình Thuận</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-end mt-3">
                                        <button className="btn btn-secondary">Tạo Lại</button>
                                        <button className="ms-2 btn btn-primary">Xác Nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h2 mt-3 fw-bold text-uppercase">Lịch Sử Giao Dịch</div>
                        <div className="row justify-content-md-center">

                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr className="table-info text-uppercase fw-bold text-center">
                                        <th scope="col">#</th>
                                        <th scope="col">Loại Dịch Vụ</th>
                                        <th scope="col">Tên Dịch Vụ</th>
                                        <th scope="col">Địa Chỉ</th>
                                        <th scope="col">Giá Tiền</th>
                                        <th scope="col">Thời Gian</th>
                                        <th scope="col">Chi Tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Khách Sạn</td>
                                        <td>Muong Thanh Holiday Muine Hotel</td>
                                        <td>54 Huynh Thuc Khang, Mũi Né, Việt Nam</td>
                                        <td>1.000.000 VNĐ</td>
                                        <td>2/9/2023</td>
                                        <td className="text-center">
                                            <Link to="detail"><button className="btn text-info" onClick={handleShow}><ArrowForwardIcon /></button></Link>
                                            <Modal size="xl" show={show} onHide={handleClose} style={{ backgroundolor: "rgba(255, 255, 255, 0.5)" }}>
                                                <Outlet></Outlet>
                                            </Modal>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Khách Sạn</td>
                                        <td>Winsuites Saigon</td>
                                        <td>28 Le Lai, Quận 1, Hồ Chí Minh, Việt Nam</td>
                                        <td>800.000 VNĐ</td>
                                        <td>20/11/2023</td>
                                        <td className="text-center"><button className="btn text-info"><ArrowForwardIcon /></button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Khách Sạn</td>
                                        <td>The Hotel NicecyOpens in new window</td>
                                        <td>271 Lê Thánh Tôn, Quận 1, Hồ Chí Minh, Việt Nam</td>
                                        <td>1.200.000 VNĐ</td>
                                        <td>1/5/2023</td>
                                        <td className="text-center"><button className="btn text-info"><ArrowForwardIcon /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Box>
            </Box>

        </div>
    )
}