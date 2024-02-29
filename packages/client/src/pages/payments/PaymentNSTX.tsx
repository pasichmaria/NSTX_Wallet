import {Box, Grid, Paper, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";

import {BigButton} from "../../components";


export const PaymentNSTX = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			recipient: "",
			amount: 0,
			description: "",
		},
		onSubmit: (_values) => {
			navigate("/transaction");
		},
	});

	return (
		<>
		<Typography variant="h4" align="center" gutterBottom>
			Transfer NSTX
		</Typography>
		<Grid
			component={Paper}
			container
			justifyContent="center"
			alignItems="center"
			sx={{
				boxShadow: 6,
				transition : "0.3s",
				padding: 6,
			}}
		>
				<form onSubmit={formik.handleSubmit}>
					<Box sx={{ marginBottom: 2 }}>
						<TextField
							fullWidth
							label="Recipient"
							name="recipient"
							value={formik.values.recipient}
							onChange={formik.handleChange}
						/>
					</Box>
					<Box sx={{ marginBottom: 4}}>
						<TextField
							fullWidth
							label="Amount"
							name="amount"
							value={formik.values.amount}
							onChange={formik.handleChange}
						/>
						<TextField
							fullWidth
							label="Description"
							name="description"
							sx={{mt : 2
                        }}
							value={formik.values.description}
							onChange={formik.handleChange}
						/>

					</Box>

					<Grid container direction="row" spacing={2}>
						<Grid item xs={6}>
							<BigButton
								type="button"
								fullWidth
								variant="contained"
								color="primary"
								onClick={() => navigate("/payments")}
							>
								Cancel
							</BigButton>
						</Grid>
						<Grid item xs={6}>
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
			</Grid>
			</>
	)
};
