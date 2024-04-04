import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

interface CardBalanceProps {
	balance: {
		id: string;
		value: number;
		currency: string;
	};
	onClick: () => void;
}

export const CardInfoBalance: React.FC<CardBalanceProps> = ({
	balance,
	onClick,
}) => {
	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: "25px",
				backgroundColor: "#2d2d2d",
				boxShadow: "0px 0px 10px 0px #27DEBF",
				transition: "transform 0.2s",
				"&:hover": {
					transform: "scale(1.05)",
					cursor: "pointer",
					boxShadow: "0px 0px 10px 0px #27DEBF",
				},
				"&:active": {
					transform: "scale(1.1)",
					boxShadow: "0px 0px 10px 0px #27DEBF",
				},
			}}
			onClick={onClick}
		>
			<CardContent>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item>
						<Typography
							variant="h5"
							sx={{
								color: "#27DEBF",
								ml: 2,
							}}
						>
							{balance.value} {balance.currency}
						</Typography>
					</Grid>
				</Grid>
				<Typography variant="body2">{balance.id}</Typography>
			</CardContent>
		</Card>
	);
};
