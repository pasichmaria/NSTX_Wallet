import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { FormikProps } from "formik";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  formik: FormikProps<{
    email: string;
    password: string;
  }>;
  onClose: () => void;
}

export const LoginDialog = ({ open, formik, onClose }: Props) => {
  return (
    <Dialog
      transitionDuration={700}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          padding: 4,
          boxShadow: "0px 0px 10px 0px #27DEBF"
        }
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Sign in
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Don't have an account?{" "}
                    <Link to="/registration">Sign Up</Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff"
            }}
          >
            <Typography variant="h6" gutterBottom>
              Login with Google
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};
