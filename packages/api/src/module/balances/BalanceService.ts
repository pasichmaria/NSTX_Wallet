import { Balance, Currency, PrismaClient } from "@prisma/client";

export class BalanceService {
  constructor(private readonly prisma: PrismaClient) {}

  public async getAll(getAllProperties: {
    userId: string;
  }): Promise<Balance[]> {
    return this.prisma.balance.findMany({
      where: {
        userId: getAllProperties.userId,
      },
    });
  }

  public async create(createProperties: {
    userId: string;
    currency: Currency;
  }): Promise<Balance> {
    return this.prisma.balance.create({
      data: {
        userId: createProperties.userId,
        currency: createProperties.currency,
        value: 0,
      },
    });
  }

  public async transfer({
    senderId,
    receiverId,
    value,
    currency,
  }: {
    senderId: string;
    receiverId: string;
    value: number;
    currency: Currency;
  }): Promise<Balance> {
    const senderBalance = await this.prisma.balance.findFirst({
      where: {
        userId: senderId,
        currency: currency,
        value: {
          gte: value,
        },
      },
    });
    if (!senderBalance) {
      throw new Error("Sender balance not found");
    }
    const receiverBalance = await this.prisma.balance.findFirst({
      where: {
        userId: receiverId,
        currency: currency,
      },
    });
    if (!receiverBalance) {
      throw new Error("Receiver balance not found");
    }
    const newSenderBalance = senderBalance.value - value;
    const newReceiverBalance = receiverBalance.value + value;
    await this.prisma.balance.update({
      where: {
        id: senderBalance.id,
      },
      data: {
        value: newSenderBalance,
      },
    });
    return this.prisma.balance.update({
      where: {
        id: receiverBalance.id,
      },
      data: {
        value: newReceiverBalance,
      },
    });
  }

  public async getOne(getOneProperties: {
    id: string;
    userId: string;
  }): Promise<Balance | null> {
    return this.prisma.balance.findFirst({
      where: {
        id: getOneProperties.id,
        userId: getOneProperties.userId,
      },
    });
  }

  public async increase({
    userId,
    value,
    currency,
  }: {
    userId: string;
    value: number;
    currency: Currency;
  }): Promise<Balance> {
    const balance = await this.prisma.balance.findFirst({
      where: {
        currency: currency,
        userId: userId,
      },
    });
    if (!balance) {
      throw new Error("Balance not found");
    }
    const newBalance = balance.value + value;
    return this.prisma.balance.update({
      where: {
        id: balance.id,
      },
      data: {
        value: newBalance,
      },
    });
  }

  public async decrease({
    userId,
    value,
    currency,
  }: {
    userId: string;
    value: number;
    currency: Currency;
  }): Promise<Balance> {
    const balance = await this.prisma.balance.findFirst({
      where: {
        userId: userId,
        currency: currency,
        value: {
          gte: value,
        },
      },
    });
    if (!balance) {
      throw new Error("Balance not found");
    }
    const newBalance = balance.value - value;
    return this.prisma.balance.update({
      where: {
        id: balance.id,
      },
      data: {
        value: newBalance,
      },
    });
  }
}
