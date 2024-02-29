import { Box, Grid, Typography } from "@mui/material";
import { BigButton } from "../../components";
import {useNavigate} from "react-router-dom";

export const SettingsPage = ({ user }: any) => {
	const navigate = useNavigate();

	return (
			<Grid container spacing={3} flexDirection="column">
				<Typography variant="h4" align="center" gutterBottom>
				Settings {user.email}
			</Typography>
			<Grid item>
				<Box>
					<BigButton
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => navigate("/settings/change-password")}
					>
						Change Password
					</BigButton>
				</Box>
			</Grid>
			<Grid item >
				<Box>
					<BigButton
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => navigate("/settings/change-email")}
					>
						Change Email
					</BigButton>
				</Box>
			</Grid>
			<Grid item >
				<Box>
					<BigButton
						variant="contained"
						fullWidth
						color="primary"
						onClick={() => navigate("/settings/delete-account")}
					>
						Delete Account
					</BigButton>
				</Box>
			</Grid>
		</Grid>
	);
};
