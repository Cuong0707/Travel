import e from "cors";
import React, { useState } from "react";

const ModalPartner = () => {
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
                    <div className="modal-header">
                        <h4 className="modal-title">Cập nhật thông tin</h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div class="modal-body">
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="ms-5">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleAvatarChange}
                                            style={{ display: "none" }}
                                            id="fileInput"
                                        />
                                        <label htmlFor="fileInput">
                                            <img
                                                src={avatar}
                                                className="rounded-circle"
                                                style={{
                                                    width: "100px",
                                                    cursor: "pointer",
                                                }}
                                                alt="Avatar"
                                                title="Click to choose file"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={""}>
                                                <div className="row">
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="partner_id"
                                                            className="form-label"
                                                        >
                                                            Partner ID
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="partner_id"
                                                            name="partner_id"
                                                            className="form-control"
                                                            required disabled
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="user_id"
                                                            className="form-label"
                                                        >
                                                            User ID
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="user_id"
                                                            name="user_id"
                                                            className="form-control"
                                                            required
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="service_id"
                                                            className="form-label"
                                                        >
                                                            Service ID
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="service_id"
                                                            name="service_id"
                                                            className="form-control"
                                                            required disabled
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="name_of_company"
                                                            className="form-label"
                                                        >
                                                            Name Company
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name_of_company"
                                                            name="name_of_company"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="tax_code"
                                                            className="form-label"
                                                        >
                                                            Tax Code
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="tax_code"
                                                            name="tax_code"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="business_lisence"
                                                            className="form-label"
                                                        >
                                                            Business Lisence
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="business_lisence"
                                                            name="business_lisence"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="website"
                                                            className="form-label"
                                                        >
                                                            Website
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="website"
                                                            name="website"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="email"
                                                            className="form-label"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label
                                                            htmlFor="status"
                                                            className="form-label"
                                                        >
                                                            Status
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="status"
                                                            name="status"
                                                            className="form-control"
                                                            required
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Cấm Hoạt Động
                        </button>
                        <button
                            className="btn btn-success float-end"
                            type="submit"
                        >
                            Chấp Nhận
                        </button>
                        <button
                            className="btn btn-primary float-end"
                            type="submit"
                        >
                            Cập Nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalPartner;