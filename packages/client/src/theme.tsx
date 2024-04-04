import { useMediaQuery } from "@mui/material";
import {
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
} from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";

type ThemeContextType = {
	switchColorMode: () => void;
	isMobile: boolean;
};

type ThemeContextProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
	switchColorMode: () => {},
	isMobile: false,
});

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	const [mode, setMode] = useState<"dark" | "light">("dark"); // Keep consistent naming convention

	const isMobile = useMediaQuery("(max-width:600px)");

	const switchColorMode = () => {
		setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
	};

	const theme = useMemo(
		() =>
			createTheme({
				typography: {
					fontFamily: ["Chakra Petch", "sans-serif"].join(","),
				},
				palette: {
					mode,
					...(mode === "dark"
						? {
								primary: {
									main: "#1D1F2E",
									light: "rgba(48, 131, 191, 1)",
								},
								secondary: {
									main: "#27DEBF",
								},
								background: {
									default: "#121017",
									paper: "#171723",
								},
								info: {
									main: "#27DEBF",
								},
								text: {
									primary: "#eeeeee",
									secondary: "#eeeeee",
								},
								divider: "#04f5da",
						  }
						: {
								primary: {
									main: "rgba(134, 88, 134, 1)",
								},
								background: {
									default: "#f1f1f1",
									paper: "#171723",
								},
								secondary: {
									main: "#27DEBF",
								},
								info: {
									main: "#27DEBF",
								},
								text: {
									primary: "#e3e3e3",
									secondary: "#bfbdc5",
								},
								divider: "#04f5da",
						  }),
				},
			}),
		[mode],
	);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeContext.Provider value={{ switchColorMode, isMobile }}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</ThemeContext.Provider>
		</StyledEngineProvider>
	);
}
