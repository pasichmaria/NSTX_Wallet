import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { CircularProgress, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { useUser } from "./hooks";
import { Layout } from "./layout";
import {
  BalancePage,
  BinancePaymentPage,
  CreateBalancePage,
  LoginPage,
  NotFoundPage,
  NSTXPaymentPage,
  PaymentsPage,
  PaypalPaymentPage,
  SettingsPage,
  SignUpPage,
  TransactionDetailsPage
} from "./pages";
import { PrivateRoute } from "./routes";

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
                <PaymentsPage user={user} />
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
            element={<BinancePaymentPage user={user} />}
          />
          <Route path="/payments/paypal" element={<PaypalPaymentPage />} />
          <Route
            path="/balance/:id"
            element={
              <PrivateRoute user={user}>
                <BalancePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction/:id"
            element={
              <PrivateRoute user={user}>
                <TransactionDetailsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create/balance"
            element={<CreateBalancePage user={user} />}
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute user={user}>
                <SettingsPage />
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
