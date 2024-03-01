import { Button, CircularProgress, Grid, Typography } from "@mui/material";

import { BalanceCard } from "../components";
import { useBalances } from "../hooks";

import { useNavigate } from "react-router-dom";
import { User } from "../interfaces";

export const HomePage = ({ user }: { user: User }) => {
	const { balances, isError, isLoading } = useBalances({ userId: user.id });
	const navigate = useNavigate();
	const handleViewBalance = (id: string) => {
		navigate(`/balance/${id}`);
	};

	if (isLoading || !balances) {
		return <CircularProgress />;
	}
	if (isError) {
		return <Typography variant="h4">Error</Typography>;
	}

	return (
		<Grid container spacing={2} direction="column">
			{balances.map((balance) => (
				<Grid item xs={12} sm={4} key={balance.id} sx={{ mt: 2 }}>
					<BalanceCard user={user} balance={balance} />
					<Button onClick={() => handleViewBalance(balance.id)}>View</Button>
				</Grid>
			))}
		</Grid>
	);
};