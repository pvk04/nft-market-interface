import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0xd281012cE61D4a53A378e03B19A4431dCE6831ca";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
