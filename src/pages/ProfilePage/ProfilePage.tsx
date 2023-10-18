import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { Form, InputGroup, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { web3 } from "../../config/connection";
import createTransaction from "../../services/createTransaction";
import getUser from "services/getUser";

import styles from "./ProfilePage.module.css";

function ProfilePage() {
	const { user, signin, refreshBalance } = useAuth();
	const [refValue, setRefValue] = useState("");
	const [refCodePending, setRefCodePending] = useState(false);

	useEffect(() => {
		refreshBalance();
	}, []);

	async function handleCopy() {
		document.execCommand("copy", true, `PROFI-${user.address.slice(2, 6)}2023`);
		await navigator.clipboard.writeText(`PROFI-${user.address.slice(2, 6)}2023`);
		toast.success("Реферальный код успешно скопирован", {
			position: "top-right",
		});
	}

	async function handleApplyRef() {
		try {
			setRefCodePending(true);
			const refCodePart1 = refValue.slice(0, 6);
			const refCodePart2 = refValue.slice(6, 10);
			const refCodePart3 = refValue.slice(10, 14);

			const resultCode = web3.utils.toHex(refCodePart1) + refCodePart2 + web3.utils.asciiToHex(refCodePart3).slice(2);

			toast.promise(
				createTransaction(
					user.address,
					"applyRefCode",
					[resultCode],
					async () => {
						const userRefreshed = await getUser(user.address);
						signin(userRefreshed, () => null);
					},
					null,
					() => {
						setRefCodePending(false);
					}
				),
				{
					pending: "Проверяем реферальный код",
					success: "Реферальный код применен",
					error: "Ошибка. Проверьте правильность введенного кода",
				}
			);
		} catch (e) {
			console.log(e);
			alert("Ошибка");
		}
	}

	return (
		<Card>
			<Card.Header className={styles.profileHeader}>
				<img src="/images/profilePicture.jpg" alt="profile avatar" className={styles.avatar} />
				<div className={styles.profileHeaderInfo}>
					<h1>{user.login}</h1>
					<h5 style={{ wordBreak: "break-all" }}>{user.address}</h5>
				</div>
			</Card.Header>
			<Card.Body>
				<p>Баланс: {user.balance} PROFI</p>
				<div className={styles.refCodeContainer}>
					<p>Реферальный код:</p>
					<p className={styles.refCode} onClick={handleCopy}>
						PROFI-{user.address.slice(2, 6)}2023
					</p>
				</div>
				<p>Скидка за друзей: {Number(user.discount)}%</p>
				{!user.isRefCodeUsed && (
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Введите реферальный код друга"
							value={refValue}
							onChange={(e) => {
								setRefValue(e.target.value);
							}}
							disabled={refCodePending}
						/>
						<Button variant="success" id="basic-addon2" onClick={handleApplyRef} disabled={refCodePending}>
							готово
						</Button>
					</InputGroup>
				)}
				{user.isRefCodeUsed && <p style={{ color: "#198754" }}>Реферальный код использован</p>}
			</Card.Body>
		</Card>
		// <div style={{ maxWidth: "600px", margin: "0 auto" }}>
		// 	<h1>Профиль</h1>
		// 	<p style={{wordBreak: "break-all"}}>Адрес: {user.address}</p>
		// 	<p>Никнейм: {user.login}</p>
		// 	<div className={styles.refCodeContainer}>
		// 		<p>Реферальный код:</p>
		// 		<p className={styles.refCode} onClick={handleCopy}>
		// 			PROFI-{user.address.slice(2, 6)}2023
		// 		</p>
		// 	</div>
		// 	<p>Скидка за друзей: {Number(user.discount)}%</p>
		// 	{!user.isRefCodeUsed && (
		// 		<InputGroup className="mb-3">
		// 			<Form.Control
		// 				placeholder="Введите реферальный код друга"
		// 				value={refValue}
		// 				onChange={(e) => {
		// 					setRefValue(e.target.value);
		// 				}}
		// 				disabled={refCodePending}
		// 			/>
		// 			<Button variant="success" id="basic-addon2" onClick={handleApplyRef} disabled={refCodePending}>
		// 				готово
		// 			</Button>
		// 		</InputGroup>
		// 	)}
		// 	{user.isRefCodeUsed && <p style={{ color: "#198754" }}>Реферальный код использован</p>}
		// </div>
	);
}

export default ProfilePage;
