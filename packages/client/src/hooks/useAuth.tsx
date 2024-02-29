import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { login, logout } from "../API";
import {AuthProps} from "../interfaces";


export const useAuth = ({ onSuccess, onError }: AuthProps) => {
	const navigate = useNavigate();
	const loginQuery = useMutation("user", async (data) => login(data), {
		onSuccess: async (data) => {
			if (onSuccess) {
				onSuccess(data);
			}
			sessionStorage.setItem("token", data);
			navigate("/");
		},
		onError: async (error) => {
			if (onError) {
				onError(error);
			}
		},
	});
	return {
		login: loginQuery.mutate,
	};
};
export const useLogout = ({  onError }: AuthProps) => {
	const navigate = useNavigate();
	const logoutQuery = useMutation("logout", async () => logout(), {
		onSuccess: async () => {
			sessionStorage.removeItem("token");
			navigate("/login");
		},
		onError: async (error) => {
			if (onError) {
				onError(error);
			}
		},
	});

	return {
		logout: logoutQuery.mutate,
	};
};
