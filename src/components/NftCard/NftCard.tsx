import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { confirmDialog } from "components/ConfirmDialog/ConfirmDialog";
import SaleFooter from "./Footers/SaleFooter";
import OnSaleFooter from "./Footers/OnSaleFooter";
import { toast } from "react-toastify";

function NftCard({ index, nft, changeNft }: { index: number; nft: INft; changeNft: (cangedNft: INft, index: number) => void }) {
	async function sellNft(price: string | number) {
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
		nft.price = price;
		changeNft(nft, index);
		//
		toast.success("НФТ выставлено на продажу", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}

	return (
		<Card style={{ height: "100%" }}>
			<Card.Img variant="top" src={nft.img} />
			<Card.Body>
				<Card.Title>{nft.name}</Card.Title>
				<Form.Group className="mb-3">
					<Form.Label id="namenft">{nft.description}</Form.Label>
				</Form.Group>
			</Card.Body>
			<Card.Footer>
				{!nft.isOnSale && <SaleFooter sellNft={sellNft} />}
				{nft.isOnSale && (
					<OnSaleFooter
						price={nft.price}
						changePrice={(price) => {
							nft.price = price;
						}}
						cancelSale={() => {
							console.log("cancel sale");
						}}
					/>
				)}
			</Card.Footer>
		</Card>
	);
}

export default NftCard;
