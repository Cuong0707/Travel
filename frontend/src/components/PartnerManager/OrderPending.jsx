import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Dashboard from "./Dashboard";
import Toolbar from "@mui/material/Toolbar";
import { AuthContext } from "../../context/auth-context";
import { stat } from "fs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalOrderPending from "./Modal/ModalOrderPending";

const drawerWidth = 240;
export default function ListOrder() {

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
              Đơn Hàng Đợi Duyệt
            </div>
            <div className="row justify-content-center">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr className="table-info  text-center">
                    <th scope="col">#</th>
                    <th scope="col">Loại dịch vụ</th>
                    <th scope="col">Tên Khách Hàng</th>
                    <th scope="col">Tên Dịch Vụ</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Khách sạn</td>
                    <td></td>
                    <td>Muong Thanh Holiday Muine Hotel</td>
                    <td>54 Huynh Thuc Khang, Mũi Né, Việt Nam</td>
                    <td>Visa</td>
                    <td>2/9/2023</td>
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        <i className="bi bi-gear"></i>
                        <ModalOrderPending />
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