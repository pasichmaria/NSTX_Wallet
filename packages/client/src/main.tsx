import { CssBaseline } from "@mui/material";
import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./App.css";
import "./index.css";
import { ThemeContextProvider } from "./theme.tsx";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ThemeContextProvider>
						<CssBaseline />
						<App />
					</ThemeContextProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</CookiesProvider>
	</React.StrictMode>,
);
