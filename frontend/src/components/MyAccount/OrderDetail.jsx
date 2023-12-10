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
          className="gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 mt-3">
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
                    </div>
  
                    <MDBCard className="shadow-0 border mb-2">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">type_of_room</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                              {" "}
                              amount_people
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                             amount_children
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">lengthOfStay</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">1.000.000 VNĐ</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">status</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-2"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                      </MDBCardBody>
                    </MDBCard>
  
                    
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Ngày lập hóa đơn: 30/11/2023
                      </p>
                    </div>
  
                  </MDBCardBody>
                  
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
  
    );
  }