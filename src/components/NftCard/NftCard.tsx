import { Card, Form } from "react-bootstrap";
import { confirmDialog } from "components/ConfirmDialog/ConfirmDialog";
import SaleFooter from "./Footers/SaleFooter";
import OnSaleFooter from "./Footers/OnSaleFooter";
import createTransaction from "services/createTransaction";
import { toast } from "react-toastify";
import { useAuth } from "hook/useAuth";
import BigNumber from "bignumber.js";

function NftCard({ index, nft, changeNft }: { index: number; nft: INft; changeNft: (cangedNft: INft, index: number) => void }) {
	const { user } = useAuth();

	async function sellNft(price: string | number) {
		const confirmation = await confirmDialog({
			title: "Подтверждение",
			description: "Вы действительно хотите выставить на продажу?",
			handleClose: () => null,
			handleConfirm: () => null,
		});

		if (!confirmation) return;
		toast.promise(
			createTransaction(
				user.address,
				"sellNft",
				[nft.arrayIndex, price],
				() => {
					nft.isOnSale = true;
					nft.price = BigInt(price);
					changeNft(nft, index);
				},
				null,
				null
			),
			{
				pending: "Выставляем НФТ на продажу",
				success: "НФТ теперь на продаже",
				error: "Ошибка. Повторите попытку позже",
			}
		);
	}

	async function changePriceNft(price: bigint | string, cb: () => void) {
		const confirmation = await confirmDialog({
			title: "Подтверждение",
			description: "Вы действительно хотите изменить цену НФТ?",
			handleClose: () => {
				console.log("close");
			},
			handleConfirm: () => {
				console.log("confirm");
			},
		});
		if (!confirmation) return;

		toast.promise(
			createTransaction(
				user.address,
				"changeNftPrice",
				[nft.arrayIndex, new BigNumber(price as string).multipliedBy(new BigNumber(10 ** 6)).toString()],
				() => {
					nft.price = BigInt(price);
					changeNft(nft, index);
				},
				null,
				null
			),
			{
				pending: "Изменяем цену НФТ",
				success: "Цена НФТ изменена",
				error: "Ошибка. Повторите попытку позже",
			}
		);
		cb();
	}

	async function cancelSaleNft() {
		const confirmation = await confirmDialog({
			title: "Подтверждение",
			description: "Вы действительно хотите убрать НФТ с продажи?",
			handleClose: () => null,
			handleConfirm: () => null,
		});

		if (!confirmation) return;
		toast.promise(
			createTransaction(
				user.address,
				"cancelSellNft",
				[nft.arrayIndex],
				() => {
					nft.isOnSale = false;
					changeNft(nft, index);
				},
				null,
				null
			),
			{
				pending: "Убираем НФТ с продажи",
				success: "НФТ убрано с продажи",
				error: "Ошибка. Повторите попытку позже",
			}
		);
	}

	return (
		<Card style={{ height: "100%" }}>
			<Card.Img variant="top" src={nft.pictureURL} />
			<Card.Body>
				<Card.Title>{nft.name}</Card.Title>
				<Form.Group className="mb-3">
					<Form.Label id="namenft">{nft.description}</Form.Label>
				</Form.Group>
			</Card.Body>
			<Card.Footer>
				{!nft.isOnSale && <SaleFooter sellNft={sellNft} />}
				{nft.isOnSale && <OnSaleFooter price={nft.price} changePrice={changePriceNft} cancelSale={cancelSaleNft} />}
			</Card.Footer>
		</Card>
	);
}

export default NftCard;
