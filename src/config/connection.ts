import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0xe3AF804D473f26bFd8E0aC516b688FC598437B5e";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
