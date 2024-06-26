import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import notfound from "../../assets/notfoundcat.svg";
import { BigButton } from "../../components";
import { ThemeContext } from "../../theme";

export const NotFoundPage = () => {
	const isMobile = useContext(ThemeContext).isMobile;
	const navigate = useNavigate();

	const handleReturnToLogin = () => {
		navigate("/");
	};

	return (
		<Grid
			container
			spacing={2}
			alignItems="center"
			justifyContent="center"
			direction="row"
		>
			<Grid item xs={isMobile ? 12 : 8}>
				<img
					src={notfound}
					alt="not found"
					style={{ width: "100%", height: "auto" }}
				/>
			</Grid>
			<Grid item xs={10} sm={6} md={4} lg={3}>
				<TextField
					label="Email Address"
					fullWidth
					variant="standard"
					style={{
						fontWeight: 700,
						marginBottom: "1rem",
					}}
				/>
				<TextField
					label="Your message"
					variant="standard"
					fullWidth
					style={{
						fontWeight: 700,
						marginBottom: "1rem",
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					style={{
						width: "100%",
						marginTop: "2rem",
					}}
				>
					Contact Us
				</Button>

				<BigButton
					onClick={handleReturnToLogin}
					size={isMobile ? "small" : "large"}
					style={{
						width: "100%",
						marginTop: "2rem",
					}}
				>
					Return to Login
				</BigButton>
			</Grid>
		</Grid>
	);
};
