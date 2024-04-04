import { Navigate } from "react-router-dom";
import { User } from "../interfaces";
import { TransactionsPage } from "../pages/transaction";

export const TransactionPageRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/" />;
	}
	return <TransactionsPage user={user} />;
};
