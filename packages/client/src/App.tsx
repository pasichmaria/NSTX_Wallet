import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { CircularProgress, CssBaseline } from "@mui/material";

import "./App.css";
import { useUser } from "./hooks";
import { Layout } from "./layout";
import {
	HomePage,
	LoginPage,
	NotFoundPage,
	SignUpPage,
	TransactionsTable,
} from "./pages";
import { BalancePage } from "./pages/BalancePage.tsx";
import { SettingsPage } from "./pages/settings";
import { PrivateRoute } from "./route";
import {PaymentBinance, PaymentNSTX, PaymentPaypal} from "./pages/payments";
import {ChoosePaymentMethod} from "./pages/payments/ChoosePaymentMethod.tsx";

function App() {
	const { user } = useUser();

	return (
		<Layout user={user}>
			<Suspense fallback={<CircularProgress />}>
				<CssBaseline />
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/registration" element={<SignUpPage />} />

					<Route
						path="/"
						element={
							<PrivateRoute user={user}>
								<HomePage user={user} />
							</PrivateRoute>
						}
					/>
					<Route
						path="/payments"
						element={
							<PrivateRoute user={user}>
								<ChoosePaymentMethod />
							</PrivateRoute>
						}
					/>
					<Route
						path="/payments/NSTX"
						element={
							<PrivateRoute user={user}>
								<PaymentNSTX />
							</PrivateRoute>
						}
					/>
					<Route
						path="/payments/binance"
						element={
							<PrivateRoute user={user}>
								<PaymentBinance />
							</PrivateRoute>
						}
					/>
					<Route
						path="/payments/paypal"
						element={
							<PrivateRoute user={user}>
								<PaymentPaypal />
							</PrivateRoute>
						}
					/>
					<Route
						path="/transactions"
						element={
							<PrivateRoute user={user}>
								<TransactionsTable user={user} />
							</PrivateRoute>
						}
					/>
					<Route
						path="/balance/:id"
						element={
							<PrivateRoute user={user}>
								<BalancePage user={user} />
							</PrivateRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<PrivateRoute user={user}>
								<SettingsPage user={user} />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
