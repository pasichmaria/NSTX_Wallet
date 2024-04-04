import { useState } from "react";
import {
	Button,
	CircularProgress,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
	Typography,
} from "@mui/material";
import { useCoinMarketCup } from "../hooks/useCoinMarketCup.tsx";
import { Link } from "react-router-dom";

export const CoinMarketCapTable = () => {
	const { coinMarketCup, isLoading, isError } = useCoinMarketCup();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(8);
	const [orderBy, setOrderBy] = useState("");
	const [order, setOrder] = useState("asc");

	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const sortedData = coinMarketCup?.data
		? coinMarketCup.data.sort((a, b) => {
				if (orderBy === "") {
					return 0;
				}
				const aValue = a.quote?.USD?.[orderBy];
				const bValue = b.quote?.USD?.[orderBy];
				if (aValue < bValue) {
					return order === "asc" ? -1 : 1;
				}
				if (aValue > bValue) {
					return order === "asc" ? 1 : -1;
				}
				return 0;
		  })
		: [];

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	if (isLoading || !coinMarketCup || !coinMarketCup.data) {
		return <CircularProgress />;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	return (
		<Grid>
			<Grid>
				<Link to="/">
					<Typography
						variant="h6"
						sx={{ marginBottom: 2, marginTop: 2 }}
						align={"right"}
					>
						See more...
					</Typography>
				</Link>
			</Grid>

			<TableContainer
				component={Paper}
				sx={{
					backgroundColor: (theme) => theme.palette.background.paper,
					borderRadius: "20px",
					boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
					padding: "20px",
				}}
			>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<TableSortLabel
									active={orderBy === "name"}
									direction={orderBy === "name" ? order : "asc"}
									onClick={() => handleRequestSort("name")}
								>
									Name
								</TableSortLabel>
							</TableCell>
							<TableCell>
								<TableSortLabel
									active={orderBy === "symbol"}
									direction={orderBy === "symbol" ? order : "asc"}
									onClick={() => handleRequestSort("symbol")}
								>
									Symbol
								</TableSortLabel>
							</TableCell>
							<TableCell>
								<TableSortLabel
									active={orderBy === "price"}
									direction={orderBy === "price" ? order : "asc"}
									onClick={() => handleRequestSort("price")}
								>
									Price
								</TableSortLabel>
							</TableCell>
							<TableCell>
								<TableSortLabel
									active={orderBy === "percent_change_24h"}
									direction={orderBy === "percent_change_24h" ? order : "asc"}
									onClick={() => handleRequestSort("percent_change_24h")}
								>
									Change (24h)
								</TableSortLabel>
							</TableCell>
							<TableCell>
								<TableSortLabel
									active={orderBy === "market_cap"}
									direction={orderBy === "market_cap" ? order : "asc"}
									onClick={() => handleRequestSort("market_cap")}
								>
									Market Cap
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sortedData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((coin) => (
								<TableRow key={coin.id}>
									<TableCell>{coin.name}</TableCell>
									<TableCell>{coin.symbol}</TableCell>
									<TableCell>{coin.quote?.USD?.price}</TableCell>
									<TableCell
										sx={{
											color:
												coin.quote?.USD?.percent_change_24h > 0
													? "#94f18b"
													: "#F4444E",
										}}
									>
										{" "}
										{coin.quote?.USD?.percent_change_24h.toFixed(2)}%
									</TableCell>
									<TableCell>{coin.quote?.USD?.market_cap}</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[4, 8]}
					component="div"
					count={coinMarketCup.data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
			<Typography sx={{ marginTop: 2 }} textAlign={"end"}>
				See more at{" "}
				<a href="https://coinmarketcap.com/" target="_blank">
					CoinMarketCap
				</a>
			</Typography>
		</Grid>
	);
};
