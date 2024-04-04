import { Box, Grid } from "@mui/material";
import React from "react";

import { User } from "../interfaces";
import { Header } from "./Header";

interface LayoutProps {
	children: React.ReactNode;
	user?: User;
	getUser: () => void;
}
export const Layout = ({ children, user, getUser }: LayoutProps) => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header user={user} getUser={getUser} />
			</Grid>
			<Grid item xs={12}>
				<Box p={2}>{children}</Box>
			</Grid>
		</Grid>
	);
};
