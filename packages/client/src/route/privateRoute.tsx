import { Navigate } from "react-router";
import { routeProps } from "../interfaces";

export const PrivateRoute = ({ children, user }: routeProps) => {
	if (!user) {
		return <Navigate to="/login" />;
	}
	return children;
};
