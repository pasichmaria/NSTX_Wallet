import {
    Alert,
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    TableContainer,
    TablePagination,
    Typography
} from "@mui/material";
import {Transaction, User} from "../../interfaces";
import {useBalance, useTransactionsForCurrency} from "../../hooks";
import {MdArrowOutward, MdArrowDownward } from "react-icons/md";
import {Link, useParams} from "react-router-dom";
import React from "react";
import {PaymentsMethods} from "../payments";

export const TransactionsTable = ({ user }: { user: User }) => {
    const params = useParams();
    const {balance} = useBalance({userId: user?.id, id: params.id});

    const {
        transactionsCurrency,
        isLoading,
        isError
    } = useTransactionsForCurrency({balance});

    if (isLoading) {
        return <Alert severity="info">Loading...</Alert>;
    }
    if (isError) {
        return <Alert severity="error">Error loading transactions</Alert>;
    }
    if (!transactionsCurrency || transactionsCurrency.length === 0) {
        return <PaymentsMethods/>;
    }

    return (
        <TableContainer component={Box}>
            <TransactionsList
                page={0}
                rowsPerPage={5}
                handleChangePage={() => {
                }}
                handleChangeRowsPerPage={() => {
                }}
                transactions={transactionsCurrency}
            />
        </TableContainer>
    );
};

export const TransactionsList = ({
                                     transactions,
                                     page,
                                     rowsPerPage,
                                     handleChangePage,
                                     handleChangeRowsPerPage
                                 }: {
    transactions?: Transaction[];
    page: number;
    rowsPerPage: number;
    handleChangePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => void;
    handleChangeRowsPerPage: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}) => {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={10}>
                <Link to="/">
                    <Typography
                        variant="h6"
                        sx={{marginBottom: 2, marginTop: 2}}
                        align="right"
                    >
                        Go to profile page &gt;
                    </Typography>
                </Link>
                <Paper
                    sx={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                        boxShadow: "10px rgba(0,0,0,0.4)",
                        borderRadius: "25px"
                    }}
                >
                    <List component="nav">
                        {transactions?.map(transaction => (
                            <Link
                                to={`/transaction/${transaction.id}`}
                                key={transaction.id}
                                style={{textDecoration: "none", color: "inherit"}}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        {transaction.type === 'transfer' ? (
                                            <MdArrowOutward color="red"/>
                                        ) : (<MdArrowDownward color="green"/>
                                        )}
                                    </ListItemIcon>
                                        <ListItemText
                                            primary={`Transaction ID: ${transaction.id}`}
                                            secondary={`Amount: ${
                                                transaction.type === "transfer" ? "-" : "+"
                                            } ${transaction.amount} ${transaction.currency}`}
                                        />

                                        <Typography variant="body2" align="right">
                                            {transaction.status}
                                        </Typography>
                                </ListItem>
                            </Link>
                            ))}
                    </List>
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
                </Paper>
            </Grid>
        </Grid>
);
};
