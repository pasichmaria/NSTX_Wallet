import {Avatar, Box, Button, Grid,  Paper, TextField, Typography,} from "@mui/material";

import {useFormik} from "formik";
import {useNavigate, Link} from "react-router-dom";
import {useAuth} from "../../hooks";

export const LoginPage = () => {
	const navigate = useNavigate();

	const { login } = useAuth({
		onSuccess: () => {
			navigate("/");
		},
		onError: () => {
			console.log("Login error");
		},
	});

	const formik = useFormik(
		{
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			login(values);
		},
	});

	return (
		<Grid container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Paper
					elevation={24}
					sx={{
						padding: 10,
					}}
				>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Avatar
							src={"https://i.pravatar.cc/300"}
							sx={{
								width: 60,
								height: 60,
								margin: "auto",
							}}
						/>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
					</Box>
					<form onSubmit={formik.handleSubmit}>
						<Box sx={{ mt: 3 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										fullWidth
										id="email"
										name="email"
										label="email"
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
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
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container justifyContent="flex-end">
								<Grid item>
								<Button variant={'text'} to={'/sign-up'} component={Link}>
									Sign up
								</Button>
								</Grid>
							</Grid>
						</Box>
					</form>
				</Paper>
			</Box>
		</Grid>
	);
};
