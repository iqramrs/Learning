// ALUR KERJA
// 1. Membuat variabel container yang akan menampung element dengan id 'container' untuk styling dan menambahkan elemen baru ke dalamnya
// 2. Membuat variabel baseURL yang menampung URL dasar untuk gambar Pokemon
// 3. Membuat perulangan for untuk menampilkan semua Pokemon dari nomor 1 sampai 505
// 4. Membuat elemen div baru yang akan membungkus elemen img dan span untuk setiap Pokemon
// 5. Menambahkan class dengan nama 'pokemon' ke dalam elemen div baru untuk styling
// 6. Membuat elemen img baru yang akan menampilkan gambar Pokemon
// 7. Memasukkan atribut src ke dalam elemen img baru dengan URL gambar Pokemon yang sesuai dengan nomor i
// 8. Membuat elemen span baru yang akan menampilkan nomor Pokemon
// 9. Memasukkan nomor i ke dalam elemen span baru sebagai teks
// 10. Menambahkan elemen div kedalam container yang akan membungkus semua elemen div yang berisi gambar dan nomor Pokemon
// 11. Memasukkan elemen image kedalam div
// 12. Memasukkan elemen span kedalam div

const container = document.querySelector('#container'); // membuat variabel container yang akan menampung element dengan id 'container' untuk styling dan menambahkan elemen baru ke dalamnya
const baseURL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //membuat variabel baseURL yang menampung URL dasar untuk gambar Pokemon

for (let i = 1; i <= 505; i++) {
    const pokeBall = document.createElement('div'); // membuat elemen div baru yang akan membungkus elemen img dan span untuk setiap Pokemon
    pokeBall.classList.add('pokemon'); // menambahkan class  dengan nama'pokemon' ke dalam elemen div baru untuk styling

    const pokeImage = document.createElement('img'); // membuat elemen img baru yang akan menampilkan gambar Pokemon
    pokeImage.src = `${baseURL}${i}.png`; // memasukkan atribut src ke dalam elemen img baru dengan URL gambar Pokemon yang sesuai dengan nomor i

    const label = document.createElement('span'); // membuat elemen span baru yang akan menampilkan nomor Pokemon
    label.innerText = `#${i}`; // memasukkan nomor i ke dalam elemen span baru sebagai teks

    container.appendChild(pokeBall); // menambahkan elemen div kedalam container yang akan membungkus semua elemen div yang berisi gambar dan nomor Pokemon
    pokeBall.appendChild(pokeImage); // memasukkan elemen image kedalam div
    pokeBall.appendChild(label); // memasukkan elemen span kedalam div
}
