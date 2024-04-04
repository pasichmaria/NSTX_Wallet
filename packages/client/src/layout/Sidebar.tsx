import {
	Avatar,
	Button,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import {
	MdOutlineRecentActors,
	MdSettings,
	MdTrackChanges,
	MdWallet,
} from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

import { useContext } from "react";
import { User } from "../interfaces";
import { ThemeContext } from "../theme.tsx";

interface SidebarProps {
	open: boolean;
	user?: User;
	handleDrawerClose: () => void;
}

export const Sidebar = ({ user, open, handleDrawerClose }: SidebarProps) => {
	const isMobile = useContext(ThemeContext).isMobile;
	return (
		<Drawer
			variant="temporary"
			anchor="left"
			open={open}
			onClose={handleDrawerClose}
			sx={{
				"& .MuiDrawer-paper": {
					width: isMobile ? "100%" : "300px",
					boxSizing: "border-box",
					borderRadius: "0px 25px 25px 0px",
					backgroundColor: "#1D1F2E",
					color: "white",
				},
			}}
		>
			<Grid
				container
				direction="row"
				alignItems="center"
				sx={{
					padding: "20px",
					position: "relative",
				}}
			>
				<Grid
					item
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginRight: "20px",
					}}
				>
					<Avatar
						src={"https://ui-avatars.com/api/?background=random"}
						sx={{
							width: 60,
							height: 60,
							margin: "auto",
						}}
					/>
				</Grid>
				<Grid item sx={{ marginTop: 2 }}>
					<Typography
						variant="h6"
						sx={{
							color: "white",
						}}
					>
						{user?.firstName} {user?.lastName}
					</Typography>
				</Grid>
				<Grid item sx={{ right: 0, position: "absolute" }}>
					<Button
						variant="contained"
						startIcon={<MdSettings />}
						component={RouterLink}
						to={"/settings"}
						sx={{
							color: "white",
							marginRight: 2,
						}}
					/>
				</Grid>
			</Grid>
			<CustomListItems />
			{isMobile && <Button onClick={handleDrawerClose}>Close</Button>}
		</Drawer>
	);
};

export const CustomListItems = () => {
	return (
		<List
			sx={{
				"& .MuiListItem-root": {
					color: "white",
					padding: "20px",
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.34)",
						transition: "background-color 0.4s ease-in-out",
					},
					"& .MuiListItemIcon-root": {
						color: "white",
					},
				},
			}}
		>
			<ListItem button component={RouterLink} to="/transactions">
				<ListItemIcon>
					<MdWallet />
				</ListItemIcon>
				<ListItemText primary="Transactions" />
			</ListItem>

			<ListItem button component={RouterLink} to="/payments">
				<ListItemIcon>
					<MdOutlineRecentActors />
				</ListItemIcon>
				<ListItemText primary="Payments" />
			</ListItem>
			<Grid container justifyContent="center">
				<ListItem button component={RouterLink} to="/transfer">
					<ListItemIcon>
						<MdTrackChanges />
					</ListItemIcon>
					<ListItemText primary="Transfer" />
				</ListItem>
			</Grid>
		</List>
	);
};
