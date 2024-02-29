import { useQuery } from "react-query";

import { getUser } from "../API";
export const useUser = () => {
	const { data, isLoading } = useQuery(["user"], () => getUser());
	return { user: data, loading: isLoading };
};
