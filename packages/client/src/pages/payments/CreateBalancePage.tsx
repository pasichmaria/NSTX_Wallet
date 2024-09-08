import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { useCreateBalance } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";

export const CreateBalancePage = ({ user }: { user?: User }) => {
  const navigate = useNavigate();

  const { createBalance } = useCreateBalance({
    onSuccess: () => {
      toast.success("Balance created successfully");
      navigate("/payments");
    },
    onError: () => {
      toast.error("Error creating balance");
    }
  });

  return (
    <Container>
      <Typography variant="h4">Create Balance</Typography>
      <CreateBalanceForm user={user} createBalance={createBalance} />
    </Container>
  );
};

export const CreateBalanceForm = ({
         createBalance
       }: {
         user?: User;
         createBalance: (data: { currency: string }) => void;
       }) => {
         const formik = useFormik({
           initialValues: {
             currency: ""
           },
           validationSchema: Yup.object({
             currency: Yup.string().required("Currency is required")
           }),
           onSubmit: values => {
             createBalance(values);
           }
         });

         return (
           <Box sx={{ mt: 2 }}>
             <form onSubmit={formik.handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                   <Select
                     fullWidth
                     id="currency"
                     name="currency"
                     label="Currency"
                     value={formik.values.currency}
                     onChange={formik.handleChange}
                     error={
                       formik.touched.currency &&
                       Boolean(formik.errors.currency)
                     }
                   >
                     {[
                       "USD",
                       "DASH",
                       "XMR",
                       "BCH",
                       "LTC",
                       "XRP",
                       "XLM",
                       "BTC",
                       "BNB",
                       "USDT",
                       "ETH",
                       "BUSD",
                       "SOL",
                       "DOT",
                       "LINK",
                       "CAKE",
                       "CRO",
                       "UNI",
                       "AAVE"
                     ].map(currency => (
                       <MenuItem key={currency} value={currency}>
                         {currency}
                       </MenuItem>
                     ))}
                   </Select>
                 </Grid>
                 <Grid item xs={12}>
                   <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     fullWidth
                   >
                     Create Balance
                   </Button>
                 </Grid>
               </Grid>
             </form>
           </Box>
         );
       };