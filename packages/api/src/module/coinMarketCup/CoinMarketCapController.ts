import { CoinMarketCapService } from "./CoinMarketCapService";
import { FastifyInstance } from "fastify";

export class CoinMarketCapController {
	constructor(
		private readonly fastify: FastifyInstance,
		public readonly service: CoinMarketCapService,
	) {}
	init(): void {
		this.fastify.get("/coin-market-cap", async (_req, reply) => {
			const data = await this.service.getAll();
			return reply.send(data);
		});
	}
}
