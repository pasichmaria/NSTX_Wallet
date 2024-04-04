import { axios } from "../hooks";
import { Balance } from "../interfaces";

export const getUserBalances = async ({
	userId,
}: {
	userId: string;
}): Promise<Balance[]> => {
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
}): Promise<Balance | null> => {
	const response = await axios.get(`/balances/${id}`, {
		params: {
			userId,
		},
	});
	return response.data;
};

export const transferBalance = async ({
	senderId,
	receiverId,
	value,
	currency,
}: {
	senderId: string;
	receiverId: string;
	value: number;
	currency: string;
}) => {
	const response = await axios.post("/balances/transfer", {
		senderId,
		receiverId,
		value,
		currency,
	});
	return response.data;
};
export const createBalance = async ({ currency }: { currency: string }) => {
	const response = await axios.post("/balances/create", {
		currency,
	});
	return response.data;
};
