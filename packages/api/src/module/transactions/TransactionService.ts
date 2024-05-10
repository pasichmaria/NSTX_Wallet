import {
  Currency,
  PrismaClient,
  Transaction,
  TransactionStatus,
  TransactionType
} from "@prisma/client";

interface CreateTransaction {
  amount: number;
  currency: Currency;
  userId: string;
  status: TransactionStatus;
  type: TransactionType;
}
export class TransactionService {
  constructor(private readonly prisma: PrismaClient) {}

  public async createTransaction(
    createTransactionProperties: CreateTransaction
  ): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: createTransactionProperties
    });
  }

  public async getAll(getAllProperties: {
    userId: string;
    currencies: Currency[];
    statuses: TransactionStatus[];
    types: TransactionType[];
  }): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: {
        userId: getAllProperties.userId,
        currency: {
          in: getAllProperties.currencies
        },
        status: {
          in: getAllProperties.statuses
        },
        type: {
          in: getAllProperties.types
        }
      }
    });
  }

  public async getById(id: string): Promise<Transaction | null> {
    const transaction = await this.prisma.transaction.findFirst({
      where: {
        id: id
      }
    });
    if (!transaction) {
      return null;
    }
    return transaction;
  }
}
