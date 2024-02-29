import bg from '../assets/linear-bg.svg';
import {Button} from "@mui/material";
import styled from "styled-components";

export const BigButton = styled(Button)({
    backgroundImage : `url(${bg})`,
    color: "white",
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    fontWeight: 700,
    "&:hover": {
        backgroundColor: "#303f9f",
    },
});