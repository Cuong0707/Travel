import http from "../utils/http";

const checkOut = (body) => {
    return http.post("/orders", body)
}

const orderApi = { checkOut }

export default orderApi