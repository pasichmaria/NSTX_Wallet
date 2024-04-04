import React from "react";
import { MdNotifications } from "react-icons/md";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
interface NotificationProps {
	message: string;
}
const Notification: React.FC<NotificationProps> = ({ message }) => {
	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 16,
				right: 16,
				width: 300,
				height: 100,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "primary.main",
				borderRadius: 10,
				boxShadow: 24,
				zIndex: 9999,
			}}
			elevation={24}
		>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item>
					<IconButton size="medium" color="inherit">
						<MdNotifications />
					</IconButton>
				</Grid>
				<Grid item xs={10}>
					<Typography variant="body1" align="center" color="textPrimary">
						{message}
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Notification;
