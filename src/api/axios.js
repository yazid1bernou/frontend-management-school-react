import axios from "axios"

export default axiosClient = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL
})