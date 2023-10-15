import { IUser } from "../@types/user";
import { web3, contract } from "../config/connection";

export default function getUser(address: string): Promise<IUser> {
	return new Promise(async (resolve, reject) => {
		try {
			const userConnected = await contract.methods.getUser(address).call({ from: address });
			const user = { ...userConnected, address: address };
			user.address = web3.utils.toChecksumAddress(user.address);
			resolve(user);
		} catch (error) {
			reject(error);
		}
	});
}
