import { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import styles from "./NftPage.module.css";
import { confirmDialog } from "components/ConfirmDialog/ConfirmDialog";
import NftCard from "components/NftCard/NftCard";
import { contract } from "config/connection";

const myNFTs = [
	{
		name: "nft 1",
		description: "test tes testests",
		img: "http://localhost:4000/file/f00b6091-a50f-46fd-bdcb-1b937ffd7a22.webp",
		isOnSale: false,
		price: "12",
	},
	{
		name: "nft 2",
		description: "lorem ipsum madand doah daoshdas",
		img: "http://localhost:4000/file/f30c6d3e-0285-421b-848c-e8d8e6f8d705.webp",
		isOnSale: false,
		price: "22",
	},
	{
		name: "nft 3",
		description: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
		img: "/images/examplenft.jpg",
		isOnSale: false,
		price: "33",
	},
	{
		name: "nft 3",
		description: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
		img: "/images/examplenft.jpg",
		isOnSale: false,
		price: "43",
	},
	{
		name: "nft 3",
		description: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
		img: "/images/examplenft.jpg",
		isOnSale: false,
		price: "32",
	},
	{
		name: "nft 3",
		description: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
		img: "/images/examplenft.jpg",
		isOnSale: false,
		price: "23",
	},
];

function NftPage() {
	const [nfts, setNfts] = useState<INft[] | []>([]);
	const [isConfirmation, setIsConfirmation] = useState(false);
	const [loadedImage, setLoadedImage] = useState<string | null>(null);

	useEffect(() => {
		contract.methods
			.getNfts()
			.call()
			.then((result) => {
				console.log(result);
				setNfts(result);
			});
	}, []);

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

	async function sellNft(nft: INft) {
		const confirmation = await confirmDialog({
			title: "Подтверждение",
			description: "Вы действительно хотите выставить на продажу?",
			handleClose: () => {
				console.log("close");
			},
			handleConfirm: () => {
				console.log("confirm");
			},
		});
		if (!confirmation) return;
		nft.isOnSale = true;
		console.log(nft);
		setIsConfirmation(false);
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
					<NftCard index={index} nft={{...nft}} changeNft={handleChangeNft} />
				</Col>
			))}
		</Row>
	);
}

export default NftPage;
