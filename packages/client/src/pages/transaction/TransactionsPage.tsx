import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import { useTransactions } from "../../hooks";
import { Transaction, User } from "../../interfaces";
import { Link } from "react-router-dom";
import { TransactionsList } from "./TransactionsList";

export const TransactionsTable = ({ user }: { user: User }) => {
  const { transactions } = useTransactions({ user });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  if (isMobile) {
    return (
      <TransactionsList
        transactions={transactions}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            padding: "10px",
            boxShadow: 24,
            borderRadius: "25px"
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Currency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction: Transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.currency}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Grid container justifyContent="center">
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={transactions?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
        </TableContainer>
        <Link to="/">
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, marginTop: 2 }}
            align={"right"}
          >
            Show more &gt;
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
