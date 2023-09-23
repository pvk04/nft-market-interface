import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { FormEvent } from "react";
import { contract, web3 } from "../../config/connection";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

import createTransaction from "../../utils/createTransaction";

function LoginPage(): JSX.Element {
	const [currentAddress, setCurrentAddress] = useState("");
	const [notRegistered, setNotRegistered] = useState(false);
	const [invalidLogin, setInvalidLogin] = useState(false);

	const [login, setLogin] = useState("");

	const navigate = useNavigate();
	const location = useLocation();

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
			const userConnected = await contract.methods.getUser(currentAddress).call({ from: currentAddress });
			console.log(userConnected);
			// if user isnt registered in smart contract
			if (userConnected.role === BigInt(0)) {
				setNotRegistered(true);
			}
		} catch (error) {
			console.log(error);
		}
	}

	// register smart contract account
	async function registerAccount() {
		try {
			const registrationAnswer = await contract.methods.registration(currentAddress, login).send({ from: currentAddress });
			console.log(registrationAnswer);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		// call registration func
		if (notRegistered) {
			setInvalidLogin(false);
			if (login.length < 3) {
				setInvalidLogin(true);
				return;
			}
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
