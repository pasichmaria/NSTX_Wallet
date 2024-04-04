import { Button } from "@mui/material";
import styled from "styled-components";
import bg from "../assets/linear-bg.svg";

export const BigButton = styled(Button)({
	width: "100%",
	backgroundImage: `url(${bg})`,
	color: "white",
	padding: "1rem 2rem",
	fontSize: "1.2rem",
	fontWeight: 500,
	"&:hover": {
		backgroundColor: "#303f9f",
	},
});
