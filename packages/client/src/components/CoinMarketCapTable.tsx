import { useState } from "react";
import {
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
  Typography
} from "@mui/material";
import { useCoinMarketCup } from "../hooks/useCoinMarketCup.tsx";
import { Link } from "react-router-dom";

export const CoinMarketCapTable = () => {
  const { coinMarketCup, isLoading, isError } = useCoinMarketCup();
  const [orderBy, setOrderBy] = useState("currency");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage): Props => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (isLoading || !coinMarketCup || !coinMarketCup.data) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const sortedData = coinMarketCup.data.sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  });

  const filteredData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
          backgroundColor: theme => theme.palette.background.paper,
          borderRadius: "20px",
          boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
          padding: "20px"
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <TableSortLabel
                  active={orderBy === "currency"}
                  direction={order}
                  onClick={() => handleRequestSort("currency")}
                >
                  Currency
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "value"}
                  direction={order}
                  onClick={() => handleRequestSort("value")}
                >
                  Value
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map(row => (
              <TableRow key={row.currency}>
                <TableCell component="th" scope="row" />
                <TableCell>{row.currency}</TableCell>
                <TableCell>{row.value}</TableCell>
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
