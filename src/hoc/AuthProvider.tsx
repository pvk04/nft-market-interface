import { createContext, useState, FunctionComponent, ReactNode } from "react";
import { IUser, UserContextType } from "../@types/user";

export const AuthContext = createContext<UserContextType | null>(null);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = function ({ children }) {
	const [user, setUser] = useState<IUser | null>(null);

	function signin(user: IUser, cb: Function) {
		setUser(user);
		cb();
	}
	function signout(cb: Function) {
		setUser(null);
		cb();
	}

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
