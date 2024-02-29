import { FastifyInstance } from "fastify";

export class liqPayController {
  constructor(
    private readonly fastify: FastifyInstance,
    private readonly service: liqPayService,
  ) {}
