import styled from 'styled-components';

interface CardProps {
    firstName: string;
    lastName: string;
    cardNumber: string;
    expirationDate: Date;
}

const BankCardContainer = styled.div`
    width: 343px;
    height: 218px;
    border-radius: 16px;
    position: relative;
    background: linear-gradient(112deg, rgba(9, 9, 9, 0.72) 0%, rgba(22, 166, 147, 0.82) 100%);
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px;
    position: absolute;
    width: 343px;
    height: 218px;
    left: calc(50% - 343px/2);
    top: calc(50% - 218px/2);
`;

const BankNameAndLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    width: 295px;
    height: 24px;
`;

const BankName = styled.div`
    width: 73px;
    height: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`;

const BankLogo = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 10px;
    background:#FCD535
`;

const CardNumberContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CardNumber = styled.div`
    width: auto;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    color: #FFFFFF;
`;

const CopyButton = styled.button`
    margin-left: 8px;
    padding: 4px 8px;
    font-size: 12px;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #090808;
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
`;

const CardHolderName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 118px;
    height: 38px;
`;

const CardHolderText = styled.div`
    width: 106px;
    height: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`;

const ExpirationDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 73px;
    height: 38px;
`;

const ExpirationText = styled.div`
    width: 73px;
    height: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`;

export default function BankCard({ firstName, lastName, cardNumber, expirationDate }: CardProps) {
    return (
        <BankCardContainer>
            <CardContent>
                <BankNameAndLogo>
                    <BankName>BANK</BankName>
                    <BankLogo></BankLogo>
                </BankNameAndLogo>
                <CardNumberContainer>
                    <CardNumber>
                        {/*{cardNumber}*/}
                        1234 5678 9101 1121
                    </CardNumber>
                    <CopyButton>Copy</CopyButton>
                </CardNumberContainer>
                <CardHolderAndExpiration>
                    <CardHolderName>
                        <CardHolderText>
                            {/*{firstName} {lastName}*/}
                            Maria Pasichnyk
                        </CardHolderText>
                    </CardHolderName>
                    <ExpirationDate>
                        <ExpirationText>
                            {/*{expirationDate}*/}
                            10/2028
                        </ExpirationText>
                    </ExpirationDate>
                </CardHolderAndExpiration>
            </CardContent>
        </BankCardContainer>
    );
}
