// ALUR KERJA
// 1. Membuat variabel container yang menampung element dengan id 'container'
// 2. Membuat variabel baseURL yang menampung URL dasar untuk gambar Pokemon
// 3. Melakukan perulangan sebanyak 500 kali untuk membuat elemen div baru dengan class 'pokemon', elemen img baru dengan atribut src yang sesuai dengan nomor i, dan elemen span baru dengan teks yang sesuai dengan nomor i
// 4. Menambahkan elemen img dan span ke dalam elemen div baru
// 5. Menambahkan elemen div baru ke dalam elemen dengan id 'container'
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container'); //membuat variabel container yang menampung element dengan id 'container'
const baseURL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //membuat variabel baseURL yang menampung URL dasar untuk gambar Pokemon

for (let i = 1; i <= 500; i++) {
    const pokeBall = document.createElement('div');
    pokeBall.classList.add('pokemon'); // menambahkan class 'pokemon' ke dalam elemen div baru

    const pokeImage = document.createElement('img');
    pokeImage.src = `${baseURL}${i}.png`; // memasukkan atribut src ke dalam elemen img baru dengan URL gambar Pokemon yang sesuai dengan nomor i

    const label = document.createElement('span');
    label.innerText = `#${i}`; // memasukkan nomor i ke dalam elemen span baru sebagai teks

    pokeBall.appendChild(pokeImage); // menambahkan elemen img baru ke dalam elemen div baru
    pokeBall.appendChild(label); // menambahkan elemen span baru ke dalam elemen div baru
    container.appendChild(pokeBall); // menambahkan elemen div baru ke dalam elemen dengan id 'container'
}
