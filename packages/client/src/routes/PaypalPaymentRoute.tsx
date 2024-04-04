import { Navigate } from "react-router-dom";
import { User } from "../interfaces";
import { PaypalPaymentPage } from "../pages";

export const PaypalPaymentRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/" />;
	}
	return <PaypalPaymentPage user={user} />;
};
