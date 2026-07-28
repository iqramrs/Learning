// addEventListener adalah sebuah method yang digunakan untuk menambahkan event listener pada sebuah elemen HTML. Dengan menggunakan addEventListener, kita dapat menangani berbagai jenis event seperti klik, hover, input, dan lain-lain. Metode ini memungkinkan kita untuk mengeksekusi fungsi tertentu ketika event tersebut terjadi pada elemen yang ditargetkan.


const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const generateRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener('click', () => {
	const newColor = generateRandomColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
	console.log(`Background color changed to: ${newColor}`);
});

