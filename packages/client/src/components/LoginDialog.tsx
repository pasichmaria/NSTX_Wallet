import {Box, Button, Dialog, Grid, TextField, Typography} from "@mui/material";
import {FormikProps} from "formik";
import React from "react";
import {Link} from "react-router-dom";

interface Props {
	open: boolean;
	formik: FormikProps<{
		email: string;
		password: string;
	}>
	onClose: () => void;
}

export const LoginDialog: React.FC<Props> = ({ open, formik, onClose }) => {
	return (
		<Dialog
			transitionDuration={700}
			sx={{
				"& .MuiDialog-paper": {
					padding: 10,
					boxShadow: "0px 0px 10px 0px #27DEBF",
					borderRadius: "25px",
				},
			}}
			open={open}
			onClose={onClose}
		>
			<Grid container spacing={4}>
				<Grid item xs={12} lg={6}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography component="h1" variant="h5" align="center">
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
										value={formik.values.password}
										onChange={formik.handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										type="submit"
										fullWidth
										variant="outlined"
										color="secondary"
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
							backgroundColor: "#000000",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							color: "#ffffff",
						}}
					>
						Login with Google
					</Box>
				</Grid>
			</Grid>
		</Dialog>
	);
};
