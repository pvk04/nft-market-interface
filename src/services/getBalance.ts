import { web3 } from "../config/connection";
import BigNumber from "bignumber.js";

export default function getBalance(address: string): Promise<string> {
	return new Promise(async (resolve, reject) => {
		try {
			const userBalance = await web3.eth.getBalance(address);
			const balance = new BigNumber(userBalance.toString()).dividedBy(new BigNumber(10 ** 18)).toFixed(3).toString();
			console.log("BAL: ", balance);
			
			resolve(balance);
		} catch (error) {
			reject(error);
		}
	});
}
