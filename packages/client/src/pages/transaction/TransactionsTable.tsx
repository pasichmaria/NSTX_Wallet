import {
	Container,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	MenuItem,
	Paper,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	TextField,
} from "@mui/material";

import { useEffect } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { CustomTablePagination } from "./paginationUtils.tsx";
import { TransactionsPageLogic } from "../../utils";

export const TransactionsTable = ({ user }: any) => {
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
		handlePageChange,
		handleChangeRowsPerPage,
		setFilteredTransactions,
	} = TransactionsPageLogic({ user });

	useEffect(() => {
		setFilteredTransactions(transactions);
	}, [transactions]);

	return (
		<Container sx={{ mt: 2 }}>
			<Grid container spacing={2} direction={"row"}>
				<Grid item xs={12}>
					<TableContainer
						component={Paper}
						sx={{
							backgroundColor: "rgba(22,96,88,0)",
							padding: 6,
						}}
					>
						<TextField
							label="Search"
							value={searchTerm}
							onChange={(e) => handleSearch(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<BiSearch />
									</InputAdornment>
								),
							}}
						/>
						<FormControl>
							<Select
								sx={{
									ml: 6,
								}}
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
								sx={{
									ml: 6,
								}}
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
									.map((transaction: any, index: number) => (
										<TableRow key={index}>
											<TableCell>
												{transaction.status === "completed" ? (
													<IconButton>
														<IoCheckmarkDoneOutline />
													</IconButton>
												) : transaction.status === "pending" ? (
													<IconButton>
														<AiOutlineFieldTime />
													</IconButton>
												) : (
													<IconButton>
														<ImCancelCircle />
													</IconButton>
												)}
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
						<CustomTablePagination
							page={page}
							rowsPerPage={rowsPerPage}
							onPageChange={handlePageChange}
							onRowsPerPageChange={handleChangeRowsPerPage}
							totalCount={filteredTransactions?.length}
						/>
					</TableContainer>
				</Grid>
			</Grid>
		</Container>
	);
};
