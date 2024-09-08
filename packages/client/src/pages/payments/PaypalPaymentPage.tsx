import { User } from "../../interfaces";
import { Box, Typography } from "@mui/material";

export const PaypalPaymentPage = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h6" color="error">
        Paypal payments are not available at the moment. Please try again later.
      </Typography>
    </Box>
  );
};
