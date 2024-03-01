import {Box} from "@mui/material";

import {Footer} from "./Footer";
import {Header} from "./Header";
import {User} from "../interfaces";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
	user?: User;
}
export const Layout = ({ children, user }: LayoutProps) => {
	return (
		<>
			<Header user={user} />
			<Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
				{children}
			</Box>
			<Footer />
		</>
	);
};
