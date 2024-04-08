import { axios } from "../hooks";

export const getCoinMarketCup = async () => {
	try {
		const response = await axios.get("/prices");
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
