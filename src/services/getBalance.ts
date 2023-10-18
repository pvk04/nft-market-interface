import { contract } from "../config/connection";
import BigNumber from "bignumber.js";

export default function getBalance(address: string): Promise<string> {
	return new Promise(async (resolve, reject) => {
		try {
			const userBalance: string = await contract.methods.getBalance(address).call({ from: address });
			const balance = new BigNumber(userBalance).dividedBy(new BigNumber(10 ** 6)).toString();
			resolve(balance);
		} catch (error) {
			reject(error);
		}
	});
}
