import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { register } from "../../API";
import Logo from "../../assets/logo";

export const SignUpPage = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string().required("Required"),
			firstName: Yup.string().required("Required"),
			lastName: Yup.string().required("Required"),
		}),

		onSubmit: async (values) => {
			await register(values);
			navigate("/");
		},
	});

	return (
		<Grid container justifyContent={"center"}>
			<Grid item xs={12} lg={4}>
				<Paper
					sx={{
						padding: 4,
						borderRadius: 2,
						boxShadow: "0px 0px 10px 0px #27DEBF",
						textAlign: "center",
					}}
				>
					<Grid item sx={{ m: 2 }}>
						<Logo />
					</Grid>
					<form onSubmit={formik.handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="email"
									name="email"
									label="Email"
									value={formik.values.email}
									onChange={formik.handleChange}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="password"
									name="password"
									label="Password"
									type="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									error={
										formik.touched.password && Boolean(formik.errors.password)
									}
									helperText={formik.touched.password && formik.errors.password}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="firstName"
									name="firstName"
									label="First Name"
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={
										formik.touched.firstName && Boolean(formik.errors.firstName)
									}
									helperText={
										formik.touched.firstName && formik.errors.firstName
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="lastName"
									name="lastName"
									label="Last Name"
									value={formik.values.lastName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={
										formik.touched.lastName && Boolean(formik.errors.lastName)
									}
									helperText={formik.touched.lastName && formik.errors.lastName}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="secondary"
								>
									Register
								</Button>
							</Grid>
						</Grid>
						<Grid item sx={{ mt: 5 }}>
							<Typography variant="body2" alignItems="end">
								Already have an account? <Link to="/login">Sign In</Link>
							</Typography>
						</Grid>
					</form>
				</Paper>
			</Grid>
		</Grid>
	);
};
