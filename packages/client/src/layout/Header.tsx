import {
	Box,
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Grid,
	IconButton,
	Paper,
	Tooltip,
	Typography,
	useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import {
	MdDarkMode,
	MdLogout,
	MdMenu,
	MdNotifications,
	MdSunny,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks";
import { User } from "../interfaces";
import { ThemeContext } from "../theme.tsx";
import { Sidebar } from "./Sidebar.tsx";

interface HeaderProps {
	user?: User;
	getUser: () => void;
}
const notifications = [
	"Notification 1",
	"Notification 2",
	"Notification 3",
	"Notification 4",
	"Notification 5",
	"Notification 6",
	"Notification 7",
	"Notification 8",
	"Notification 9",
	"Notification 10",
	"Notification 19",
	"Notification 20",
];

export const Header = ({ user, getUser }: HeaderProps) => {
	const theme = useTheme();
	const { switchColorMode } = useContext(ThemeContext);
	const activateName = theme.palette.mode === "dark" ? "Light" : "Dark";
	const isMobile = useContext(ThemeContext).isMobile;
	const [open, setOpen] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [openNotification, setOpenNotification] = useState(false); // Добавлено состояние для уведомления
	const navigate = useNavigate();

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const { logout } = useLogout({
		onSuccess: () => {
			getUser();
			navigate("/");
			console.log("Logout success");
		},
		onError: () => {
			console.log("Logout error");
		},
	});

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};
	const handleLogout = () => {
		logout();
		setOpenDialog(false);
	};
	const handleClose = () => {
		setOpenDialog(false);
	};

	const handleOpenNotification = () => {
		setOpenNotification(true);
	};

	const handleCloseNotification = () => {
		setOpenNotification(false);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Container
				maxWidth={false}
				sx={{
					position: "fixed",
					top: 0,
					right: 0,
					left: 0,
					zIndex: 1000,
					backgroundColor:
						theme.palette.mode === "dark" ? "#121017" : "#171723",
					boxShadow:
						theme.palette.mode === "dark" ? "none" : "0px 0px 10px 0px #27DEBF",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<IconButton
							sx={{
								m: 2,
							}}
							size="medium"
							color="inherit"
							onClick={handleDrawerOpen}
						>
							<MdMenu />
						</IconButton>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								padding: "20px",
								color: "white",
							}}
						>
							NSTX Wallet
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Tooltip title={"Notifications"}>
							<IconButton
								sx={{
									m: 2,
								}}
								onClick={handleOpenNotification}
								size="medium"
								color="secondary"
							>
								<MdNotifications />
							</IconButton>
						</Tooltip>

						<Tooltip title={`Activate ${activateName} Mode`}>
							<IconButton
								sx={{
									m: 2,
								}}
								onClick={switchColorMode}
								size="medium"
								color="inherit"
							>
								{theme.palette.mode === "dark" ? (
									<MdSunny />
								) : (
									<MdDarkMode color="action" />
								)}
							</IconButton>
						</Tooltip>

						<Tooltip title="Logout">
							<IconButton
								sx={{
									m: 2,
								}}
								size="medium"
								color="inherit"
								onClick={handleOpenDialog}
							>
								<MdLogout />
							</IconButton>
						</Tooltip>
					</Box>
				</Box>
			</Container>

			<Sidebar open={open} handleDrawerClose={handleDrawerClose} user={user} />

			<Dialog
				open={openDialog}
				onClose={handleClose}
				PaperProps={{
					sx: {
						border: "1px solid #27DEBF",
						boxShadow: "0px 0px 10px 0px #27DEBF ",
						borderRadius: "25px",
					},
				}}
				transitionDuration={{ enter: 700, exit: 700 }}
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to logout?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Grid container justifyContent="space-around" alignItems="center">
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={handleLogout} autoFocus>
							Logout
						</Button>
					</Grid>
				</DialogActions>
			</Dialog>

			<Dialog
				open={openNotification}
				onClose={handleCloseNotification}
				sx={{
					"& .MuiDialog-paper": {
						border: "1px solid #fcd535",
						boxShadow: "0px 0px 10px 0px #fcd535",
						borderRadius: "25px",
					},
					"& .MuiPaper-root": {
						borderRadius: "25px",
					},
				}}
			>
				<Paper
					sx={{
						position: "fixed",
						top: isMobile ? 60 : 80,
						right: 10,
						color: "black",
						overflowY: "auto",
						display: "flex",
						width: "300px",
						flexDirection: "column",
						backgroundColor: "primary.main",
						borderRadius: 10,
						boxShadow: 24,
						padding: "10px",
					}}
					elevation={24}
				>
					{notifications.map((notification) => (
						<Typography variant="body1" color="black" gutterBottom>
							{notification}
						</Typography>
					))}
				</Paper>
			</Dialog>
		</Box>
	);
};
