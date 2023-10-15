import { useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { Form, InputGroup, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { web3 } from "../../config/connection";
import createTransaction from "../../services/createTransaction";
import styles from "./ProfilePage.module.css";

import "react-toastify/dist/ReactToastify.min.css";
import getUser from "services/getUser";

function ProfilePage() {
	const { user, signin } = useAuth();
	const [refValue, setRefValue] = useState("");
	const [refCodePending, setRefCodePending] = useState(false);

	async function handleCopy() {
		document.execCommand("copy", true, `PROFI-${user.address.slice(2, 6)}2023`);
		await navigator.clipboard.writeText(`PROFI-${user.address.slice(2, 6)}2023`);
		toast.success("Реферальный код успешно скопирован", {
			position: "top-right",
		});
	}

	async function handleApplyRef() {
		try {
			setRefCodePending(true); // TODO disabled для кнопки и инпута во время промиса
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
		<div style={{ margin: "0 auto" }}>
			<h1>Профиль</h1>
			<p>Адрес: {user.address}</p>
			<p>Никнейм: {user.login}</p>
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
		</div>
	);
}

export default ProfilePage;
