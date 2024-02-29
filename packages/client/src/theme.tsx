import {
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
} from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";

type ThemeContextType = {
	switchColorMode: () => void;
};

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
	switchColorMode: () => {},
});

export function ThemeContextProvider({ children }: ThemeProviderProps) {
	const [mode, setMode] = useState<"light" | "dark">("dark");

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
					...(mode === "light"
						? {
								primary: {
									main: "#6342d2",
									contrastText: "#ffffff",
								},
								secondary: {
									main: "#605b71",
									contrastText: "#ffffff",
								},
								text: {
									primary: "#1c1b1e",
									secondary: "#1c1b1e",
								},
								background: {
									default: "#f3f0f3",
									paper: "rgba(232,173,23,0.9)",
								},
								error: {
									main: "#ba1b1b",
									contrastText: "#ffffff",
								},
								success: {
									main: "#006e10",
									contrastText: "#ffffff",
								},
								info: {
									main: "#0062a2",
									contrastText: "#ffffff",
								},
								warning: {
									main: "#606200",
									contrastText: "#313300",
								},
								divider: "#79757f",
								upvote: {
									main: "#6342d2",
									contrastText: "#ffffff",
								},
								downvote: {
									main: "#ba1b1b",
									contrastText: "#ffffff",
								},
								containerPrimary: {
									main: "#e8deff",
									contrastText: "#1c0062",
								},
								containerSecondary: {
									main: "#e7dff8",
									contrastText: "#1d192b",
								},
						  }
						: {
								primary: {
									main: "#cdbeff",
									contrastText: "#32009a",
								},
								secondary: {
									main: "#cac3dc",
									contrastText: "#322e41",
								},
								text: {
									primary: "#e6e1e6",
									secondary: "#e6e1e6",
								},
								background: {
									default: "#1c1b1e",
									paper: "#1c1b1e",
								},
								error: {
									main: "#ffb4a9",
									contrastText: "#680003",
								},
								success: {
									main: "#79dd72",
									contrastText: "#003a03",
								},
								info: {
									main: "#99cbff",
									contrastText: "#003257",
								},
								warning: {
									main: "#cace09",
									contrastText: "#313300",
								},
								divider: "#938f99",
								upvote: {
									main: "#cdbeff",
									contrastText: "#32009a",
								},
								downvote: {
									main: "#ffb4a9",
									contrastText: "#680003",
								},
								containerPrimary: {
									main: "#4b24ba",
									contrastText: "#e8deff",
								},
								containerSecondary: {
									main: "#494458",
									contrastText: "#e7dff8",
								},
						  }),
				},
			}),
		[mode],
	);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeContext.Provider value={{ switchColorMode }}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</ThemeContext.Provider>
		</StyledEngineProvider>
	);
}
