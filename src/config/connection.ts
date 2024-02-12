import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0xea665248d41f42C2AB6F4f8c00c3FE9814a773e4";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
