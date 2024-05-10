import { axios } from "../hooks";

export const getCoinMarketCup = async () => {
	try {
		const response = await axios.get("/prices");
		return response.data;
	} catch (error) {
		return error;
	}
};
