// Array
// let peserta = [];
// let warna = ["hijau", "merah", "biru"];
// let angka = [1, 2, 3, 4, 5];
// let campuran = [true, "satu", 3, null];

// let panjang = angka.length;
// console.log(panjang);
// console.log(angka[2], campuran[1]);
// angka[2] = 8;
// angka[3] = " ";
// console.log(angka);

// Method Push and Pop
// push untuk menambahkan data pada akhir array
// pop untuk menghapus data pada akhir array
// let buah = [];
// buah.push("jeruk");
// console.log(buah);
// buah.push("mangga", "semangka", "apel", "pisang");
// console.log(buah);
// buah.pop();
// console.log(buah);
// // unshift untuk menambahkan data pada awal array
// // shift untuk menghapus data pada awal array
// buah.unshift("pisang");
// console.log(buah);
// buah.shift();
// console.log(buah);

// FREQUENTLY USED ARRAY METHOD
// ------------------------------------------------------------//
// concat untuk menggabungkan array
// let buah1 = ["pisang", "mangga"];
// let buah2 = ["apel", "semangka"];
// // console.log(buah1.concat(buah2));
// let buah3 = buah1.concat(buah2);
// console.log(buah3);

// // indexof untuk mencari index data pada array
// let buah = ["pisang", "mangga", "apel", "semangka"];
// console.log(buah.indexOf("apel"));

// // includes untuk mencari data pada array
// let kendaraan = ["motor", "mobil", "sepeda"];
// console.log(kendaraan.includes("mobil"));
// console.log(kendaraan.includes("pesawat"));

// // sort untuk mengurutkan data berdasarkan nilai awal pada array
// let number = [1, 5, 3, 9, 2, 100];
// let months = ["January", "March", "February", "December"];
// console.log(number.sort());
// console.log(months.sort());

// splice untuk menghapus data dan menambahkan data pada array
// let months = ["jan", "mar", "april", "jun", "jul", "aug"];
// console.log(months);
// months.splice(1, 0, "Feb");
// console.log(months);
// months.splice(4, 2, "May");
// console.log(months);

// Slice untuk menghapus data pada array sesuai index
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(3, -1));

// reverse untuk mengubah urutan data pada array
let number = [1, 2, 3, 4, 5];
console.log('Before :', number);
// console.log(number.reverse());
const reversed = number.reverse();
console.log('After :', reversed);

// join untuk mengubah array menjadi string
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));
// ------------------------------------------------------------//

// mengubah nilai const dengan array
const vehicle = ["Bike", "Car", "Truck"];
console.log(vehicle);
vehicle.push('Airplane');
console.log(vehicle);

// nested array
const board = [
  [null, null, "O"],
  ["X", "O", null],
  ["O", null, "X"],
];
console.log(board);
console.log(board.length);
console.log(board[0][2]);
console.log(board[1][1]);
console.log(board[2][0]);
