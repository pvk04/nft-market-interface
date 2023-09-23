import { contractAddress, contract } from "../config/connection";

export default async function createTransaction(fromAddress, functionName, functionParams) {
	const gasLimit = await contract.methods[functionName](...functionParams).estimateGas();
	const txData = contract.methods[functionName](...functionParams).encodeABI();

	return {
		from: fromAddress,
		to: contractAddress,
		data: txData,
		gas: gasLimit,
	};
}
