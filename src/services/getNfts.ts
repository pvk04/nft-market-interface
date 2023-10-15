import { contract } from "../config/connection";
import BigNumber from "bignumber.js";

export default function getNfts(address: string, isUsers: boolean): Promise<INft[]> {
	return new Promise(async (resolve, reject) => {
		try {
			const nfts = await contract.methods.getNfts().call();

			if (!isUsers) {
				const filteredNfts = nfts.filter((nft: INft) => nft.owner !== address && nft.isOnSale);
				const mappedNfts = filteredNfts.map((nft: INft) => ({
					...nft,
					price: new BigNumber(nft.price).dividedBy(new BigNumber(10 ** 6)),
				}));
				resolve(mappedNfts);
				return;
			}

			const filteredNfts = nfts.filter((nft) => nft.owner === address);
			const mappedNfts = filteredNfts.map((nft: INft) => ({
				...nft,
				price: new BigNumber(nft.price).dividedBy(new BigNumber(10 ** 6)),
			}));
			resolve(mappedNfts);
		} catch (error) {
			reject(error);
		}
	});
}
