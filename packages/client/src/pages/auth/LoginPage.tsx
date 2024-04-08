import { useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import coins from "../../assets/coins.svg";
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
    <Grid
      container
      flexDirection={"row"}
      sx={{
        backgroundImage: user ? "none" : `url(${coins})`,
        backgroundSize: "contain",
        width: "100%",
        height: "100vh"
      }}
    >
      <Grid
        container
        item
        xs={user ? 6 : 12}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Box>
          <Grid item>
            <Typography
              variant="h2"
              align="center"
              sx={{
                color: theme =>
                  theme.palette.mode === "light"
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.main,
                fontWeight: "medium"
              }}
            >
              {user ? "NSTX Wallet" : "Welcome to NSTX"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              sx={{
                color: theme =>
                  theme.palette.mode === "light" ? "#171723" : "#eeeeee"
              }}
            >
              LEARN • BUILD • INNOVATE
            </Typography>
          </Grid>
          <Grid>
            {user ? (
              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: theme =>
                    theme.palette.mode === "light" ? "#171723" : "#eeeeee"
                }}
              >
                Welcome {user.firstName}
              </Typography>
            ) : (
              <Grid item marginTop={6}>
                <Button
                  sx={{
                    height: 50,
                    width: 200,
                    backgroundColor: theme =>
                      theme.palette.mode === "light"
                        ? theme.palette.secondary.light
                        : theme.palette.secondary.main,
                    color: theme =>
                      theme.palette.mode === "light" ? "#171723" : "#eeeeee"
                  }}
                  variant="contained"
                  onClick={handleOpenForm}
                  size="large"
                >
                  Sign in
                </Button>
              </Grid>
            )}
          </Grid>
        </Box>
      </Grid>

      <Grid
        flexDirection={"column"}
        item
        xs={user ? 6 : 12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {!user && (
          <Grid item>
            <Typography
              variant="h5"
              align="center"
              sx={{
                color: theme =>
                  theme.palette.mode === "light" ? "#171723" : "#eeeeee"
              }}
            >
              Sign in to view the latest cryptocurrency prices
            </Typography>
          </Grid>
        )}
        {user && <CoinMarketCapTable />}
      </Grid>
      <LoginDialog open={open} onClose={() => setOpen(false)} formik={formik} />
    </Grid>
  );
};
