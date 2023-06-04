const upload_image = document.querySelector('#upload-image');
let image = '';

upload_image.addEventListener('change', () => {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		image = reader.result;
		document.querySelector(
			'#display-image'
		).style.backgroundImage = `url(${image})`;
	});

	reader.readAsDataURL(upload_image.files[0]);
});
