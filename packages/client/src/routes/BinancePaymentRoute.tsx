import { Navigate } from "react-router-dom";
import { User } from "../interfaces";
import { BinancePaymentPage } from "../pages";

export const BinancePaymentRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/" />;
	}
	return <BinancePaymentPage user={user} />;
};
