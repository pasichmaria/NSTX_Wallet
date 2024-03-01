import { User } from "../interfaces";
import { Navigate } from "react-router-dom";
import { SettingsPage} from "../pages";

export const SettingsPageRoute = ({ user }: { user?: User }) => {
	if (!user) {
		return <Navigate to="/login" />;
	}
	return <SettingsPage user={user} />;
};
