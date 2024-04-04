import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { BigButton } from "../../components";
import { User } from "../../interfaces";

export const SettingsPage = ({ user }: { user: User }) => {
	const navigate = useNavigate();

	return (
		user && (
			<Grid
				container
				spacing={2}
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid item xs={4}>
					<BigButton
						onClick={() => {
							navigate("/settings/profile");
						}}
					>
						Profile
					</BigButton>
				</Grid>
				<Grid item xs={4}>
					<BigButton
						onClick={() => {
							navigate("/settings/security");
						}}
					>
						Security
					</BigButton>
				</Grid>
				<Grid item xs={4}>
					<BigButton
						onClick={() => {
							navigate("/settings/notifications");
						}}
					>
						Notifications
					</BigButton>
				</Grid>
			</Grid>
		)
	);
};
