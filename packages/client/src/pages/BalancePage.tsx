import { User } from "../interfaces";
import { Box, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useBalance } from "../hooks";
import { CardInfoBalance } from "../components";
import { TransactionsTable } from "./transaction";


export const BalancePage = ({ user }: { user: User }) => {
  
  const params = useParams();

  const { balance } = useBalance({ userId: user.id, id: params?.id });

  return (
    <Grid container spacing={6} justifyContent={"space-between"}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h2"
          sx={{ marginBottom: 2, marginTop: 2 }}
          align={"left"}
        >
          Balance details
        </Typography>

        <Link to="/transactions">
          <Typography
            variant="h5"
            sx={{ marginBottom: 2, marginTop: 2 }}
            align={"left"}
          >
            Go to transactions ...
          </Typography>
        </Link>
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
      <Grid item lg={6} xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>CHART</Box>
      </Grid>
      <Grid item lg={6} xs={12}>
        <TransactionsTable user={user} />
      </Grid>
    </Grid>
  );
};
