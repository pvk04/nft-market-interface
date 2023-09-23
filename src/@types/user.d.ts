export interface IUser {
	address: string;
	role: number;
}

export type UserContextType = {
	user: IUser | null;
	signin: (user: IUser, cb: Function) => void;
	signout: (cb: Function) => void;
};
