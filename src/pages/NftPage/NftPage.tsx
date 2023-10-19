import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./NftPage.module.css";
import NftCard from "components/NftCard/NftCard";
import { useAuth } from "hook/useAuth";
import getNfts from "services/getNfts";

function NftPage() {
	const { user } = useAuth();
	const [nfts, setNfts] = useState<INft[] | []>([]);

	useEffect(() => {
		getNfts(user.address, true).then((nfts) => {
			setNfts(nfts);
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
		</Row>
	);
}

export default NftPage;
