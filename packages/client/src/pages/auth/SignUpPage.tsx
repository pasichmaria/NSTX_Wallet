import {
	Avatar,
	Box,
	Button,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../API";

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
			navigate("/login");
		},
	});

	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<Paper
						elevation={24}
						sx={{ p: 6, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
					>
						<Box sx={{ textAlign: "center", mb: 3 }}>
							<Avatar
								src={"https://i.pravatar.cc/300"}
								sx={{ width: 60, height: 60 }}
							/>
							<Typography variant="h5" mt={2}>
								Register
							</Typography>
						</Box>
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
										onBlur={formik.handleBlur}
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
										onBlur={formik.handleBlur}
										error={
											formik.touched.password && Boolean(formik.errors.password)
										}
										helperText={
											formik.touched.password && formik.errors.password
										}
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
											formik.touched.firstName &&
											Boolean(formik.errors.firstName)
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
										helperText={
											formik.touched.lastName && formik.errors.lastName
										}
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3 }}
							>
								Register
							</Button>
							<Box mt={2} textAlign="right">
								<Link href="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Box>
						</form>
					</Paper>
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
						backgroundImage:
							"url(https://images.unsplash.com/photo-1629914390416-8b9b8b5b5b0a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHh4Z0J0Z0JfZ0J8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80)",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
			</Grid>
		</Grid>
	);
};
