import { PrismaClient } from "../../prisma-client";
import axios from "axios";

export class CoinMarketCapService {
	constructor(private readonly prisma: PrismaClient) {}
	public async getAll() {
		const response = await axios.get(
			"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
			{
				headers: {
					"X-CMC_PRO_API_KEY": "6f4ce433-b481-4c80-86ab-559e330d3a56",
				},
			},
		);
		return response.data;
	}
}
