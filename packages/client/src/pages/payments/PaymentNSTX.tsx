import React, {useState} from "react";
import {Box, Grid, Paper, Select, TextField, Typography} from "@mui/material";
import {BigButton} from "../error";
import {useNavigate} from "react-router-dom";

interface TransferFormData {
	recipient: string;
	amount: number;
}

export const PaymentNSTX = ({ user }: any) => {
	const [formData, setFormData] = useState<TransferFormData>({
		recipient: "",
		amount: 0,
	});
	const navigate = useNavigate();

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name as string]: value,
		}));
	};

	return (
		<Grid
			component={Paper}
			container
			spacing={2}
			sx={{ backgroundColor: "rgba(33,89,173,0)", boxShadow: 5, padding: 6 }}
		>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="stretch"
				height="100%"
			>

				<Typography variant="h4" gutterBottom>
					Переказ на інший рахунок
				</Typography>

				<form style={{ width: "100%" }}>
					<TextField
						fullWidth
						label="Отримувач"
						name="recipient"
						value={formData.recipient}
						onChange={handleFormChange}
						margin="normal"
						variant="outlined"
						required
					/>
					<Select
						fullWidth
						label="Отримувач"
						name="recipient"
						value={formData.recipient}
						onChange={handleFormChange}
						margin="normal"
						variant="outlined"
						required
					>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Select>

					<TextField
						fullWidth
						label="Сума переказу"
						name="amount"
						type="number"
						value={formData.amount}
						onChange={handleFormChange}
						margin="normal"
						variant="outlined"
						required
					/>

					<Grid container direction={'row'} spacing={6}>
						<Grid item xs={6} >
						<BigButton
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							onClick={() => navigate("/transaction")}
						>
							Cancel
						</BigButton>
					</Grid>
					<Grid item xs={6}  >
						<BigButton
							fullWidth
							type="submit"
							variant="contained"
							color="primary"
						>
							Transfer
						</BigButton>
					</Grid>
					</Grid>
				</form>
			</Box>
		</Grid>
	);
};
