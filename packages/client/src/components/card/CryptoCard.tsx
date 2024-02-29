import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import { MdArrowRight } from "react-icons/md";
import styled from "styled-components";

interface CurrencyCardProps {
	icon: ReactNode;
	label: string;
	percentage: string;
}

const CurrencyCardContainer = styled.div`
    width: 342px;
    height: 80px;
    background: linear-gradient(126.97deg, rgb(61, 63, 65) 28.26%, rgb(61, 63, 65) 28.26%, rgb(61, 63, 65) 28.26%);
    backdrop-filter: blur(60px);
    border-radius: 20px;
    margin-bottom: 20px;
`;

const CardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 100%;
`;

const CurrencyInfo = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    margin-right: 10px;
    color: white; /* Color for the icon */
`;

const CurrencyLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;

const PercentageLabel = styled.div`
    font-size: 14px;
    color: white;
    opacity: 0.8;
`;
const CurrencyButton = styled(Button)`
    padding: 0;
    color: #030302;
    background: none;
    border: none;
    font-size: 24px;

    &:hover {
        color: #FCD535;
    }
`;

const CryptoCard: React.FC<CurrencyCardProps> = ({
	icon,
	label,
	percentage,
}) => {
	return (
		<CurrencyCardContainer>
			<CardContent>
				<CurrencyInfo>
					<IconContainer>{icon}</IconContainer>
					<div>
						<CurrencyLabel>{label}</CurrencyLabel>
						<PercentageLabel>{percentage} %</PercentageLabel>
					</div>
				</CurrencyInfo>
				<CurrencyButton>
					<MdArrowRight />
				</CurrencyButton>
			</CardContent>
		</CurrencyCardContainer>
	);
};

export default CryptoCard;
