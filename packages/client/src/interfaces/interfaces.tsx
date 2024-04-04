export interface User {
	id: string;
	email: string;
	firstName?: string;
	lastName?: string;
}

export interface Transaction {
	id: string;
	userId: string;
	status: string;
	type: string;
	amount: number;
	currency: string;
	createdAt: string;
	updatedAt: string;
}

export interface Balance {
	id: string;
	userId: string;
	value: number;
	currency: string;
}
