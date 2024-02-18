import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0x5D70f498dE527bbA2eB978c20fb2f15d4D2fC9F0";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
