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
import { MdOutlineRecentActors, MdSettings, MdWallet } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { useBalances, useLogout } from "../hooks";

interface SidebarProps {
	open: boolean;
	user: any;
	handleDrawerClose: () => void;
	isMobile: boolean;
}

export const Sidebar = ({
	user,
	open,
	handleDrawerClose,
	isMobile,
}: SidebarProps) => {
	const { logout } = useLogout({
		onSuccess: () => {
			console.log("Logout success");
		},
		onError: (error) => {
			console.log("Logout error", error);
		},
	});
	const { balances } = useBalances({ user });
	return (
		<Drawer
			variant="temporary"
			anchor="left"
			open={open}
			onClose={handleDrawerClose}
			sx={{
				"& .MuiDrawer-paper": {
					width: isMobile ? "100%" : "380px",
					boxSizing: "border-box",
					borderRadius: "0px 25px 25px 0px ",
					backgroundImage: " linear-gradient(180deg, #FFC107 0%, #FF8F00 100%)",
					textColor: "black",
				},
			}}
		>
			<Grid container direction="row" alignItems="center" margin="20px">
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
							color: "black",
						}}
					>
						{user?.firstName} {user?.lastName}
					</Typography>
				</Grid>
				<Grid item sx={{ marginLeft: "auto" }}>
					<Button
						variant="contained"
						startIcon={<MdSettings />}
						component={RouterLink}
						to={"/settings"}
						sx={{
							color: "black",
							marginRight: 2,
						}}
					/>
				</Grid>
			</Grid>
			<Grid
				container={true}
				justifyContent="center"
				sx={{
					mt: 2,
				}}
			/>
			<Button
				variant="contained"
				startIcon={<MdWallet />}
				component={RouterLink}
				to={"/page"}
				sx={{
					color: "black",
					marginRight: 2,
				}}
			>
				PAGWE
			</Button>

			<CustomListItems user={user} />
			{isMobile && <Button onClick={handleDrawerClose}>Close</Button>}
			{user && <Button onClick={() => logout()}>Logout</Button>}
		</Drawer>
	);
};

export const CustomListItems = ({
	user,
}: {
	user: any;
}) => {
	return (
		<List
			sx={{
				"& .MuiListItem-root": {
					color: "black",
					padding: "20px",
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.34)",
						transition: "background-color 0.4s ease-in-out",
					},
					"& .MuiListItemIcon-root": {
						color: "black",
					},
				},
			}}
		>
			<ListItem button component={RouterLink} to="/transactions">
				<ListItemIcon>
					<MdWallet />
				</ListItemIcon>
				<ListItemText primary="Wallet" />
			</ListItem>

			<ListItem button component={RouterLink} to="/transactions">
				<ListItemIcon>
					<MdOutlineRecentActors />
				</ListItemIcon>
				<ListItemText primary="Receipts" />
			</ListItem>
			<Grid container justifyContent="center">
				<ListItem button component={RouterLink} to="/transactions">
					<ListItemIcon>
						<MdOutlineRecentActors />
					</ListItemIcon>
					<ListItemText primary="Receipts" />
				</ListItem>
			</Grid>
		</List>
	);
};
