import { axios } from "../hooks";
export const login = async (values: any) => {
	const response = await axios.post(
		"/login",
		{
			email: values.email,
			password: values.password,
		},
		{
			withCredentials: true,
		},
	);
	return response.data.accessToken;
};

export const logout = async () => {
	const response = await axios.post("/logout", {
		withCredentials: true,
	});
	return response.data;
};

export const register = async (values: any) => {
	const response = await axios.post(
		"/sign-up",
		{
			email: values.email,
			password: values.password,
			firstName: values.firstName,
			lastName: values.lastName,
		},
		{
			withCredentials: true,
		},
	);
	return response.data;
};

export const getUser = async () => {
	const response = await axios.get("/users/me", {
		withCredentials: true,
		headers: {
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	});
	return response.data;
};
