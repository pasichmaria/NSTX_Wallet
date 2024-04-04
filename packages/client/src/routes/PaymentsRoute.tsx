import { Navigate } from "react-router-dom";
import { User } from "../interfaces";
import { PaymentsPage } from "../pages";

export const PaymentsRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/" />;
	}
	return <PaymentsPage />;
};
