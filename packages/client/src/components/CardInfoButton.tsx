import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import Logo from "../assets/logo.tsx";
import bg from "../assets/linear-bg.svg";

interface CardBalanceProps {
	id?: string | undefined;
	value?: number;
	currency?: string;
	onClick?: () => void;
}

export const CardInfoBalance: React.FC<CardBalanceProps> = ({
	id,
	currency,
	value,
	onClick,
}) => {
	const formatBalanceId = (id: string) => {
		return (
			id
				?.toUpperCase()
				.match(/.{1,4}/g)
				?.join(" ") || ""
		);
	};

	return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "300px",
        borderRadius: "25px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          cursor: "pointer",
          boxShadow: "0px 0px 10px 0px #27DEBF"
        },
        "&:active": {
          transform: "scale(1.1)",
          boxShadow: "0px 0px 10px 0px #27DEBF"
        }
      }}
      onClick={onClick}
    >
      <Grid sx={{ padding: "15px" }}>
        <Grid container alignItems={"center"}>
          <Grid item xs={3}>
            <Logo />
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontSize: "10px",
                letterSpacing: "0.1em"
              }}
            >
              {formatBalanceId(id)}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={4}>
            <Typography
              variant="body1"
              sx={{
                color: "#27DEBF",
                fontSize: "12px"
              }}
            >
              Balance
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontSize: "10px",
                letterSpacing: "0.1em"
              }}
            >
              {value} {currency}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
