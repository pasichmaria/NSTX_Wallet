import {User} from "../../interfaces";

export const PaypalPaymentPage = ({ user } : { user : User }) => {
    return <div>PaypalPayment for {user.lastName}</div>;
}