import {User} from "../../interfaces";

export const BinancePaymentPage = ({user} : {user:User}) => {
    return <div>BinancePayment for {user.firstName}</div>;
}