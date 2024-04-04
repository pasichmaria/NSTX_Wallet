import { axios } from "../hooks";

export const getCoinMarketCup = async () => {
	try {
		const response = await axios.get("/coin-market-cap");
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
