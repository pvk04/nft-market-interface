import { imageServerURL } from "config/imageServer";

export default function uploadImage(image: string) {
	return new Promise(async (resolve, reject) => {
		try {
			const imageExt = image.split(";")[0].split("/")[1];
			const binaryData = atob(image.split(",")[1]); // Игнорируйте "data:image/jpeg;base64," и декодируйте остальную часть

			// Создайте буфер для бинарных данных
			const arrayBuffer = new ArrayBuffer(binaryData.length);
			const view = new Uint8Array(arrayBuffer);
			for (let i = 0; i < binaryData.length; i++) {
				view[i] = binaryData.charCodeAt(i);
			}
			// Создайте объект Blob из бинарных данных
			const blob = new Blob([arrayBuffer], { type: `image/${imageExt}` }); // Укажите правильный MIME-тип

			const formData = new FormData();
			formData.append("file", blob);
			const imageResponse = await fetch(`${imageServerURL}/file`, {
				method: "POST",
				body: formData,
			});
			resolve(`${imageServerURL}/file/` + JSON.parse(await imageResponse.text())[0].name);
		} catch (error) {
			reject(error);
		}
	});
}
