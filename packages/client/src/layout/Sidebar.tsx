import React, {useContext} from "react";
import {Button, Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText,} from "@mui/material";
import {MdLogout, MdOutlineRecentActors, MdSettings} from "react-icons/md";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {User} from "../interfaces";
import {ThemeContext} from "../theme";
import {useBalances, useLogout} from "../hooks";
import {CardInfoBalance} from "../components";
import {getUser} from "../API";

interface SidebarProps {
	open: boolean;
	user?: User;
	handleDrawerClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
	user,
	open,
	handleDrawerClose,
}) => {
	const isMobile = useContext(ThemeContext).isMobile;
	const handleCloseAndLink = () => {
		if (isMobile) {
			handleDrawerClose();
		}
	};
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
					padding: 4,
					position: "relative",
				}}
			>
				{/*<Grid*/}
				{/*	item*/}
				{/*	sx={{*/}
				{/*		display: "flex",*/}
				{/*		justifyContent: "center",*/}
				{/*		alignItems: "center",*/}
				{/*		marginRight: "20px",*/}
				{/*	}}*/}
				{/*>*/}
				{/*	<Avatar*/}
				{/*		onClick={() => {*/}
				{/*			navigate("/profile");*/}
				{/*			handleDrawerClose();*/}
				{/*		}}*/}
				{/*		src={user?.avatar}*/}
				{/*		sx={{*/}
				{/*			width: 60,*/}
				{/*			height: 60,*/}
				{/*			margin: "auto",*/}
				{/*		}}*/}
				{/*	/>*/}
				{/*</Grid>*/}
				{/*<Grid item sx={{ marginTop: 2 }}>*/}
				{/*	<Typography*/}
				{/*		variant="h6"*/}
				{/*		sx={{*/}
				{/*			color: "white",*/}
				{/*			maxWidth: "150px",*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		{user?.firstName} {user?.lastName}*/}
				{/*	</Typography>*/}
				{/*</Grid>*/}
				<Grid item sx={{ right: 0, position: "absolute" }}>
					<Button
						variant="contained"
						startIcon={<MdSettings />}
						component={RouterLink}
						to={"/settings"}
						sx={{
							color: "white",
						}}
					/>
				</Grid>
			</Grid>
			<CustomListItems handleCloseAndLink={handleCloseAndLink} user={user} />
			{isMobile && <Button onClick={handleDrawerClose}>Close</Button>}
		</Drawer>
	);
};

interface CustomListItemsProps {
	handleCloseAndLink: () => void;
	user?: User;
}

const CustomListItems: React.FC<CustomListItemsProps> = ({
	user,
	handleCloseAndLink,
}) => {
	const { balances } = useBalances({
		userId: user?.id || "",
	});
	const navigate = useNavigate();
	const { logout } = useLogout({
		onSuccess: () => {
			getUser();
			navigate("/");
		},
		onError: () => {
		},
	});
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
			{balances?.map((balance) => (
				<ListItem
					key={balance.id}
					button
					component={RouterLink}
					to={`/balance/${balance.id}`}
					onClick={handleCloseAndLink}
				>
					<CardInfoBalance
						id={balance.id}
						currency={balance.currency}
						value={balance.value}
						onClick={() => {}}
					/>
				</ListItem>
			))}
			<ListItem
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					fullWidth
					color="secondary"
					variant="outlined"
					component={RouterLink}
					to="/balances"
					onClick={handleCloseAndLink}
				>
					Create a new card
				</Button>
			</ListItem>
			<Divider orientation="horizontal" flexItem  sx={{mt : 2}}/>
				<ListItem
				button
				component={RouterLink}
				to="/payments"
				onClick={handleCloseAndLink}
			>
				<ListItemIcon>
					<MdOutlineRecentActors />
				</ListItemIcon>
				<ListItemText primary="Payments" />
			</ListItem>
			<ListItem
				button
				component={RouterLink}
				to="/profile"
				onClick={handleCloseAndLink}
			>
				<ListItemIcon>
					<MdOutlineRecentActors />
				</ListItemIcon>
				<ListItemText primary="Profile" />
			</ListItem>
			<ListItem
				button
				onClick={logout}
			>
				<ListItemIcon>
					<MdLogout />
				</ListItemIcon>
				<ListItemText primary="Logout" />
			</ListItem>
		</List>
	);
};
