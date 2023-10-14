import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { AiFillEdit, AiFillSave, AiOutlineClose } from "react-icons/ai";

function OnSaleFooter({
	price,
	changePrice,
	cancelSale,
}: {
	price: string | number;
	changePrice: (price: string | number, cb: () => void) => void;
	cancelSale: () => void;
}) {
	const [newPrice, setNewPrice] = useState(price);
	const [editPrice, setEditPrice] = useState(false);

	function handleChangePrice() {
		changePrice(newPrice, () => {
			setEditPrice(false);
		});
	}

	function handleCancelChange() {
		setNewPrice(price);
		setEditPrice(false);
	}

	return (
		<>
			<InputGroup>
				<Form.Control
					value={newPrice}
					onChange={(e) => setNewPrice(e.target.value)}
					disabled={!editPrice}
					placeholder="Цена"
					aria-label="nft price"
					type="number"
					min="1"
				/>
				{!editPrice && (
					<Button onClick={() => setEditPrice(true)}>
						<AiFillEdit />
					</Button>
				)}
				{editPrice && (
					<>
						<Button variant="danger" onClick={handleCancelChange}>
							<AiOutlineClose />
						</Button>
						<Button variant="success" onClick={handleChangePrice}>
							<AiFillSave />
						</Button>
					</>
				)}
			</InputGroup>
			<Button>Снять с продажи</Button>
		</>
	);
}

export default OnSaleFooter;
