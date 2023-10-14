import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function SaleFooter({ sellNft }: { sellNft: (price: string | number) => void }) {
	const [newPrice, setNewPrice] = useState("");

	return (
		<InputGroup className="mb-3">
			<Form.Control
				value={newPrice}
				onChange={(e) => setNewPrice(e.target.value)}
				placeholder="Цена"
				aria-label="nft price"
				type="number"
				min="1"
			/>
			<Button variant="primary" onClick={() => sellNft(newPrice)}>
				Продать
			</Button>
		</InputGroup>
	);
}

export default SaleFooter;
