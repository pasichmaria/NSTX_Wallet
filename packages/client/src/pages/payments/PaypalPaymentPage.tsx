import { User } from "../../interfaces";
import {Typography} from "@mui/material";

export const PaypalPaymentPage = ({ user }: { user: User }) => {
	return (
		<Typography variant={"h3"}>Paypal Payment Page for {user.email}</Typography>
	)
};
