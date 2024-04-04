import { useState } from "react";
import styled from "styled-components";
import { Balance, User } from "../../interfaces";

interface BankCardProps {
	balance: Balance;
	user?: User | null;
	onClick?: () => void;
}
const BankCardContainer = styled.div<{ selected: boolean }>`
  padding: 24px;
  border-radius: 16px;
  box-shadow: ${({ selected }) =>
		selected
			? "0 8px 16px rgba(0, 0, 0, 0.25)"
			: "0 4px 4px rgba(0, 0, 0, 0.25)"};
  background: ${
		({ selected }) =>
			selected
				? "linear-gradient(112deg, #ffc107 0%, black 100%)" // Orange to black gradient for selected state
				: "linear-gradient(112deg, #ffc107 0%, v 100%)" // Orange to dark orange gradient for unselected state
	};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }
`;

const BankNameAndLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const BankLogo = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fcd535;
`;

const CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CopyButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  font-size: 12px;
  background-color: transparent;
  color: ${({ selected }) => (selected ? "#000000" : "#090808")};
  cursor: pointer;
  border: none;
`;

const CardHolderAndExpiration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`;

const CardHolderName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardHolderText = styled.div`
  color: ${({ selected }) => (selected ? "#000000" : "#ffffff")};
  font-size: 12px;
`;

const ExpirationDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpirationText = styled.div`
  color: ${({ selected }) => (selected ? "#000000" : "#ffffff")};
  font-size: 12px;
`;

export const BalanceCard = ({ balance, user, onClick }: BankCardProps) => {
	const [selected, setSelected] = useState(false);

	const handleCardClick = () => {
		setSelected(!selected);
		if (onClick) {
			onClick();
		}
	};

	return (
		<BankCardContainer selected={selected} onClick={handleCardClick}>
			<BankNameAndLogo>
				<BankName selected={selected}>Wallet</BankName>
				<BankLogo>NSTX</BankLogo>
			</BankNameAndLogo>
			<CardNumberContainer>
				<CardNumber selected={selected}>
					**** **** **** {balance.id.substr(balance.id.length - 4)}
				</CardNumber>
				<CopyButton selected={selected}>Copy</CopyButton>
			</CardNumberContainer>
			<CardHolderAndExpiration>
				<CardHolderName>
					<CardHolderText selected={selected}>
						{user?.firstName} {user?.lastName}
					</CardHolderText>
				</CardHolderName>
				<ExpirationDate>
					<ExpirationText selected={selected}>Exp: MM/YYYY</ExpirationText>
				</ExpirationDate>
			</CardHolderAndExpiration>
			<div>
				Balance: {balance.value} {balance.currency}
			</div>
		</BankCardContainer>
	);
};
