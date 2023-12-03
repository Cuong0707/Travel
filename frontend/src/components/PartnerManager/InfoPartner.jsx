import React, { useState, useEffect, useContext } from "react";
import { Box, Modal } from "@mui/material";
import Dashboard from "./Dashboard";
import Toolbar from "@mui/material/Toolbar";
import { AuthContext } from "../../context/auth-context";
import { stat } from "fs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const drawerWidth = 240;
export default function ListUser() {

  //Chosse Avatar
  const [avatar, setAvatar] = useState(
    "https://bota.vn/wp-content/uploads/2018/11/tap-doan-khach-san-muong-thanh-IMG6909-1.gif"
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
                        <input type="text" className="form-control-plaintext" id="regisDay" disabled />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={""}>
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label htmlFor="nameCompany" className="form-label">Tên Doanh Nghiệp</label>
                            <input type="text" id="fullname" name="fullname" className="form-control" required />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-control" required />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="address" className="form-label">Địa chỉ</label>
                            <input type="text" id="address" name="address" className="form-control" required />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="taxCode" className="form-label">Tax Code</label>
                            <input type="number" id="number" name="number" className="form-control" required />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="phone_number" className="form-label">Số điện thoại</label>
                            <input type="number" id="phone_number" name="phone_number" className="form-control" required />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="website" className="form-label">Website</label>
                            <input type="text" id="website" name="website" className="form-control" required />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="business_license" className="form-label">Giấy Phép Kinh Doanh</label>
                            <input type="text" id="business_license" name="business_license" className="form-control" required />
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
    </div>
  );
}
