import { User } from "../interfaces";
import { Navigate } from "react-router-dom";
import {TransactionsPage} from "../pages/transaction/TransactionsPage.tsx";

export const TransactionPageRoute = ({ user }: { user?: User }) => {
    if (!user) {
        return <Navigate to="/login" />;
    }
    return <TransactionsPage user={user} />;
};
