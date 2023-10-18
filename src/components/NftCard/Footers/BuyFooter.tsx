import { Button, Card } from "react-bootstrap";

function BuyFooter({ price, buyNft }: { price: bigint; buyNft: () => void }) {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
			<Card.Text>
				<span style={{ fontWeight: "600" }}>{String(price)}</span> PROFI
			</Card.Text>
			<Button variant="success" onClick={buyNft}>
				Купить
			</Button>
		</div>
	);
}

export default BuyFooter;
