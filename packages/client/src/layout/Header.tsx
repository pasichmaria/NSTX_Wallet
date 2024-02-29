
import { Link as RouterLink } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Grid,
	IconButton,
	Input,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import {
	MdDarkMode,
	MdLogin,
	MdLogout,
	MdMenu,
	MdReceipt,
	MdSunny,
	MdWallet,
} from "react-icons/md";

import { useLogout } from "../hooks";
import { ThemeContext } from "../theme.tsx";
import {HeaderProps} from "../interfaces";
import {Sidebar} from "./Sidebar.tsx";

export const Header = ({ user }: HeaderProps) => {
	const theme = useTheme();
	const { switchColorMode } = useContext(ThemeContext);
	const activateName = useMemo(
		() => (theme.palette.mode === "dark" ? "Light" : "Dark"),
		[theme],
	);
	const isMobile = useMediaQuery("(max-width:960px)");
	const [value, setValue] = useState(null);
	const { logout } = useLogout({
		onError: () => {
			console.log("Error logging out");
		},
	});
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return user ? (
		<Box >
			{isMobile ? (
				<Grid container justifyContent="space-around" alignItems="center">
					<Box>
						<Box>
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

							<Tooltip title={`Activate ${activateName} Mode`}>
								<IconButton
									onClick={switchColorMode}
									sx={{
										ml: 1,
										mt: 1,
										mb: 1,
										mr: 1,
										p: 1,
										border: `1px ${theme.palette.text.disabled} solid`,
									}}
									size="large"
									color="inherit"
								>
									{theme.palette.mode === "dark" ? (
										<MdSunny />
									) : (
										<MdDarkMode color="action" />
									)}
								</IconButton>
							</Tooltip>
							<Typography
								variant="h5"
								sx={{
									textAlign: "center",
									padding: "20px",
									color: "white",
								}}
							>
								NSTX
							</Typography>
						</Box>

						<Box>
							<Input type={"text"} placeholder={"Search"} fullWidth />
						</Box>
					</Box>
				</Grid>
			) : (
				<BottomNavigation
					value={value}
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						zIndex: 100,
					}}
					onChange={(_event, newValue) => {
						setValue(newValue);
					}}
				>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
						<Box>
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
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: "flex",
								justifyContent: "center",
							}}
						>
							<BottomNavigationAction
								label="recents"
								icon={<MdWallet />}
								component={RouterLink}
								to={"/payments"}
							/>
							<BottomNavigationAction
								label="Transactions"
								icon={<MdReceipt />}
								component={RouterLink}
								to={"/transactions"}
							/>
							{user ? (
								<BottomNavigationAction
									label="Logout"
									icon={<MdLogout />}
									onClick={() => logout()}
								/>
							) : (
								<BottomNavigationAction
									label="Login"
									icon={<MdLogin />}
									component={RouterLink}
									to={"/login"}
								/>
							)}
						</Box>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								padding: "20px",
								color: "white",
								borderShadow: "1px 1px 1px 1px",
								borderColor: "white",
							}}
						>
							NSTX
						</Typography>
						<Tooltip title={`Activate ${activateName} Mode`}>
							<IconButton
								sx={{
									m: 2,
								}}
								onClick={switchColorMode}
								size="small"
								color="inherit"
							>
								{theme.palette.mode === "dark" ? (
									<MdSunny />
								) : (
									<MdDarkMode color="action" />
								)}
							</IconButton>
						</Tooltip>
					</Box>
				</BottomNavigation>
			)}
			<Sidebar
				isMobile={isMobile}
				user={user}
				open={open}
				handleDrawerClose={handleDrawerClose}
			/>
		</Box>
	) : null;
};
