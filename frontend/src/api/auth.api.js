import http from "../utils/http";

const login = async function (body) {
    return http.post("/auth/login", body)
}

const register = async function (body) {
    return http.post("/auth/register", body)
}

const authApi = { login, register }
export default authApi