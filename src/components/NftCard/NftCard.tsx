import { Card, Form } from "react-bootstrap";
import { confirmDialog } from "components/ConfirmDialog/ConfirmDialog";
import SaleFooter from "./Footers/SaleFooter";
import OnSaleFooter from "./Footers/OnSaleFooter";
import createTransaction from "services/createTransaction";
import { toast } from "react-toastify";
import { useAuth } from "hook/useAuth";
import BigNumber from "bignumber.js";

import styles from "./NftCard.module.css";
import BuyFooter from "./Footers/BuyFooter";

function NftCard({ index, nft, changeNft }: { index: number; nft: INft; changeNft: (cangedNft: INft, index: number) => void }) {
	const { user, refreshBalance } = useAuth();

	async function sellNft(price: string | number) {
		const confirmation = await confirmDialog({
			title: "Подтверждение",
			description: "Вы действительно хотите выставить на продажу?",
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

	async function buyNft() {
		refreshBalance();
		if (Number(user.balance) < nft.price) {
			const priceDiff = Math.abs(Number(user.balance) - nft.price);
			toast.error(`У вас нехватает ${priceDiff} PROFI для покупки`);
			return;
		}

		const confirmation = await confirmDialog({ title: "Подтверждение покупки", description: "Вы действительно хотите купить эту НФТ?" });

		if (!confirmation) return;

		toast.promise(
			createTransaction(
				user.address,
				"buyNft",
				[nft.arrayIndex],
				() => {
					nft.owner = user.address;
					nft.isOnSale = false;
					refreshBalance();
					changeNft(nft, index);
				},
				null,
				null
			),
			{
				pending: "Покупаем НФТ",
				success: "Поздравляем, НФТ куплено!",
				error: "Ошибка. Повторите попытку позже",
			}
		);
	}

	return (
		<Card style={{ height: "550px" }} className={styles.nftCard}>
			<div className={styles.nftImgContainer}>
				<Card.Img variant="top" src={nft.pictureURL} className={styles.nftImage} />
			</div>
			<Card.Body>
				<Card.Title>{nft.name}</Card.Title>
				<Form.Group className="mb-3">
					<Form.Label id="namenft">{nft.description}</Form.Label>
				</Form.Group>
			</Card.Body>
			<Card.Footer className={styles.nftFooter}>
				{!nft.isOnSale && <SaleFooter sellNft={sellNft} />}
				{nft.isOnSale && user.address === nft.owner && (
					<OnSaleFooter price={nft.price} changePrice={changePriceNft} cancelSale={cancelSaleNft} />
				)}
				{nft.isOnSale && user.address !== nft.owner && <BuyFooter price={nft.price} buyNft={buyNft} />}
			</Card.Footer>
		</Card>
	);
}

export default NftCard;
