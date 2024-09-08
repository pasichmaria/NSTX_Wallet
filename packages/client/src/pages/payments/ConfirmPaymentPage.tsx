import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useNSTXTransfer } from "../../hooks";
import { FaClipboardCheck } from "react-icons/fa";
import { User } from "../../interfaces";

interface Props {
  user: User;
  receiverId: string;
  amount: string;
  currency: string;
}

export const ConfirmPaymentPage = ({
  user,
  receiverId,
  amount,
  currency
}: Props) => {
  const [disabled, setDisabled] = useState(false);
  const { NSTXTransfer } = useNSTXTransfer({
    onSuccess: () => {
      setPaymentSuccess(true);
      setError(false);
    },
    onError: () => {
      setPaymentSuccess(false);
      setError(true);
    }
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onConfirm = () => {
    setDisabled(true);
    NSTXTransfer({
      senderId: user.id,
      receiverId: receiverId,
      amount: parseFloat(amount),
      currency: currency
    });
    setShowConfirmation(true);
  };

  return (
    <Grid container spacing={2} direction="column">
      {!showConfirmation && !error && !paymentSuccess && (
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography variant="h4" align="left">
              Confirm Payment
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="left">
              Are you sure you want to confirm this payment?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="left">
              Receiver: {receiverId}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" align="left">
              Value: {amount} {currency}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={4} justifyContent="space-around">
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={disabled}
                  onClick={onConfirm}
                  fullWidth
                >
                  Confirm
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate(-1);
                  }}
                  fullWidth
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      {paymentSuccess && <SuccessPayment />}
      {error && <ErrorComponent />}
    </Grid>
  );
};

export const SuccessPayment = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <FaClipboardCheck style={{ fontSize: 64, color: "green" }} />
      </Grid>
      <Grid item>
        <Typography variant="h4" align="center">
          Success withdraw
        </Typography>
      </Grid>
      <Grid item>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          To transactions
        </Button>
      </Grid>
    </Grid>
  );
};

export const ErrorComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payments");
  };
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <MdError style={{ fontSize: 64, color: "red" }} />
      </Grid>
      <Grid item>
        <Typography variant="h4" align="center">
          Error
        </Typography>
      </Grid>
      <Grid item>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Go back
        </Button>
      </Grid>
    </Grid>
  );
};
