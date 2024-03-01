import React from "react";
import { Navigate } from "react-router-dom";

import { User } from "../interfaces";

interface RouteProps {
	children: React.ReactNode;
	user?: User;
}

export const PrivateRoute = ({ children, user }: RouteProps) => {
	if (!user) {
		return <Navigate to="/login" />;
	}
	return children;
};
