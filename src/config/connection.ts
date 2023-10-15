import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0x3859388C56B1Cd2a331A91F183d06878C24D0b42";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
