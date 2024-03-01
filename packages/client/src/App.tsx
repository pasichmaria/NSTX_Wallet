import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import {CircularProgress, CssBaseline} from "@mui/material";

import {useUser} from "./hooks";
import {Layout} from "./layout";
import {LoginPage, NotFoundPage, NSTXPaymentPage, PaymentsPage, SignUpPage} from "./pages";
import {
	BalancePageRoute,
	BinancePaymentRoute,
	HomePageRoute,
	PaypalPaymentRoute,
	PrivateRoute,
	SettingsPageRoute,
	TransactionPageRoute
} from "./routes";

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
							<HomePageRoute user={user}/>
						}
					/>
					<Route
						path="/payments"
						element={
							<PrivateRoute user={user}>
								<PaymentsPage/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/payments/NSTX"
						element={
							<PrivateRoute user={user}>
								<NSTXPaymentPage/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/payments/binance"
						element={
							<BinancePaymentRoute user={user}/>
						}
					/>
					<Route
						path="/payments/paypal"
						element={
							<PaypalPaymentRoute user={user}/>
						}
					/>
					<Route
						path="/balance/:id"
						element={
							<BalancePageRoute user={user}/>
						}
					/>
					<Route
						path="/transactions"
						element={
							<TransactionPageRoute user={user}/>
						}
					/>


					<Route
						path="/settings"
						element={
							<SettingsPageRoute user={user}/>
						}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
