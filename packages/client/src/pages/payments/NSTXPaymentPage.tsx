import { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useBalances, useUser } from "../../hooks";
import { ConfirmPaymentPage } from "./ConfirmPaymentPage.tsx";

export const NSTXPaymentPage = () => {
  const { user, isLoading  } = useUser();
  const { balances } = useBalances({
    userId: user.id
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    receiverId: Yup.string().required("Recipient is required"),
    currency: Yup.string().required("Choose the currency"),
    amount: Yup.number()
      .required("Amount is required")
      .min(0)
  });

  const formik = useFormik({
    initialValues: {
      receiverId: "",
      currency: "USDT",
      amount: "",
      message: ""
    },
    validationSchema,
    onSubmit: async (_values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowConfirmation(true);
        setSubmitting(false);
      });
    }
  });

  if (isLoading || !balances) {
    return <CircularProgress />;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {!showConfirmation && (
        <Grid item xs={12} md={8} lg={6}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" align="center" gutterBottom>
                  Send Cryptocurrency
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="receiverId"
                  name="receiverId"
                  label="Recipient"
                  value={formik.values.receiverId}
                  onChange={formik.handleChange}
                  error={formik.touched.receiverId && Boolean(formik.errors.receiverId)}
                  helperText={formik.touched.receiverId && formik.errors.receiverId}
                />
              </Grid>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  name="currency"
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="USDT"
                    control={<Radio />}
                    label="USDT"
                  />
                  <FormControlLabel
                    value="USD"
                    control={<Radio />}
                    label="USD"
                  />
                  <FormControlLabel
                    value="BTC"
                    control={<Radio />}
                    label="BTC"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography id="amount-slider" gutterBottom>
                  Amount
                </Typography>
                <TextField
                  fullWidth
                  type={"number"}
                  id="amount"
                  name="amount"
                  label="Amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Message to Recipient"
                  multiline
                  rows={3}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Send"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      )}
      {showConfirmation && (
        <Grid item xs={12} md={8} lg={6}>
          <ConfirmPaymentPage
            user={user}
            amount={formik.values.amount}
            currency={formik.values.currency}
            receiverId={formik.values.receiverId}
          />
        </Grid>
      )}
    </Grid>
  );
};