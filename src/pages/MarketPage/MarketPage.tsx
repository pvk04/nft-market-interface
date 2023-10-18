import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NftCard from "components/NftCard/NftCard";
import getNfts from "services/getNfts";
import { useAuth } from "hook/useAuth";
import { contract } from "../../config/connection";

import styles from "./MarketPage.module.css";

function MarketPage() {
	const { user } = useAuth();
	const [nfts, setNfts] = useState<INft[] | []>([]);

	useEffect(() => {
		getNfts(user.address, false).then((nfts) => {
			setNfts(nfts);
		});
	}, [user.address]);

	useEffect(() => {
		contract.events.makeSellNftEvent().on("data", (event: any) => {
			const returnData = event.returnValues;
			const sellNft = returnData.nft;
			if (returnData._from !== user.address) {
				console.log(sellNft);

				setNfts([...nfts, sellNft as INft]);
			}

			console.log(nfts);
		});

		return () => {
			contract.events.makeSellNftEvent().off("data", (event: any) => {
				const returnData = event.returnValues;
				const sellNft = returnData.nft;
				if (returnData._from !== user.address) {
					console.log(sellNft);

					setNfts([...nfts, sellNft as INft]);
				}

				console.log(nfts);
			});
		};
	}, [user.address, nfts]);

	function handleChangeNft(changedNft: INft, index: number) {
		const newNftArr: INft[] = [...nfts];
		newNftArr[index] = changedNft;
		setNfts(newNftArr);
	}

	return (
		<Row className={styles.nftContainer}>
			{nfts.map((nft, index) => (
				<Col xs={12} sm={6} md={3} style={{ display: nft.isOnSale ? "block" : "none", marginBottom: "15px" }} key={index}>
					<NftCard index={index} nft={{ ...nft }} changeNft={handleChangeNft} />
				</Col>
			))}
		</Row>
	);
}

export default MarketPage;
