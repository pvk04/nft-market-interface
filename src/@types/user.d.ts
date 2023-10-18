export interface IUser {
	address: string;
	role: MatchPrimitiveType<"uint8", number>;
	login: string;
	balance: string;
	refCode: MatchPrimitiveType<"bytes", string>;
	discount: MatchPrimitiveType<"uint256", number>;
	isRefCodeUsed: MatchPrimitiveType<boolean>;
}

export type UserContextType = {
	user: IUser;
	signin: (user: IUser, cb: Function) => void;
	signout: (cb: Function) => void;
	refreshBalance: () => void;
};
