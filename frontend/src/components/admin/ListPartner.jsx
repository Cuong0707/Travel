import React, { useState, useEffect, useContext } from "react";
import { Box, Modal } from "@mui/material";
import Dashboard from "./Dashboard";
import Toolbar from "@mui/material/Toolbar";
import { AuthContext } from "../../context/auth-context";
import { stat } from "fs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPartner from './Modal/ModalPartner'
const drawerWidth = 240;
export default function ListPartner() {

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
              <table className="table table-hover table-bordered text-center">
                <thead>
                  <tr className="table-info  text-center">
                    <th scope="col">#</th>
                    <th scope="col">Partner ID</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Service ID</th>
                    <th scope="col">Tên Doanh Nghiệp</th>
                    <th scope="col">Tax Code</th>
                    <th scope="col">Website</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>PN01</td>
                    <td>U032</td>
                    <td>S01</td>
                    <td>Công Ty TNHH Thương Mại Và Dịch Vụ Du Lịch</td>
                    <td>123456789</td>
                    <td></td>
                    <td></td>
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        <i className="bi bi-gear"></i>
                      </button>
                      <ModalPartner />
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
