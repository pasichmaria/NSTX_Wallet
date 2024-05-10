import { useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CoinMarketCapTable } from "../../components/CoinMarketCapTable";
import { LoginDialog } from "../../components/LoginDialog";
import { useAuth } from "../../hooks";
import { User } from "../../interfaces";

export const LoginPage = ({
  user,
  getUser
}: {
  user?: User | null;
  getUser: () => void;
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpenForm = () => {
    getUser();
    setOpen(true);
  };

  const { login } = useAuth({
    onSuccess: () => {
      toast.success("Login successful");
      getUser();
      setOpen(false);
    },
    onError: () => {
      toast.error("Login failed");
    }
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .min(3)
      .max(320),
    password: Yup.string().required("Required")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      login(values);
    }
  });

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Box
        flexGrow={1}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          sx={{ padding: 2 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "medium",
              marginBottom: theme.breakpoints.down("sm") ? 2 : 0
            }}
          >
            {user ? "NSTX Wallet" : "Welcome to NSTX"}
          </Typography>
          <Typography
            variant="h3"
            align="center"
            sx={{
              color: theme.palette.mode === "light" ? "#171723" : "#eeeeee",
              marginBottom: 2
            }}
          >
            LEARN • BUILD • INNOVATE
          </Typography>

          {!user && (
            <Button
              sx={{
                height: 40,
                width: 150,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.getContrastText(
                  theme.palette.secondary.main
                )
              }}
              variant="contained"
              onClick={handleOpenForm}
              size="large"
            >
              Sign in
            </Button>
          )}

          {user && (
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: theme.palette.mode === "light" ? "#171723" : "#eeeeee",
                marginTop: 2
              }}
            >
              Welcome {user.firstName}
            </Typography>
          )}
        </Grid>
      </Box>

      <Box
        flexGrow={1}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {!user && (
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: theme.palette.mode === "light" ? "#171723" : "#eeeeee",
              padding: 2
            }}
          >
            Sign in to view the latest cryptocurrency prices
          </Typography>
        )}
        {user && <CoinMarketCapTable />}
      </Box>
      <LoginDialog open={open} onClose={() => setOpen(false)} formik={formik} />
    </Grid>
  );
};
