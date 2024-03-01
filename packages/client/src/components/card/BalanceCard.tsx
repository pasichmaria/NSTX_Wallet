import styled from "styled-components";
import {Balance, User} from "../../interfaces";

interface BankCardProps {
	balance: Balance;
	user: User;
}

const BankCardContainer = styled.div`
    padding: 24px;
    border-radius: 16px;
    box-shadow : 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: linear-gradient(112deg, rgba(9, 9, 9, 0.72) 0%, rgba(214, 160, 234, 0.82) 100%);
    @media (max-width: 510px) {
        padding: 26px;
    }
`;

const BankNameAndLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    width: 295px;
    height: 24px;
    margin: 0 auto;

    @media (max-width: 510px) {
        width: auto;
        justify-content: center;
    }
`;

const BankName = styled.div`
    width: 73px;
    height: 24px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #ffffff;
    @media (max-width: 510px) {
        font-size: 14px;
    }
`;

const BankLogo = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 10px;
    background: #fcd535;
`;

const CardNumberContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CardNumber = styled.div`
    height: 32px;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;

    @media (max-width: 510px) {
        font-size: 18px;
    }
`;

const CopyButton = styled.button`
    margin-left: 8px;
    padding: 4px 8px;
    font-size: 12px;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #090808;

    @media (max-width: 510px) {
        font-size: 10px;
    }
`;

const CardHolderAndExpiration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    width: 295px;
    height: 38px;

    @media (max-width: 510px) {
        width: auto;
        justify-content: center;
    }
`;

const CardHolderName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

const CardHolderText = styled.div`
    height: 18px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;

    @media (max-width: 510px) {
        font-size: 10px;
    }
`;

const ExpirationDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ExpirationText = styled.div`
    height: 18px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;

    @media (max-width: 510px) {
        font-size: 10px;
    }
`;

export const BalanceCard = ({ balance, user }: BankCardProps) => {
	return (
		<BankCardContainer>
			<BankNameAndLogo>
				<BankName>Wallet</BankName>
				<BankLogo>NSTX</BankLogo>
			</BankNameAndLogo>
			<CardNumberContainer>
				<CardNumber>
					**** **** **** {balance.id.substr(balance.id.length - 4)}
				</CardNumber>
				<CopyButton>Copy</CopyButton>
			</CardNumberContainer>
			<CardHolderAndExpiration>
				<CardHolderName>
					<CardHolderText>
						{user.firstName} {user.lastName}
					</CardHolderText>
				</CardHolderName>
				<ExpirationDate>
					<ExpirationText>Exp: MM/YYYY</ExpirationText>
				</ExpirationDate>
			</CardHolderAndExpiration>
			<div>
				<span>
					Balance: {balance.value} {balance.currency}
				</span>
			</div>
		</BankCardContainer>
	);
};
