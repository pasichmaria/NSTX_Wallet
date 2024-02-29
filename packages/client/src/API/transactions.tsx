import { axios } from "../hooks";

export const getTransactions = async ({ userId }: any) => {
	const response = await axios.get("/transactions", {
		params: {
			userId,
		},
	});
	return response.data;
};
