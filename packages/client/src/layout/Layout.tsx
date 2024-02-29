import { Box } from "@mui/material";

import { LayoutProps } from "../interfaces";
import { Footer } from "./Footer";
import { Header } from "./Header";
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
