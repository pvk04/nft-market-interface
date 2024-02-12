import { Button, Card } from "react-bootstrap";

function BuyFooter({ price, showPrice, buyNft }: { price: bigint; showPrice: string, buyNft: () => void }) {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
			<Card.Text>
				<span style={{ fontWeight: "600" }}>{showPrice}</span> ETH
			</Card.Text>
			<Button variant="success" onClick={buyNft}>
				Купить
			</Button>
		</div>
	);
}

export default BuyFooter;
