import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./NftPage.module.css";
import { confirmDialog } from "components/ConfirmDialog/ConfirmDialog";
import NftCard from "components/NftCard/NftCard";
import { useAuth } from "hook/useAuth";
import { toast } from "react-toastify";
import createTransaction from "services/createTransaction";
import getNfts from "services/getNfts";

function NftPage() {
	const { user } = useAuth();
	const [nfts, setNfts] = useState<INft[] | []>([]);
	const [isConfirmation, setIsConfirmation] = useState(false);
	const [loadedImage, setLoadedImage] = useState<string | null>(null);

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

	function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const selectedFile = event.target.files?.[0];
		console.log(selectedFile);

		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = function (event) {
				const image = event.target?.result as string;
				setLoadedImage(image);
			};
			reader.readAsDataURL(selectedFile);
			return;
		}
		setLoadedImage(null);
	}

	return (
		<Row className={styles.nftContainer}>
			{/* <Col>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={loadedImage ?? "/images/examplenft.jpg"} />
					<Card.Body>
						<Card.Title>Создание NFT</Card.Title>
						<Form.Group className="mb-3">
							<Form.Label id="namenft">Название</Form.Label>
							<Form.Control placeholder="My NFT" aria-label="name" aria-describedby="namenft" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Описание</Form.Label>
							<Form.Control as="textarea" aria-label="Описание" placeholder="Something about my NFT..." />
						</Form.Group>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Изображение</Form.Label>
							<Form.Control type="file" accept=".jpg,.jpeg,.png" onChange={handleFileInputChange} />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label id="namenft">Цена</Form.Label>
							<Form.Control type="number" placeholder="1" aria-label="name" aria-describedby="namenft" />
						</Form.Group>
					</Card.Body>
					<Card.Footer>
						<Button variant="primary">Создать</Button>
					</Card.Footer>
				</Card>
			</Col> */}

			{nfts.map((nft, index) => (
				<Col xs={12} sm={6} md={3} style={{ marginBottom: "15px" }} key={index}>
					<NftCard index={index} nft={{ ...nft }} changeNft={handleChangeNft} />
				</Col>
			))}
		</Row>
	);
}

export default NftPage;
