import axioslib from 'axios'
export const axios = axioslib.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: true,
});

axios.interceptors.request.use(
    (config) => {
        config.withCredentials = true
        return config

    },
    (error) => {
        return Promise.reject(error)
    }
)
