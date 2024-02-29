import { PrismaClient, Balance, Currency } from "../../prisma-client";

export class BalanceService {
	constructor(private readonly prisma: PrismaClient) {}
	public async getAll(getAllProperties: { userId: string }): Promise<
		Balance[]
	> {
		return this.prisma.balance.findMany({
			where: {
				userId: getAllProperties.userId,
			},
		});
	}
	public async create({
		userId,
		currency,
		value,
	}: { userId: string; currency: Currency; value: number }): Promise<Balance> {
		return this.prisma.balance.create({
			data: {
				userId,
				currency,
				value,
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
		amount,
		currency,
	}: { userId: string; amount: number; currency: Currency }): Promise<Balance> {
		const balance = await this.prisma.balance.findFirst({
			where: {
				currency: currency,
				userId: userId,
			},
		});
		if (!balance) {
			throw new Error("Balance not found");
		}
		const newBalance = balance.value + amount;
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
		amount,
		currency,
	}: { userId: string; amount: number; currency: Currency }): Promise<Balance> {
		const balance = await this.prisma.balance.findFirst({
			where: {
				userId: userId,
				currency: currency,
				value: {
					gte: amount,
				},
			},
		});
		if (!balance) {
			throw new Error("Balance not found");
		}
		const newBalance = balance.value - amount;
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
