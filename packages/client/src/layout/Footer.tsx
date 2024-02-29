import { Box, Container, Link, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Copyright() {
	return (
		<Typography variant="body2" color="white">
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/pasichmaria">
				pasichmaria
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const defaultTheme = createTheme();

export const Footer = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box
				component="footer"
				sx={{
					m: 10,
				}}
			>
				<Container maxWidth="sm">
					<Copyright />
				</Container>
			</Box>
		</ThemeProvider>
	);
};
