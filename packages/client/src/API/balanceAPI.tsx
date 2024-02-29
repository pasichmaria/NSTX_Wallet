import { axios } from "../hooks";

export const getUserBalances = async ({ userId }: { userId: string }) => {
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
}: {
	userId: string;
	id: string;
}) => {
	const response = await axios.get(`/balances/${id}`, {
		params: {
			userId,
		},
	});
	return response.data;
};
