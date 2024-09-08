import { Link, useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { register } from "../../API";

export const SignUpPage = () => { const navigate = useNavigate();

                                  const formik = useFormik({
                                    initialValues: {
                                      email: "",
                                      password: "",
                                      firstName: "",
                                      lastName: ""
                                    },
                                    validationSchema: Yup.object({
                                      email: Yup.string()
                                        .email("Invalid email address")
                                        .required("Required"),
                                      password: Yup.string().required(
                                        "Required"
                                      ),
                                      firstName: Yup.string().required(
                                        "Please enter your name"
                                      ),
                                      lastName: Yup.string().required(
                                        "Please enter your surname"
                                      )
                                    }),

                                    onSubmit: async values => {
                                      await register(values);
                                      navigate("/");
                                    }
                                  });

                                  return (
                                    <Grid container justifyContent={"center"}>
                                      <Grid item xs={12} md={6}>
                                        <Paper
                                          sx={{
                                            padding: 2,
                                            borderRadius: 2,
                                            boxShadow: 2
                                          }}
                                        >
                                          <Typography
                                            variant="h5"
                                            sx={{ marginBottom: 2 }}
                                            align={"center"}
                                          >
                                            Sign Up
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
                                                  autoComplete={"email"}
                                                  value={formik.values.email}
                                                  onChange={formik.handleChange}
                                                  error={
                                                    formik.touched.email &&
                                                    Boolean(formik.errors.email)
                                                  }
                                                  helperText={
                                                    formik.touched.email &&
                                                    formik.errors.email
                                                  }
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
                                                  autoComplete={
                                                    "current-password"
                                                  }
                                                  value={formik.values.password}
                                                  onChange={formik.handleChange}
                                                  error={
                                                    formik.touched.password &&
                                                    Boolean(
                                                      formik.errors.password
                                                    )
                                                  }
                                                  helperText={
                                                    formik.touched.password &&
                                                    formik.errors.password
                                                  }
                                                />
                                              </Grid>
                                              <Grid item xs={12}>
                                                <TextField
                                                  fullWidth
                                                  id="firstName"
                                                  name="firstName"
                                                  label="First Name"
                                                  variant="outlined"
                                                  autoComplete={"given-name"}
                                                  value={
                                                    formik.values.firstName
                                                  }
                                                  onChange={formik.handleChange}
                                                  error={
                                                    formik.touched.firstName &&
                                                    Boolean(
                                                      formik.errors.firstName
                                                    )
                                                  }
                                                  helperText={
                                                    formik.touched.firstName &&
                                                    formik.errors.firstName
                                                  }
                                                />
                                              </Grid>
                                              <Grid item xs={12}>
                                                <TextField
                                                  fullWidth
                                                  id="lastName"
                                                  name="lastName"
                                                  label="Last Name"
                                                  variant="outlined"
                                                  autoComplete={"family-name"}
                                                  value={formik.values.lastName}
                                                  onChange={formik.handleChange}
                                                  error={
                                                    formik.touched.lastName &&
                                                    Boolean(
                                                      formik.errors.lastName
                                                    )
                                                  }
                                                  helperText={
                                                    formik.touched.lastName &&
                                                    formik.errors.lastName
                                                  }
                                                />
                                              </Grid>
                                              <Grid item xs={12}>
                                                <Button
                                                  type="submit"
                                                  fullWidth
                                                  variant="contained"
                                                  color="primary"
                                                >
                                                  Sign Up
                                                </Button>
                                              </Grid>
                                              <Grid
                                                item
                                                xs={12}
                                                sx={{
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center"
                                                }}
                                              >
                                                <Typography variant="body2">
                                                  Already have an account?
                                                  <Link to="/login">
                                                    Sign In
                                                  </Link>
                                                </Typography>
                                              </Grid>
                                            </Grid>
                                          </form>
                                        </Paper>
                                      </Grid>
                                    </Grid>
                                  );
                                };
