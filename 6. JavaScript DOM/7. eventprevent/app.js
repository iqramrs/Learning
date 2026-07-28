//PREVENT DEFAULT
//
// contoh penggunaan preventDefault yang mencegah link untuk melakukan redirect ke halaman lain
document.querySelector('a').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('harusnya ke google.com');
});

//

const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// change disini berfungsi untuk mengirimkan event ketika value dari input berubah, misal ketika user menganti value dari input dan menekan tombol enter atau pindah ke element lain maka akan otomatis mengirimkan event change
input.addEventListener('change', (evt) => {
    console.log('input value changed');
});

// sedangkan input akan langsung mengirim event ketika user mengubah value dari input meskipun user belum selesai mengetik, misal ketika user mengetikkan sesuatu di input maka akan langsung mengirimkan event input per karakter yang diketikkan
input.addEventListener('input', (evt) => {
    // document.querySelector('h1').innerText = input.value; // menampilkan value dari input ke dalam <h1>
    console.log('value submitted: ', input.value); // menampilkan value dari input ke dalam console
});

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const noteValue = input.value; // property.value mengambil value dari input
    console.log(noteValue); // mengecek value dari input
    const newList = document.createElement('li'); // membuat element baru <li>
    newList.innerText = noteValue; // menambahkan value dari input ke dalam <li>
    // console.log(newList); // mengecek element <li> yang baru dibuat
    list.append(newList); // menambahkan <li> ke dalam <ul> menggunakan append
    console.log('Form submitted');
    input.value = ''; // mengosongkan input setelah submit
});


// EVENT DELEGATION
list.addEventListener('click', function (evt) {
    evt.target.nodeName === 'LI' && evt.target.remove(); // jika target dari event adalah <li> maka hapus <li> tersebut
});
