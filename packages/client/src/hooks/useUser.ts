import { useState } from "react";
import { useQuery } from "react-query";

import { getUser } from "../API";
import { User } from "../interfaces";
export const useUser = () => {
	const [_user, setUser] = useState<User | null>(null);

	const userQuery = useQuery(["user"], () => getUser(), {
		onSuccess: (data) => {
			setUser(data);
		},
		onError: () => {
			setUser(null);
		},
		enabled: !!sessionStorage.getItem("token"),
		staleTime: 1000 * 60 * 5,
	});
	return {
		getUser: userQuery.refetch,
		user: userQuery.data,
		isLoading: userQuery.isLoading,
		isError: userQuery.isError,
	};
};
