import { User } from "../interfaces";
import { Navigate } from "react-router-dom";
import { PaypalPaymentPage} from "../pages";

export const PaypalPaymentRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/login" />;
	}
	return <PaypalPaymentPage user={user} />;
};
