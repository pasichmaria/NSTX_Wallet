import React, { useState, useEffect } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { SelectChangeEvent } from "@mui/material";
import { User, Transaction } from "../interfaces";

interface TransactionsPageLogicProps {
	user: User;
}

interface TransactionsPageLogicReturn {
	transactions: Transaction[] | undefined;
	searchTerm: string;
	handleSearch: (term: string) => void;
	filteredTransactions: Transaction[] | undefined;
	setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[] | undefined>>;
	sortBy: string;
	sortOrder: "asc" | "desc";
	handleSort: (column: string) => void;
	currencyFilter: string;
	handleCurrencyFilterChange: (event: SelectChangeEvent<string>) => void;
	typeFilter: string;
	handleTypeFilterChange: (event: SelectChangeEvent<string>) => void;
	page: number;
	rowsPerPage: number;
	handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
	handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TransactionsPageLogic = ({ user }: TransactionsPageLogicProps): TransactionsPageLogicReturn => {
	const { transactions } = useTransactions({ user });
	const [filteredTransactions, setFilteredTransactions] = useState<Transaction[] | undefined>(transactions);

	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [currencyFilter, setCurrencyFilter] = useState("All");
	const [typeFilter, setTypeFilter] = useState("All");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	useEffect(() => {
		setFilteredTransactions(transactions);
	}, [transactions, setFilteredTransactions]);

	const handleSearch = (term: string) => {
		const filtered = transactions?.filter((transaction: Transaction) =>
			transaction.type.toLowerCase().includes(term.toLowerCase())
		);
		setSearchTerm(term);
		setFilteredTransactions(filtered);
	};

	const handleSort = (column: string) => {
		const order = column === sortBy && sortOrder === "asc" ? "desc" : "asc";
		if (!filteredTransactions) return;
		const sorted = [...filteredTransactions].sort((a, b) => {
			if (column === "type") {
				return sortOrder === "asc"
					? a.type.localeCompare(b.type)
					: b.type.localeCompare(a.type);
			}
			if (column === "amount") {
				return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
			}
			return 0;
		});
		setSortBy(column);
		setSortOrder(order);
		setFilteredTransactions(sorted);
	};

	const handleCurrencyFilterChange = (event: SelectChangeEvent<string>) => {
		const value = event.target.value as string;
		setCurrencyFilter(value);
		filterTransactions(value, typeFilter);
	};

	const handleTypeFilterChange = (event: SelectChangeEvent<string>) => {
		const value = event.target.value as string;
		setTypeFilter(value);
		filterTransactions(currencyFilter, value);
	};

	const handleChangePage = (
		_event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const filterTransactions = (currency: string, type: string) => {
		let filtered = transactions;
		if (currency !== "All") {
			filtered = filtered?.filter(
				(transaction) => transaction.currency === currency
			);
		}
		if (type !== "All") {
			filtered = filtered?.filter((transaction) => transaction.type === type);
		}
		setFilteredTransactions(filtered);
		setPage(0);
	};

	return {
		transactions,
		searchTerm,
		handleSearch,
		filteredTransactions,
		setFilteredTransactions,
		sortBy,
		sortOrder,
		handleSort,
		currencyFilter,
		handleCurrencyFilterChange,
		typeFilter,
		handleTypeFilterChange,
		page,
		rowsPerPage,
		handleChangePage,
		handleChangeRowsPerPage,
	};
};
