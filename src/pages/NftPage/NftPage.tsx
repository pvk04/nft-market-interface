import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NftPage.module.css";
import NftCard from "components/NftCard/NftCard";
import { useAuth } from "hook/useAuth";
import getNfts from "services/getNfts";

function NftPage() {
	const { user } = useAuth();
	const [nfts, setNfts] = useState<INft[] | []>([]);
	const [isEmpty, setIsEmpty] = useState(false);

	useEffect(() => {
		getNfts(user.address, true).then((nfts) => {
			setNfts(nfts);
			if (nfts.length === 0) setIsEmpty(true);
			else setIsEmpty(false);
		});
	}, [user.address]);

	function handleChangeNft(changedNft: INft, index: number) {
		const newNftArr: INft[] = [...nfts];
		newNftArr[index] = changedNft;
		setNfts(newNftArr);
	}

	return (
		<Row className={styles.nftContainer}>
			{nfts.map((nft, index) => (
				<Col xs={12} sm={6} md={3} style={{ marginBottom: "15px" }} key={index}>
					<NftCard index={index} nft={{ ...nft }} changeNft={handleChangeNft} />
				</Col>
			))}
			{isEmpty && (
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<h1 className={styles.errorText} style={{ fontSize: "140px" }}>
						Здесь пока пусто.
					</h1>
					<p className={styles.errorText}>
						Вы можете <NavLink to={"../market"}>купить</NavLink> или <NavLink to={"../newNFT"}>создать</NavLink> NFT
					</p>
				</div>
			)}
		</Row>
	);
}

export default NftPage;
