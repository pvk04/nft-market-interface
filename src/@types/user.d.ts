export interface IUser {
	address: string;
	login: string;
    role: MatchPrimitiveType<"uint256", bigint>;
    discount: MatchPrimitiveType<"uint256", bigint>;
    refCode: MatchPrimitiveType<"bytes", string>;
    refCodeUsed: MatchPrimitiveType<"uint256", boolean>;
}

export type UserContextType = {
	user: IUser;
	signin: (user: IUser, cb: Function) => void;
	signout: (cb: Function) => void;
};
