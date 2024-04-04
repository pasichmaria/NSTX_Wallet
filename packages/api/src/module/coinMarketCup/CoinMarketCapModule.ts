import {CoinMarketCapService} from "./CoinMarketCapService";
import {FastifyInstance} from "fastify";
import {CoinMarketCapController} from "./CoinMarketCapController";
import {PrismaClient} from "../../prisma-client";

interface Init {
    fastify: FastifyInstance;
    prisma: PrismaClient;
}
export  class CoinMarketCapModule {
    public constructor(public readonly service: CoinMarketCapService) {}
    public static async init(props: Init) {
        const service = new CoinMarketCapService(props.prisma)
        const controller = new CoinMarketCapController(props.fastify, service);
        controller.init();
    }
}
