import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { FormikProps } from "formik";
import { Link } from "react-router-dom";

interface Props {
    formik: FormikProps<{
        email: string;
        password: string;
    }>
}

export const LoginDialog = ({formik}: Props) => {
    return (
        <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} lg={6}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5" align="center" gutterBottom>
                        Sign in
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    autoComplete={'email'}
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
                                    autoComplete={"current-password"}
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
                                    Don't have an account?
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
                        color: "#ffffff",
                        borderRadius: 8,
                        boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <Typography variant={"h5"} align={"center"} gutterBottom>
                        Google login
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
