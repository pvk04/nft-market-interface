import { web3, contractAddress, contract } from "../config/connection";

export default async function createTransaction(fromAddress, functionName, functionParams, transactionObjVals, tryCb, catchCb, finallyCb) {
	return new Promise(async (resolve, reject) => {
		try {
			const gasPrice = await web3.eth.getGasPrice();
			let gasLimit;
			if (!transactionObjVals.value) gasLimit = await contract.methods[functionName](...functionParams).estimateGas({ from: fromAddress });
			const data = contract.methods[functionName](...functionParams).encodeABI();

			const transactionObject = {
				from: fromAddress,
				to: contractAddress,
				gasPrice: web3.utils.toHex(gasPrice),
				gasLimit: gasLimit ? web3.utils.toHex(gasLimit) : null,
				data,
				...transactionObjVals,
			};

			const transactionHash = await web3.eth.sendTransaction(transactionObject);
			console.log(`transaction ${functionName} successfully executed`);
			resolve(transactionHash);
			if (tryCb) tryCb(transactionHash);
		} catch (error) {
			console.log(error);
			reject(error);
			if (catchCb) catchCb(error);
		} finally {
			if (finallyCb) finallyCb();
		}
	});
}
