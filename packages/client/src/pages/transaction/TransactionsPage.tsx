import { useEffect } from "react";
import {
	Container,
	Grid,
	Paper,
	TextField,
	Select,
	MenuItem,
	FormControl,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	IconButton,
	TablePagination,
} from "@mui/material";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { TransactionsPageLogic } from "../../utils";
import { User } from "../../interfaces";

export const TransactionsPage = ({ user }: { user: User }) => {
	const {
		transactions,
		searchTerm,
		handleSearch,
		filteredTransactions,
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
		setFilteredTransactions,
	} = TransactionsPageLogic({ user });

	useEffect(() => {
		setFilteredTransactions(transactions)
	}, [transactions]);

	return (
		<Container sx={{ mt: 2 }}>
			<Grid container spacing={2} direction="row">
				<Grid item xs={12}>
					<TableContainer component={Paper} sx={{ padding: 2 }}>
						<TextField
							label="Search"
							value={searchTerm}
							onChange={(e) => handleSearch(e.target.value)}
							InputProps={{
								startAdornment: (
									<IconButton disabled>
										<BiSearch />
									</IconButton>
								),
							}}
						/>
						<FormControl>
							<Select
								value={currencyFilter}
								onChange={handleCurrencyFilterChange}
								displayEmpty
								inputProps={{ "aria-label": "Currency" }}
							>
								<MenuItem value="All">All Currencies</MenuItem>
								<MenuItem value="USD">USD</MenuItem>
								<MenuItem value="USDT">USDT</MenuItem>
								<MenuItem value="UAH">UAH</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<Select
								value={typeFilter}
								onChange={handleTypeFilterChange}
								displayEmpty
								inputProps={{ "aria-label": "Transaction Type" }}
							>
								<MenuItem value="All">All Types</MenuItem>
								<MenuItem value="deposit">Deposit</MenuItem>
								<MenuItem value="withdraw">Withdrawal</MenuItem>
							</Select>
						</FormControl>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>
										<TableSortLabel
											active={sortBy === "status"}
											direction={sortBy === "status" ? sortOrder : "asc"}
											onClick={() => handleSort("status")}
										>
											Status
										</TableSortLabel>
									</TableCell>
									<TableCell>
										<TableSortLabel
											active={sortBy === "type"}
											direction={sortBy === "type" ? sortOrder : "asc"}
											onClick={() => handleSort("type")}
										>
											Type
										</TableSortLabel>
									</TableCell>
									<TableCell>
										<TableSortLabel
											active={sortBy === "amount"}
											direction={sortBy === "amount" ? sortOrder : "asc"}
											onClick={() => handleSort("amount")}
										>
											Amount
										</TableSortLabel>
									</TableCell>
									<TableCell>Currency</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filteredTransactions
									?.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
									.map((transaction) => (
										<TableRow key={transaction.id}>
											<TableCell>
												<IconButton disabled>
													{transaction.status === "completed" ? (
														<IoCheckmarkDoneOutline />
													) : transaction.status === "pending" ? (
														<AiOutlineFieldTime />
													) : (
														<ImCancelCircle />
													)}
												</IconButton>
											</TableCell>
											<TableCell>{transaction.type}</TableCell>
											<TableCell
												sx={{
													color:
														transaction.type === "deposit"
															? "limegreen"
															: "orangered",
												}}
											>
												{transaction.type === "deposit" ? "+" : "-"}{" "}
												{transaction.amount}
											</TableCell>
											<TableCell>{transaction.currency}</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={filteredTransactions?.length || 0}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableContainer>
				</Grid>
			</Grid>
		</Container>
	);
};
