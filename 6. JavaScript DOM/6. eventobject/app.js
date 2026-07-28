document.querySelector('button').addEventListener('click', (evt) => {
	console.log(evt);
});

const input = document.querySelector('input');
// keydown = ketika tombol ditekan
input.addEventListener('keydown', (evt) => {
	switch (evt.code) { // evt.code = untuk mengetahui tombol yang ditekan baik huruf besar maupun huruf kecil dan shift kiri/kanan
		case 'ArrowUp':
			console.log('Tombol Arah Atas');
			break;
		case 'ArrowDown':
			console.log('Tombol Arah Bawah');
			break;
		case 'ArrowLeft':
			console.log('Tombol Arah Kiri');
			break;
		case 'ArrowRight':
			console.log('Tombol Arah Kanan');
			break;
		default:
			console.log('Tombol lain');
	}
});

// keyup = ketika tombol dilepas
input.addEventListener('keyup', (evt) => {
	console.log('Tombol dirilis');
});
