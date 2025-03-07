import axios from "axios";

const api1 = axios.create({
    baseURL: import.meta.env.VITE_REACT_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api1;