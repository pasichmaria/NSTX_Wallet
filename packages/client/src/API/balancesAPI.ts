import {axios} from "../hooks";
import {Balance} from "../interfaces";

export const getUserBalances = async ({
	userId,
}: { userId: string }): Promise<Balance[]> => {
	const response = await axios.get("/balances", {
		params: {
			userId,
		},
	});
	return response.data;
};

export const getUserBalance = async ({
	userId,
	id,
}: { userId: string; id: string }): Promise<Balance | null> => {
	const response = await axios.get(`/balances/${id}`, {
		params: {
			userId,
		},
	});
	return response.data;
};
