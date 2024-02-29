import axioslib from "axios";
import { useNavigate } from "react-router-dom";
export const axios = axioslib.create({
	baseURL: "http://127.0.0.1:8000",
	withCredentials: true,
});

const handleUnauthorized = () => {
	const navigate = useNavigate();
	sessionStorage.removeItem("token");
	navigate("/login");
};

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			handleUnauthorized();
			console.log("unauthorized");
		}
		return Promise.reject(error);
	},
);

axios.interceptors.request.use(
	(config) => {
		const token = sessionStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		config.withCredentials = true;
		config.timeout = 1500;
		return config;
	},
	(error) => Promise.reject(error),
);
