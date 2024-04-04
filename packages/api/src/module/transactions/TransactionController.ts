import { TransactionService } from "./TransactionService";
import { FastifyInstance } from "fastify";
import { onRequestAuth } from "../../hooks/onRequestAuth";
import {
  Currency,
  TransactionStatus,
  TransactionType,
} from "../../prisma-client";

export class TransactionController {
  constructor(
    private readonly fastify: FastifyInstance,
    public readonly service: TransactionService
  ) {}

  init(): void {
    this.fastify.get<{
      Querystring: {
        currencies: Currency[];
        statuses: TransactionStatus[];
        types: TransactionType[];
      };
    }>("/transactions", { onRequest: onRequestAuth }, async (req, reply) => {
      const transactions = await this.service.getAll({
        userId: req.user.id,
        currencies: req.query.currencies,
        statuses: req.query.statuses,
        types: req.query.types,
      });
      return reply.send(transactions);
    });
    this.fastify.get<{
      Params: { id: string };
    }>(
      "/transactions/:id",
      { onRequest: onRequestAuth },
      async (req, reply) => {
        const transaction = await this.service.getById(req.params.id);
        if (!transaction) {
          return reply
            .status(400)
            .send({ success: false, message: "Transaction not found" });
        }
        return reply.send(transaction);
      }
    );
  }
}
