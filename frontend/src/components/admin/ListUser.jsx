import React, { useState, useEffect, useContext } from "react";
import { Box, Modal } from "@mui/material";
import Dashboard from "./Dashboard";
import Toolbar from "@mui/material/Toolbar";
import { AuthContext } from "../../context/auth-context";
import { stat } from "fs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalUser from "./Modal/ModalUser";

const drawerWidth = 240;
export default function ListUser() {
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
    <div>
      <div className="container mt-4">
        <ToastContainer />
        <Box sx={{ display: "flex" }}>
          <Dashboard />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              marginTop: "30px",
            }}
          >
            <Toolbar />
            <div className="h2 mt-3 fw-bold text-uppercase">
              Danh Sách Người Dùng
            </div>
            <div className="row justify-content-center">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr className="table-info  text-center">
                    <th scope="col">#</th>
                    <th scope="col">Họ Và Tên</th>
                    <th scope="col">Hình Ảnh</th>
                    <th scope="col">Số Điện Thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Ngày Sinh</th>
                    <th scope="col">Địa Chỉ</th>
                    <th scope="col">Ngày Đăng Ký</th>
                    <th scope="col">Lần Cuối Đăng Nhập</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Vai Trò</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Nguyễn Bạch Hồng Ân</td>
                    <td>U001.jpg</td>
                    <td>0433637710</td>
                    <td>hongan@gmail.com</td>
                    <td>2001-12-09 00:00:00</td>
                    <td>Quận Gò Vấp</td>
                    <td>2023-04-28 00:00:00</td>
                    <td>2023-11-30 22:36:16</td>
                    <td>active</td>
                    <td>user</td>
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        <i className="bi bi-gear"></i>
                      </button>
                      <ModalUser />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Nguyễn Bạch Hồng Ân</td>
                    <td>U001.jpg</td>
                    <td>0433637710</td>
                    <td>hongan@gmail.com</td>
                    <td>2001-12-09 00:00:00</td>
                    <td>Quận Gò Vấp</td>
                    <td>2023-04-28 00:00:00</td>
                    <td>2023-11-30 22:36:16</td>
                    <td>active</td>
                    <td>user</td>
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        <i className="bi bi-gear"></i>
                        <ModalUser />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
