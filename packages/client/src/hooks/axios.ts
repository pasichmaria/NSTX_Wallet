export const axios = axioslib.create({
	baseURL: "http://127.0.0.1:8000",
	withCredentials: true,
});

axios.interceptors.response.use(
	(response) => response,
	(error) => {
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
		return config;
	},
	(error) => Promise.reject(error),
);
