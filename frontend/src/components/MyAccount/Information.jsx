import React, { useState } from "react";
import MyAccount from "./MyAccount";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../../style/MyAccount/Info.scss'

const drawerWidth = 240;

export default function Information() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        gender: 'male', // giới tính mặc định là nam
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý dữ liệu khi form được submit
        console.log(formData);
    };


    //Chosse Avatar
    const [avatar, setAvatar] = useState("https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"); // Hình ảnh mặc định

    const handleAvatarChange = (e) => {
        const file = e.target.files[0]; // Lấy file hình ảnh đầu tiên từ sự kiện onChange
        const reader = new FileReader(); // Tạo một đối tượng FileReader để đọc file

        reader.onload = () => {
            // Khi file đã được đọc xong, cập nhật state avatar với đường dẫn hình ảnh mới
            setAvatar(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file); // Đọc file dưới dạng URL Data
        }
    }
    //Thanh Status


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
                        <div className="row">
                            <div className="col-md-3">
                                <div className="ms-5">
                                    <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: "none" }} id="fileInput" />
                                    <label htmlFor="fileInput">
                                        <img
                                            src={avatar}
                                            className="rounded-circle"
                                            style={{ width: "150px", cursor: "pointer" }}
                                            alt="Avatar"
                                            title="Click to choose file"
                                        />
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <div className="form-group row">
                                        <label htmlFor="regisDay" className="col-7 col-form-label">Ngày Đăng Ký</label>
                                        <div className="col-5">
                                            <input type="text" readonly className="form-control-plaintext" id="regisDay" value="22/11/2023" disabled />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="form-group row">
                                        <label htmlFor="lastLogin" className="col-7 col-form-label">Lần Cuối Đăng Nhập</label>
                                        <div className="col-5">
                                            <input type="text" readonly className="form-control-plaintext" id="lastLogin" value="25/11/2023" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="fullName" className="form-label">Họ tên</label>
                                                    <input type="text" id="fullName" name="fullName" className="form-control" value={formData.fullName} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label className="form-label">Giới tính</label>
                                                    <div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" id="gender-male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
                                                            <label className="form-check-label" htmlFor="gender-male">Nam</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" id="gender-female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
                                                            <label className="form-check-label" htmlFor="gender-female">Nữ</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="address" className="form-label">Địa chỉ</label>
                                                    <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="birthday" className="form-label">Ngày sinh</label>
                                                    <input type="date" id="birthday" name="birthday" className="form-control" value={formData.address} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                                    <input type="number" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleInputChange} required />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary float-end" type="submit">
                                                Cập Nhật
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </div>
    )
}