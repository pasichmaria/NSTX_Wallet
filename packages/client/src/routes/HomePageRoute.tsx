import { User } from "../interfaces";
import { Navigate } from "react-router-dom";
import { HomePage } from "../pages";

export const HomePageRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/login" />;
	}
	return <HomePage user={user} />;
};
