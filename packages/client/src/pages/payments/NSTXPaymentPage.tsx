import {
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from "formik";

import { CardInfoBalance } from "../../components";
import { axios, useBalances, useUser } from "../../hooks";

export const NSTXPaymentPage = () => {
  const { user } = useUser();
  const { balances, isLoading } = useBalances({
    userId: user?.id || ""
  });

  const formik = useFormik({
    initialValues: {
      recipient: "",
      currency: "USDT",
      value: "",
      senderId: ""
    },
    onSubmit: async values => {
      try {
        await axios.post("/send/transaction", {
          amount: values.value,
          currency: values.currency,
          userId: user?.id,
          senderId: values.senderId
        });
      } catch (error) {
        console.error(error);
      }
    }
  });

  if (isLoading || !balances) {
    return <CircularProgress />;
  }

  const isMobile = window.innerWidth < 450;

  const handleChoseBalance = (id: string) => {
    formik.setFieldValue("senderId", id);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={10} lg={6}>
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Send NSTX
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="recipient"
                name="recipient"
                label="Recipient"
                value={formik.values.recipient}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                id="currency"
                name="currency"
                label="Currency"
                value={formik.values.currency}
                onChange={event =>
                  formik.setFieldValue("currency", event.target.value)
                }
              >
                <MenuItem value="USDT">USDT</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="BTC">BTC</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="value"
                name="value"
                label="Value"
                value={formik.values.value}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                direction={isMobile ? "column" : "row"}
              >
                {balances.map(balance => (
                  <Grid item key={balance.id}>
                    <CardInfoBalance
                      id={balance.id}
                      onClick={() => handleChoseBalance(balance.id)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit" variant="contained">
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
