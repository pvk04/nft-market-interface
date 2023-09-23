import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0xf49a56C3C6f1Ff06Fb0effAE2A6538036B3A42c9";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
