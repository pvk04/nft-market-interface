import { Form, InputGroup } from "react-bootstrap";

interface RegistrationFormProps {
	login: string;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	invalidLogin: boolean;
}

function RegistrationForm({ login, setLogin, invalidLogin }: RegistrationFormProps): JSX.Element {
	return (
		<Form.Group>
			<InputGroup>
				<InputGroup.Text>Никнейм</InputGroup.Text>
				<Form.Control value={login} onChange={(e) => setLogin(e.target.value)} isInvalid={invalidLogin} />
				<Form.Control.Feedback type="invalid">Пожалуйста, введите логин длиной не менее 3 и не более 15 символов</Form.Control.Feedback>
			</InputGroup>
		</Form.Group>
	);
}

export default RegistrationForm;
