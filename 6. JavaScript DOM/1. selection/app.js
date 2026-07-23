// SELECTING WITH DOM METHODS
// getElementById adalah method untuk memilih element berdasarkan id. Method ini akan mengembalikan element pertama yang memiliki id yang sesuai dengan parameter yang diberikan. 
// getElementsByTagName adalah method untuk memilih element berdasarkan tag name. Method ini akan mengembalikan HTMLCollection yang berisi semua element yang memiliki tag name yang sesuai dengan parameter yang diberikan.
// getElementsByClassName adalah method untuk memilih element berdasarkan class name. Method ini akan mengembalikan HTMLCollection yang berisi semua element yang memiliki class name yang sesuai dengan parameter yang diberikan.


// const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
// 	// console.log(img.src);
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }


//QUERY SELECTOR
// querySelector adalah method untuk memilih element berdasarkan selector CSS. Method ini akan mengembalikan element pertama yang sesuai dengan selector yang diberikan.
// cari element h1 pertama
// document.querySelector('h1')

// cari element dengan id 'red'
// document.querySelector('#red')

// cari element dengan class 'square'
// document.querySelector('.square')

// cari element h1 pertama yang memiliki class 'square'
// document.querySelector('h1.square')

// jika ingin memilih semua element yang sesuai dengan selector CSS, gunakan querySelectorAll. Method ini akan mengembalikan NodeList yang berisi semua element yang sesuai dengan selector yang diberikan.

// const allLinks = document.querySelectorAll('p a');
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!';
// }

// STYLING WITH DOM 
const heading = document.querySelector('h1');
// heading.style.color = 'red';

const links = document.querySelectorAll('a');
for (let link of links) {
	link.style.color = 'green';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}