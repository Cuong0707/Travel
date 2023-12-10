import React, { useState } from "react";

const ModalRoomManager = () => {
    //Chosse Avatar
    const [avatar, setAvatar] = useState(
        "data:image/jpeg;base64,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"
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
                                                style={{ width: "200px", cursor: "pointer", }}
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
                                                        <label htmlFor="type_of_room" className="form-label">
                                                            Loại phòng
                                                        </label>
                                                        <input type="text" id="type_of_room" name="type_of_room" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="area_of_room" className="form-label">
                                                            Kích thước phòng
                                                        </label>
                                                        <input type="number" id="area_of_room" name="area_of_room" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="type_of_bed" className="form-label">
                                                            Kiểu giường
                                                        </label>
                                                        <input type="number" id="type_of_bed" name="type_of_bed" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="size_of_bed" className="form-label">
                                                            Kích thước giường
                                                        </label>
                                                        <input type="text" id="size_of_bed" name="size_of_bed" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="amount_of_room" className="form-label">
                                                            Số lượng phòng
                                                        </label>
                                                        <input type="text" id="amount_of_room" name="amount_of_room" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="price_of_room" className="form-label">
                                                            Giá tiền
                                                        </label>
                                                        <input type="text" id="price_of_room" name="price_of_room" className="form-control" required
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

                    <div className="modal-footer">
                        <button className="btn btn-danger float-end" type="submit">
                            Xóa Phòng
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

export default ModalRoomManager;