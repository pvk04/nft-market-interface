import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { FormEvent } from "react";
import { contract } from "../../config/connection";
import { useAuth } from "../../hook/useAuth";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import createTransaction from "../../services/createTransaction";
import getUser from "services/getUser";

function LoginPage(): JSX.Element {
	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth();

	const [currentAddress, setCurrentAddress] = useState("");
	const [notRegistered, setNotRegistered] = useState(false);
	const [invalidLogin, setInvalidLogin] = useState(false);
	const [login, setLogin] = useState("");

	const fromPage = location.state?.from?.pathname || "/";

	// get address from metamask
	async function getAddress() {
		try {
			const [addressConnected] = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			if (addressConnected) setCurrentAddress(addressConnected);
		} catch (error) {
			console.log(error);
		}
	}

	// authorize in smart contract account
	async function loginAccount() {
		try {
			const user = await getUser(currentAddress);

			// if user isnt registered in smart contract
			if (user.role === BigInt(0)) {
				setNotRegistered(true);
				return;
			}

			signin(user, () => {
				navigate(fromPage);
			});
		} catch (error) {
			console.log(error);
		}
	}

	// register smart contract account
	async function registerAccount() {
		try {
			await createTransaction(currentAddress, "registration", [currentAddress, login]);
			await loginAccount();
		} catch (error) {
			console.log(error);
		}
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// registration
		if (notRegistered) {
			// login validation
			setInvalidLogin(false);
			if (login.length < 3) {
				setInvalidLogin(true);
				return;
			}
			// call registration func
			registerAccount();
			return;
		}

		// call connection or login func
		if (!currentAddress) getAddress();
		else loginAccount();
	}

	return (
		<Form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", margin: "auto" }}>
			<Card>
				<Card.Header>
					<Card.Text>Авторизация</Card.Text>
				</Card.Header>
				<Card.Body>
					{currentAddress && <Card.Text>Адрес для входа: {currentAddress}</Card.Text>}
					{notRegistered && <RegistrationForm login={login} setLogin={setLogin} invalidLogin={invalidLogin} />}
				</Card.Body>
				<Card.Footer>
					<Button type="submit">
						{currentAddress ? (notRegistered ? "Зарегистрироваться" : "Войти") : "Подключить кошелек"}
					</Button>
				</Card.Footer>
			</Card>
		</Form>
	);
}

export default LoginPage;
