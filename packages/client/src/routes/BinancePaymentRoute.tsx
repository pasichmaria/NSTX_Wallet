import { User } from "../interfaces";
import { Navigate } from "react-router-dom";
import { BinancePaymentPage} from "../pages";

export const BinancePaymentRoute = ({ user }: { user?: User }) => {
    if (!user) {
        return <Navigate to="/login" />;
    }
    return <BinancePaymentPage user={user} />;
};
