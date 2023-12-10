import http from "../utils/http";

const createPartner = (formData) => {
    return http.post("/partners", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const partnerApi = { createPartner }

export default partnerApi