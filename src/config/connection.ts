import Web3 from "web3";
import { abi, abiType } from "./abi";

export const contractAddress = "0xfD922b98C9AFb9b2e871d7412b532c44679dbADf";
export const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(abi as unknown as abiType, contractAddress);
