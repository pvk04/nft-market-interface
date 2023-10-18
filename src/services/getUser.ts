import { IUser } from "../@types/user";
import { web3, contract } from "../config/connection";
import getBalance from "./getBalance";

export default function getUser(address: string): Promise<IUser> {
	return new Promise(async (resolve, reject) => {
		try {
			const userConnected = await contract.methods.getUser(address).call({ from: address });
			const balance = await getBalance(address);
			const user = { ...userConnected, address: address, balance };
			user.address = web3.utils.toChecksumAddress(user.address);
			resolve(user);
		} catch (error) {
			reject(error);
		}
	});
}
