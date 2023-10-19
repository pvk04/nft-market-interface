import { useRef, useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAuth } from "hook/useAuth";
import imageSize from "utils/imageSize";
import { confirmDialog } from "components/ConfirmDialog/ConfirmDialog";
import createTransaction from "services/createTransaction";
import uploadImage from "services/uploadImage";

interface IFormData {
	name: string;
	description: string;
	loadedImage: string | undefined;
}

interface IErrorsData {
	name?: string;
	description?: string;
	loadedImage?: string;
}

function CreationNft() {
	const { user } = useAuth();
	const imageInput = useRef<HTMLInputElement | null>(null);
	const [formData, setFormData] = useState<IFormData>({
		name: "",
		description: "",
		loadedImage: undefined,
	});

	const [errors, setErrors] = useState<IErrorsData>({});

	async function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const selectedFile = e.target.files?.[0];

		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = async function (e) {
				const image = e.target?.result as string;
				const imgSizeObj = await imageSize(image);
				const maxWidth = 512;
				const maxHeight = 512;

				if (imgSizeObj.width !== maxWidth || imgSizeObj.height !== maxHeight) {
					toast.error(`Изображение должно быть размером ${maxWidth} на ${maxHeight} пикселей`, {
						position: "top-right",
					});
					setFormData({ ...formData, loadedImage: undefined }); // Очистить изображение

					if (imageInput.current) {
						imageInput.current.value = "";
					}
				} else {
					setFormData({ ...formData, loadedImage: image });
				}
			};

			reader.readAsDataURL(selectedFile);
		} else {
			setFormData({ ...formData, loadedImage: undefined });
		}
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newErrors = validateForm(formData);
		if (Object.keys(newErrors).length === 0) {
			setErrors({});

			if (formData.loadedImage) {
				createNft(formData.name, formData.description, formData.loadedImage);
			}
		} else {
			setErrors(newErrors);
		}
	}

	function validateForm(data: IFormData) {
		let errors: IErrorsData = {};

		if (!data.name.trim()) {
			errors.name = "Название НФТ обязательно";
		}
		if ((data.name.trim() && data.name.trim().length < 3) || data.name.trim().length > 25) {
			errors.name = "Название должно быть длиной от 3 до 25 символов";
		}
		if (data.description.trim() && data.description.trim().length > 200) {
			errors.description = "Описание НФТ не может быть длиннее 200 символов";
		}
		if (!data.loadedImage) {
			errors.loadedImage = "Выберите картику НФТ";
		}

		return errors;
	}

	async function createNft(name: string, description: string, image: string) {
		const confirmation = await confirmDialog({
			title: "Подтверждение",
			description: "Вы действительно хотите выставить на продажу?",
		});

		if (!confirmation) return;
		// загрузка картинки на сервер
		const imageUrl = await toast.promise(uploadImage(image), {
			pending: "Загружаем изображение на сервер",
			success: "Изображение загружено",
			error: "Ошибка. Не удалось загрузить изображение",
		});

		// создание НФТ в смарт контракте
		toast.promise(
			createTransaction(
				user.address,
				"mintNft",
				[name, description, imageUrl],
				() => {
					setFormData({ name: "", description: "", loadedImage: undefined });
					if (imageInput.current) {
						imageInput.current.value = "";
					}
				},
				null,
				null
			),
			{
				pending: "Создаем НФТ",
				success: "НФТ успешно создано",
				error: "Ошибка. Повторите попытку позже",
			}
		);

		//
		// TODO: реализовать удаление картинки с сервера при отмене создания НФТ
		//
	}

	return (
		<Row>
			<Col>
				<Card style={{ width: "18rem" }}>
					<Form onSubmit={handleSubmit}>
						<Card.Img variant="top" src={formData.loadedImage ?? "/images/nft_placeholder.png"} />
						<Card.Body>
							<Card.Title>Создание NFT</Card.Title>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label id="namenft">Название</Form.Label>
								<Form.Control
									name="name"
									placeholder="Название моего НФТ"
									aria-label="name"
									aria-describedby="namenft"
									value={formData.name}
									onChange={handleInputChange}
									isInvalid={!!errors.name}
								/>
								<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId="description">
								<Form.Label>Описание</Form.Label>
								<Form.Control
									name="description"
									as="textarea"
									aria-label="Описание"
									placeholder="Что-то про НФТ..."
									value={formData.description}
									onChange={handleInputChange}
									isInvalid={!!errors.description}
									maxLength={200}
								/>
								<Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId="loadedImage" className="mb-3">
								<Form.Label>Изображение</Form.Label>
								<Form.Control
									type="file"
									accept=".jpg,.jpeg,.png"
									onChange={handleFileInputChange}
									ref={imageInput}
									isInvalid={!!errors.loadedImage}
								/>
								<Form.Control.Feedback type="invalid">{errors.loadedImage}</Form.Control.Feedback>
							</Form.Group>
						</Card.Body>
						<Card.Footer>
							<Button variant="primary" type="submit">
								Создать
							</Button>
						</Card.Footer>
					</Form>
				</Card>
			</Col>
		</Row>
	);
}

export default CreationNft;
