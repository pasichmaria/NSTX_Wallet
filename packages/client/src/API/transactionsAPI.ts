import { axios } from "../hooks";
import { Transaction } from "../interfaces";

export const getTransactions = async ({
	userId,
}: {
	userId: string;
}): Promise<Transaction[]> => {
	const response = await axios.get("/transactions", {
		params: {
			userId,
		},
	});
	return response.data;
};
