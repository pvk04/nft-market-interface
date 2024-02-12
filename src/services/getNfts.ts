import { contract } from "../config/connection";
import BigNumber from "bignumber.js";

export default function getNfts(address: string, isUsers: boolean): Promise<INft[]> {
	return new Promise(async (resolve, reject) => {
		try {
			const nfts = await contract.methods.getNfts().call();

			const filteredNfts = nfts.filter((nft) => {
				console.log(nft.owner, address);

				if (isUsers) return nft.owner === address;
				else return nft.owner !== address && nft.isOnSale;
			});
			const mappedNfts = filteredNfts.map((nft: INft) => ({
				...nft,
				price: new BigNumber(nft.price),
				showPrice: new BigNumber(nft.price).dividedBy(10 ** 18).toString(),
			}));

			resolve(mappedNfts);
		} catch (error) {
			reject(error);
		}
	});
}
