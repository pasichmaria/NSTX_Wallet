import { User } from "../interfaces";

import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useBalance } from "../hooks";
import { CardInfoBalance } from "../components";
import { TransactionsTable } from "./transaction";


export const BalancePage = ({ user }: { user: User }) => {

  const params = useParams();

  const { balance } = useBalance({ userId: user?.id, id: params.id });

  return (
    <Grid container spacing={4} justifyContent={"space-between"}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h2"
          sx={{ marginBottom: 2, marginTop: 2 }}
          align={"left"}
        >
          Balance details
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: 2, marginTop: 2 }}
          align={"left"}
        >
          Your transactions ...
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <CardInfoBalance
          id={balance?.id}
          currency={balance?.currency}
          value={balance?.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TransactionsTable user={user} />
      </Grid>
    </Grid>
  );
};
