import { axios } from "../hooks";
import { User } from "../interfaces";

export const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<string> => {
	const response = await axios.post(
		"/login",
		{
			email: email,
			password: password,
		},
		{
			withCredentials: true,
		},
	);
	return response.data.accessToken;
};

export const logout = async (): Promise<void> => {
	const response = await axios.get("/logout", {
		withCredentials: true,
	});
	return response.data;
};

export const register = async (data: {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}): Promise<User> => {
	const response = await axios.post("/sign-up", data, {
		withCredentials: true,
	});
	return response.data;
};

export const getUser = async (): Promise<User> => {
	const response = await axios.get("/users/me", {
		withCredentials: true,
		headers: {
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	});
	return response.data;
};
