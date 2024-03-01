import {Box,Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {BigButton} from "../../components";

export const PaymentsPage = () => {
	const navigate = useNavigate();
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={4}>
				<Box>
					<BigButton
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => navigate("/payments/binance")}
					>
						Via Binance
					</BigButton>
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box  >
					<BigButton
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => navigate("/payments/NSTX")}
					>
						Transfer via NSTX
					</BigButton>
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box >
					<BigButton
						variant="contained"
						fullWidth
						color="primary"
						onClick={() => navigate("/payments/paypal")}
					>
						Paypal
					</BigButton>
				</Box>
			</Grid>
		</Grid>
	);
};
