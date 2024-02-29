import { ReactNode } from "react";

export  interface User {
	id: string;
	email: string;
	firstName?: string;
	lastName?: string;
}
export interface HeaderProps {
	user: User;
}
export interface routeProps {
	children: any;
	user: User;
}
export interface LayoutProps {
	children: ReactNode;
	user: User;
}

export interface AuthProps {
	onSuccess?: (data: any) => void | Promise<void>;
	onError?: (error: any) => void | Promise<void>;
}
