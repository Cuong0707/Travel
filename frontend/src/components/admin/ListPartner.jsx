import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Dashboard from "./Dashboard";
import Toolbar from "@mui/material/Toolbar";
import { AuthContext } from "../../context/auth-context";
import { stat } from "fs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPartner from "./Modal/ModalPartner";

const drawerWidth = 240;
export default function ListPartner() {
  const authContext = useContext(AuthContext);
  const userString = localStorage.getItem("infoPartner");
  const userObject = JSON.parse(userString);
  const user = userObject;
  const [formData, setFormData] = useState({
    partner_id: "",
    user_id: "",
    service_id: "",
    name_of_company: "",
    tax_code: "",
    avatar_of_company: "",
    business_lisense: "",
    website: "",
    email: "",
    status: "",
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
        partner_id: formData.partner_id,
        user_id: formData.user_id,
        service_id: formData.service_id,
        name_of_company: formData.name_of_company,
        tax_code: formData.tax_code,
        avatar_of_company: formData.avatar_of_company,
        business_lisense: formData.business_lisense,
        website: formData.website,
        email: formData.email,
        status: formData.status,
      };
      await authContext.updatePartnerInfo(updatedInfo);
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
    const partnerData = localStorage.getItem("infoPartner");
    if (partnerData) {
      const parsedPartnerData = JSON.parse(partnerData);
      setFormData({
        partner_id: parsedPartnerData.partner_id,
        user_id: parsedPartnerData.user_id,
        service_id: parsedPartnerData.service_id,
        name_of_company: parsedPartnerData.name_of_company,
        tax_code: parsedPartnerData.tax_code,
        avatar_of_company: parsedPartnerData.avatar_of_company,
        business_lisense: parsedPartnerData.business_lisense,
        website: parsedPartnerData.website,
        email: parsedPartnerData.email,
        status: parsedPartnerData.status,
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
              Danh Sách Đối Tác
            </div>
            <div className="row justify-content-center">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr className="table-info  text-center">
                    <th scope="col">#</th>
                    <th scope="col">Partner ID</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Service ID</th>
                    <th scope="col">Tên Doanh Nghiệp</th>
                    <th scope="col">Tax Code</th>
                    <th scope="col">Giấy Phép Kinh Doanh</th>
                    <th scope="col">Website</th>
                    <th scope="col">Email</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Chi Tiết</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>PN01</td>
                    <td>U032</td>
                    <td>S01</td>
                    <td>CÔNG TY TNHH THƯƠNG MẠI VÀ DU LỊCH HVD LAO CAI</td>
                    <td>5300726546</td>
                    <td>Có</td>
                    <td>http://redriverviewlaocai.com.vn</td>
                    <td>info@redriverviewlaocai.com.vn</td>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        <i className="bi bi-gear"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>PN02</td>
                    <td>U033</td>
                    <td>S01</td>
                    <td>CÔNG TY CỔ PHẦN DU LỊCH CAO SU HÀM RỒNG</td>
                    <td>5300233477</td>
                    <td>Có</td>
                    <td> </td>
                    <td>info@vietdiscovery.com</td>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        <i className="bi bi-gear"></i>
                        <ModalPartner />
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
