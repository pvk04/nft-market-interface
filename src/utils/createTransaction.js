import { web3, contractAddress, contract } from "../config/connection";

export default async function createTransaction(fromAddress, functionName, functionParams) {
	try {
		const gasPrice = await web3.eth.getGasPrice();
		const gasLimit = await contract.methods[functionName](...functionParams).estimateGas({ from: fromAddress });
		const data = contract.methods[functionName](...functionParams).encodeABI();
	
		const transactionObject =  {
			from: fromAddress,
			to: contractAddress,
			gasPrice: web3.utils.toHex(gasPrice),
			gasLimit: web3.utils.toHex(gasLimit),
			data,
		};
	
		const transactionHash = await web3.eth.sendTransaction(transactionObject);
		console.log(`transaction ${functionName} successfully executed`);
		return transactionHash
	} catch (error) {
		alert("ERROR")
		console.log(error);
	}
}
