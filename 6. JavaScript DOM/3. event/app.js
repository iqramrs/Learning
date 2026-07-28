const button = document.querySelector('#clickme');

button.onclick = function () {
	console.log('You clicked me');
};

const scream = () => {
	console.log('Dont touch me');
};

button.onmouseover = scream;


// EVENT LISTENER
// event listener bisa menambahkan lebih dari satu event pada satu element, sedangkan onclick hanya bisa menambahkan satu event pada satu element
const eventbtn = document.querySelector('#eventbtn');
eventbtn.addEventListener('click', function () {
	alert('clicked');
});

function stepSatu() {
	console.log('step satu');
}

function stepDua() {
	console.log('step dua');
}

// perbedaan onclick dan addEventListener adalah jika kita menggunakan onclick maka event yang terakhir akan menimpa event sebelumnya, sedangkan jika kita menggunakan addEventListener maka event yang terakhir tidak akan menimpa event sebelumnya
// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;
// hasil = step dua; karena stepDua menimpa stepSatu

eventbtn.addEventListener('click', stepSatu);
eventbtn.addEventListener('click', stepDua);
// hasil = step satu, step dua; karena addEventListener tidak menimpa event sebelumnya