import {User} from "../../interfaces";
import {Typography} from "@mui/material";

export const BinancePaymentPage = ({ user }: { user: User }) => {
	return (
		<Typography variant={"h3"}>Binance Payment Page for {user.email}</Typography>
	)
};
