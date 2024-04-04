import { Navigate } from "react-router-dom";
import { User } from "../interfaces";
import { BalancePage } from "../pages";

export const BalancePageRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/" />;
	}
	return <BalancePage user={user} />;
};
