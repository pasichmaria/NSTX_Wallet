import {  useParams } from "react-router-dom";
import { useTransactionById } from "../../hooks";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";

export const TransactionDetailsPage = () => {
  const { id } = useParams();
  const { transaction, isLoading, isError } = useTransactionById({ id });

  if (isLoading || isError) {
    return <CircularProgress />;
  }
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} spacing={2}>
      <Grid item md={6}>
        <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
          ID : {transaction?.id}
        </Typography>
        <Paper>
          <Typography variant="body2" align={"left"}>
            Sender: {transaction?.userId}
          </Typography>

          <Typography variant="body2" align={"left"}>
            Amount: {transaction?.amount}
          </Typography>
          <Typography variant="body2" align={"left"}>
            Currency: {transaction?.currency}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
