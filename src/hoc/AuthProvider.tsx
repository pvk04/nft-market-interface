import { createContext, useState, FunctionComponent, ReactNode } from "react";
import { IUser, UserContextType } from "../@types/user";

const initialUser: IUser = {
	login: '',
	address: '',
	role: BigInt(0),
	discount: BigInt(0),
	refCode: '',
	refCodeUsed: true
}

export const AuthContext = createContext<UserContextType>({user: initialUser, signin: () => null, signout: () => null});

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = function ({ children }) {
	const [user, setUser] = useState<IUser>(initialUser);

	function signin(user: IUser, cb: Function) {
		setUser(user);
		cb();
	}
	function signout(cb: Function) {
		setUser(initialUser);
		cb();
	}

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
