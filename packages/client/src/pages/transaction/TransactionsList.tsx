import React from "react";
import {Link} from "react-router-dom";
import {Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TablePagination, Typography} from "@mui/material";

import {Transaction} from "../../interfaces";
import {FaArrowDown} from "react-icons/fa";
import {MdArrowOutward} from "react-icons/md";

export const TransactionsList = ({
                                   transactions,
                                   page,
                                   rowsPerPage,
                                   handleChangePage,
                                   handleChangeRowsPerPage
                                 }: {
  transactions?: Transaction[]
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
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={10}>
          <Link to="/">
            <Typography
                variant="h6"
                sx={{ marginBottom: 2, marginTop: 2 }}
                align="right"
            >
              Go to profile page &gt;
            </Typography>
          </Link>
          <Paper
              sx={{
                width: "100%",
                padding: "10px",
                boxShadow: 24,
                borderRadius: "25px"
              }}
          >
            <List component="nav">
              {transactions
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((transaction: Transaction) => (
                      <ListItem key={transaction.id}>
                        <ListItemIcon>
                          {transaction.type === "deposit" ? (
                              <FaArrowDown style={{ color: "green" }} />
                          ) : (
                              <MdArrowOutward style={{ color: "red" }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                            primary={`Transaction ID: ${transaction.id}`}
                            secondary={`Amount: ${transaction.type === "deposit" ? "+" : "-" } ${transaction.amount} ${transaction.currency}`}
                        />
                        
                        <Typography
                            variant="body2"
                            align="right"
                        >
                            {transaction.status}
                        </Typography>

                      </ListItem>
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
