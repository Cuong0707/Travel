import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

export default function OrderDetail() {
  return (
    <>
      <section
        className="gradient-custom "
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 mt-3"  >
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol lg="12">
              <MDBCard className="border border-0" style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-3 py-4">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    Cảm ơn vì đã sử dụng dịch vụ,{" "}
                    <span style={{ color: "#a8729a" }}>Anna</span>!
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Biên lai
                    </p>
                    <p className="small text-muted mb-0">
                      Phiếu thu: 1KAU9-84UIL
                    </p>
                  </div>

                  <MDBCard className="shadow-0 border mb-2">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="2">
                          <MDBCardImage
                            src="../images/BaiTamSao.jpg"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">Khách sạn</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">
                            {" "}
                            Muong Thanh Holiday Muine Hotel
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">
                            54 Huynh Thuc Khang, Mũi Né, Việt Nam
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">2/9/2023</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">1.000.000 VNĐ</p>
                        </MDBCol>
                      </MDBRow>
                      <hr
                        className="mb-2"
                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                      />
                    </MDBCardBody>
                  </MDBCard>

                  <div className="d-flex justify-content-between pt-1">
                    <p className="fw-bold mb-0">Chi tiết đặt hàng</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Tổng</span> 1.000.000VNĐ
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-1">
                    <p className="text-muted mb-0">Số hóa đơn : 788152</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Giảm giá</span> 0VNĐ
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Ngày lập hóa đơn: 30/11/2023
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 0%</span> 123
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Phiếu thu: 18KU-62IIK</p>
                  </div>
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 px-2 py-3"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Tổng số chi trả:{" "}
                    <span className="h2 mb-0 "> 1.000.000VNĐ</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>

  );
}
