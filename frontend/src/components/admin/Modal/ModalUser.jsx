import React, { useState } from "react";


const ModalUser = () => {
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
                                            <input type="text" className="form-control-plaintext" id="regisDay" disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-group row">
                                            <label htmlFor="last_login" className="col-7 col-form-label">Last Login:</label>
                                            <div className="col-5">
                                            <input type="text" id="last_login" className="form-control-plaintext" disabled />
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
                                                        <label htmlFor="fullname" className="form-label">
                                                            Fullname
                                                        </label>
                                                        <input type="text" id="fullname" name="fullname" className="form-control" required/>
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="phone_number" className="form-label">
                                                            Phone Number
                                                        </label>
                                                        <input type="number" id="phone_number" name="phone_number" className="form-control" required/>
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="email" className="form-label">
                                                            Email
                                                        </label>
                                                        <input type="email" id="email" name="email" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="birthday" className="form-label">
                                                            Birthday
                                                        </label>
                                                        <input type="date" id="birthday" name="birthday" className="form-control" required/>
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="address" className="form-label">
                                                            Address
                                                        </label>
                                                        <input type="text" id="address" name="address" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="district_id" className="form-label">
                                                            District ID
                                                        </label>
                                                        <input type="text" id="district_id" name="district_id" className="form-control" required
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="status" className="form-label">
                                                            Status
                                                        </label>
                                                        <input type="text" id="status" name="status" className="form-control" required disabled
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="role" className="form-label">
                                                            Role
                                                        </label>
                                                    
                                                        <select className="form-control" id="role" name="role">
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