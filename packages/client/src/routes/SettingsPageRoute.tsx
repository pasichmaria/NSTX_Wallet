import { Navigate } from "react-router-dom";
import { User } from "../interfaces";
import { SettingsPage } from "../pages";

export const SettingsPageRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/" />;
	}
	return <SettingsPage user={user} />;
};
