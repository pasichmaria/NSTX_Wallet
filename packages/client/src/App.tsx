import { CircularProgress, CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import { useUser } from "./hooks";
import { Layout } from "./layout";
import {
  LoginPage,
  NotFoundPage,
  NSTXPaymentPage,
  PaymentsPage,
  SignUpPage
} from "./pages";
import {
  BalancePageRoute,
  BinancePaymentRoute,
  PaypalPaymentRoute,
  PrivateRoute,
  SettingsPageRoute,
} from "./routes";

function App() {
  const { getUser, user } = useUser();

  return (
    <Layout user={user} getUser={getUser}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<CircularProgress />}>
        <CssBaseline />
        <Routes>
          <Route path="/registration" element={<SignUpPage />} />
          <Route
            path="/"
            element={<LoginPage user={user} getUser={getUser} />}
          />
          <Route
            path="/payments"
            element={
              <PrivateRoute user={user}>
                <PaymentsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/payments/NSTX"
            element={
              <PrivateRoute user={user}>
                <NSTXPaymentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/payments/binance"
            element={<BinancePaymentRoute user={user} />}
          />
          <Route
            path="/payments/paypal"
            element={<PaypalPaymentRoute user={user} />}
          />
          <Route
            path="/balance/:id"
            element={<BalancePageRoute user={user} />}
          />
          <Route path="/settings" element={<SettingsPageRoute user={user} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
