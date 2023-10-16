import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function confirmDialog({ title, description }: { title: string; description: string }): Promise<boolean> {
	return new Promise<boolean>((resolve) => {
		const modalRoot = document.createElement("div");
		modalRoot.classList.add("modal-root");
		document.body.appendChild(modalRoot);

		const onClose = () => {
			modalRoot.remove();
			resolve(false);
		};

		const onConfirm = () => {
			modalRoot.remove();
			resolve(true);
		};

		const modalContent = <ConfirmDialog title={title} description={description} handleClose={onClose} handleConfirm={onConfirm} />;

		const root = ReactDOM.createRoot(modalRoot);
		root.render(modalContent);
	});
}

export default function ConfirmDialog({
	title,
	description,
	handleClose,
	handleConfirm,
}: {
	title: string;
	description: string;
	handleClose: () => void;
	handleConfirm: () => void;
}) {
	const [open, setOpen] = useState(true);

	function onClose() {
		handleClose();
		setOpen(false);
	}

	function onConfirm() {
		handleConfirm();
		setOpen(false);
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === "Enter") onConfirm();
		if (event.key === "Escape") onClose();
	};

	useEffect(() => {
		if (open) {
			document.addEventListener("keydown", handleKeyPress as any);
		} else {
			document.removeEventListener("keydown", handleKeyPress as any);
		}
		return () => {
			document.removeEventListener("keydown", handleKeyPress as any);
		};
	});

	return (
		<Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{description}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onClose}>
					Отмена
				</Button>
				<Button variant="primary" onClick={onConfirm}>
					Ок
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
