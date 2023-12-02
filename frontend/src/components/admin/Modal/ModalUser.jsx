import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/auth-context";

const ModalUser = () => {
    const authContext = useContext(AuthContext);
    const userString = localStorage.getItem("infoUser");
    const userObject = JSON.parse(userString);
    const user = userObject;
    const [formData, setFormData] = useState({
        user_id: "",
        password: "",
        token: "",
        fullname: "",
        avatar: "",
        phone_number: "",
        email: "",
        birthday: "",
        address: "",
        district_id: "",
        registration_date: "",
        last_login: "",
        status: "",
        role: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedInfo = {
                user_id: formData.user_id,
                password: formData.password,
                token: formData.token,
                fullname: formData.fullname,
                avatar: formData.avatar,
                phone_number: formData.phone_number,
                email: formData.email,
                birthday: formData.birthday,
                address: formData.address,
                district_id: formData.district_id,
                registration_date: formData.registration_date,
                last_login: formData.last_login,
                status: formData.status,
                role: formData.role,
            };
            await authContext.updateUserInfo(updatedInfo);
            toast.success("Cập Nhật Thành Công", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            // alert('Failed to update user information:'+ error);
            toast.error("Vui Lòng Kiểm Tra Lại", {
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
        const userData = localStorage.getItem("infoUser");
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setFormData({
                user_id: parsedUserData.user_id,
                password: parsedUserData.password,
                token: parsedUserData.token,
                fullname: parsedUserData.fullname,
                avatar: parsedUserData.avatar,
                phone_number: parsedUserData.phone_number,
                email: parsedUserData.email,
                birthday: parsedUserData.birthday,
                address: parsedUserData.address,
                district_id: parsedUserData.district_id,
                registration_date: parsedUserData.registration_date,
                last_login: parsedUserData.last_login,
                status: parsedUserData.status,
                role: parsedUserData.role,
            });
            // You might need to handle the 'birthday' value separately based on the date format in the localStorage
            // Example: setBirthday(parsedUserData.birthday);
        }
    }, []);

    //Chosse Avatar
    const [avatar, setAvatar] = useState(
        "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
    ); // Hình ảnh mặc định

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
    };
    return (
        <div className="modal" id="myModal">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-body mt-5">
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="ms-5">
                                        <input type="file" accept="image/*" onChange={handleAvatarChange}
                                            style={{ display: "none" }} id="fileInput" />
                                        <label htmlFor="fileInput">
                                            <img src={avatar} className="rounded-circle"
                                                style={{ width: "100px", cursor: "pointer", }}
                                                alt="Avatar"
                                                title="Click to choose file"
                                            />
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-group row">
                                            <label htmlFor="regisDay" className="col-7 col-form-label">Registration Date:</label>
                                            <div className="col-5">
                                                <input type="text" className="form-control-plaintext" id="regisDay" value={formData.registration_date} disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-group row">
                                            <label htmlFor="last_login" className="col-7 col-form-label">Last Login:</label>
                                            <div className="col-5">
                                                <input type="text" id="last_login" className="form-control-plaintext"
                                                    value={formData.last_login} disabled />
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
                                                        <label htmlFor="fullname" className="form-label">
                                                            Fullname
                                                        </label>
                                                        <input type="text" id="fullname" name="fullname" className="form-control"
                                                            value={formData.fullname} onChange={handleInputChange} required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="phone_number" className="form-label">
                                                            Phone Number
                                                        </label>
                                                        <input type="number" id="phone_number" name="phone_number" className="form-control"
                                                            value={formData.phone_number} onChange={handleInputChange} required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="email" className="form-label">
                                                            Email
                                                        </label>
                                                        <input type="email" id="email" name="email" className="form-control"
                                                            value={formData.email} onChange={handleInputChange} required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="birthday" className="form-label">
                                                            Birthday
                                                        </label>
                                                        <input type="date" id="birthday" name="birthday" className="form-control"
                                                            value={formData.birthday} onChange={handleInputChange} required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="address" className="form-label">
                                                            Address
                                                        </label>
                                                        <input type="text" id="address" name="address" className="form-control"
                                                            value={formData.address} onChange={handleInputChange} required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="district_id" className="form-label">
                                                            District ID
                                                        </label>
                                                        <input type="text" id="district_id" name="district_id" className="form-control"
                                                            value={formData.district_id} onChange={handleInputChange} required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="status" className="form-label">
                                                            Status
                                                        </label>
                                                        <input type="text" id="status" name="status" className="form-control"
                                                            value={formData.status} onChange={handleInputChange} required disabled
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="role" className="form-label">
                                                            Role
                                                        </label>
                                                        {/* <input
                                type="text"
                                id="role"
                                name="role"
                                className="form-control"
                                value={formData.role}
                                onChange={handleInputChange}
                                required
                                disabed
                              /> */}
                                                        <select className="form-control" id="role" name="role" value={formData.role} onChange={handleInputChange}>
                                                            <option>user</option>
                                                            <option>admin</option>
                                                            <option>partner</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-danger float-end" type="submit">
                            Cấm Tài Khoản
                        </button>
                        <button className="btn btn-primary float-end" type="submit">
                            Cập Nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUser;