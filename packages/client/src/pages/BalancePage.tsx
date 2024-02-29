import { CircularProgress, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useBalance } from "../hooks";

export const BalancePage = ({ user }: { user: any }) => {
	const params = useParams();

	const id = params.id as string;

	const { balance, isError, isLoading } = useBalance({
		userId: user.id,
		id,
	});

	if (isLoading) {
		return <CircularProgress />;
	}
	if (isError) {
		return <Typography variant="h4">Error</Typography>;
	}
	return (
		<Grid container spacing={2} direction="column">
			<Grid item xs={12} sx={{ mt: 2 }}>
				<Typography variant="h4">{balance.amount}</Typography>
				<Typography variant="h6">{balance.currency}</Typography>
				<Typography variant="h6">{balance.id}</Typography>
			</Grid>
		</Grid>
	);
};
