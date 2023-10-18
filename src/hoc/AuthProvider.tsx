import { createContext, useState, FunctionComponent, ReactNode } from "react";
import { IUser, UserContextType } from "../@types/user";
import getBalance from "services/getBalance";

const initialUser: IUser = {
	login: "",
	address: "",
	balance: "",
	role: BigInt(0),
	discount: BigInt(0),
	refCode: "",
	isRefCodeUsed: true,
};

export const AuthContext = createContext<UserContextType>({ user: initialUser, signin: () => null, signout: () => null, refreshBalance: () => null });

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
	async function refreshBalance() {
		const balance = await getBalance(user.address);
		setUser({ ...user, balance });
	}

	const value = { user, signin, signout, refreshBalance };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
