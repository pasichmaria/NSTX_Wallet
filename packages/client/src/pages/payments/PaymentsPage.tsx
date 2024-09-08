import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Balance, User } from "../../interfaces";
import { useBalances } from "../../hooks";
import { BinanceLogo, Logo, PayPalLogo } from "../../assets";

export const PaymentsPage = ({ user }: { user: User }) => {
  if (!user) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6" color="error">
          User information is missing.
        </Typography>
      </Box>
    );
  }

  const { balances, isLoading, isError } = useBalances({ user } );

  if (isLoading) {
    return (
      <Box textAlign="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6" color="error">
          Error loading balances. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {balances ? (
        <UserBalances balances={balances} />
      ) : (
        <Typography variant="h6" color="error">
          No balances found
        </Typography>
      )}
      <PaymentsMethods />
    </Grid>
  );
};

export const UserBalances = ({ balances }: { balances: Balance[] }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Balances
        </Typography>
      </Grid>
      {balances?.map(balance => (
        <Grid item xs={12} key={balance.id}>
          <Box textAlign="center" mb={3}>
            <Typography variant="h6">{balance.currency}</Typography>
            <Typography variant="body1">{balance.value}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export const PaymentsMethods = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <IconButton
          sx={{
            height: "40px",
            borderRadius: "10px"
          }}
          onClick={() => navigate("/payments/binance")}
        >
          <BinanceLogo />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={4}>
        <IconButton
          sx={{
            height: "40px",
            borderRadius: "10px"
          }}
          onClick={() => navigate("/payments/nstx")}
        >
          <Logo />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={4}>
        <IconButton
          sx={{
            height: "40px",
            borderRadius: "10px"
          }}
          onClick={() => navigate("/payments/paypal")}
        >
          <PayPalLogo />
        </IconButton>
      </Grid>
    </Grid>
  );
};