export default function imageSize(imageUrl: string): Promise<{ width: number; height: number }> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = imageUrl;

		img.onload = () => {
			const width = img.width;
			const height = img.height;
			resolve({ width, height });
		};

		img.onerror = (error) => {
			reject(error);
		};
	});
}
