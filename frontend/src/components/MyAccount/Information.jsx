import React, { useState, useEffect, useContext } from "react";
import MyAccount from "./MyAccount";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../../style/MyAccount/Info.scss'
import { AuthContext } from '../../context/auth-context'
import { stat } from "fs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAppContext from "../../hook/useAppContext";

const drawerWidth = 240;

export default function Information() {
    const authContext = useContext(AuthContext);
    const {profile} = useAppContext()
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        address: '',
        phone_number: '',
        role:  '',
        birthday:  '',
        registrationDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const updatedInfo = {
                'userID':profile.userID,
                'fullname':formData.fullname,
                'email': formData.email,
                'address': formData.address,
                'phone_number': formData.phone_number,
                'birthday': formData.birthday,
            };
            await authContext.updateUserInfo(updatedInfo);
            toast.success('Cập Nhật Thành Công', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }   catch (error) { 
            // alert('Failed to update user information:'+ error);
            toast.error('Vui Lòng Kiểm Tra Lại', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        if (profile) {
            setFormData({
                fullname: profile.fullname,
                email: profile.email,
                address: profile.address,
                phone_number: profile.phone_number,
                role: profile.role,
                birthday: profile.birthday,
                registrationDate: profile.registrationDate
            });
            // You might need to handle the 'birthday' value separately based on the date format in the localStorage
            // Example: setBirthday(parsedUserData.birthday);
        }
    }, []);

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
            <ToastContainer />

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
                                            <input type="text" className="form-control-plaintext" id="regisDay" value={formData.registrationDate} disabled />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="form-group row">
                                        <label htmlFor="lastLogin" className="col-7 col-form-label">Lần Cuối Đăng Nhập</label>
                                        <div className="col-5">
                                            <input type="text" className="form-control-plaintext" id="lastLogin" value="25/11/2023" disabled />
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
                                                    <label htmlFor="fullname" className="form-label">Họ và tên</label>
                                                    <input type="text" id="fullname" name="fullname" className="form-control" value={formData.fullname} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange} required disabled />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="address" className="form-label">Địa chỉ</label>
                                                    <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="birthday" className="form-label">Ngày sinh</label>
                                                    <input type="text" id="birthday" name="birthday" className="form-control" value={formData.birthday} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="phone_number" className="form-label">Số điện thoại</label>
                                                    <input type="number" id="phone_number" name="phone_number" className="form-control" value={formData.phone_number} onChange={handleInputChange} required />
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label htmlFor="phone_number" className="form-label">Vai Trò</label>
                                                    <input type="text" id="phone_number" name="phone_number" className="form-control" value={formData.role} onChange={handleInputChange} required disabled />
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