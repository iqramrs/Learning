//forEach
//dapat menggunakan callback function yang berarti dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element){
//     console.log(element);
// }

// forEach
// angka.forEach(print);
//untuk setiap jumlah element didalam angka maka akan memanggil fungsi print sebanyak jumlah element yang dimiliki array angka

// callback function
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element); // 2, 4, 6, 8
//   }
// });

//contoh penggunaan callback function dengan parameter
// const animeList = [
//   { judul: "Naruto", rating: 89 },
//   { judul: "One Piece", rating: 92 },
//   { judul: "Bleach", rating: 85 },
//   { judul: "Dragon Ball", rating: 88 },
//   { judul: "Fullmetal Alchemist", rating: 90 },
// ];

// animeList.forEach(function (anime) {
//     console.log(`${anime.judul} - ${anime.rating}/100`)
// });

//map
//map dapat digunakan untuk mengubah data array menjadi array baru dengan data yang telah diubah

// mengkalikan setiap nilai dengan 2
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function (num) {
//     return num * 2; // 2, 4, 6, 8, 10, 12, 14, 16, 18
// });

// mapping animelist menjadi array baru dengan judul yang telah diubah menjadi huruf besar
// const animeList = [
//   { judul: "Naruto", rating: 89 },
//   { judul: "One Piece", rating: 92 },
//   { judul: "Bleach", rating: 85 },
//   { judul: "Dragon Ball", rating: 88 },
//   { judul: "Fullmetal Alchemist", rating: 90 },
// ];

// const judul = animeList.map(function(list){
//     return list.judul.toUpperCase();
//     //'NARUTO', 'ONE PIECE', 'BLEACH', 'DRAGON BALL', 'FULLMETAL ALCHEMIST'
// })

// arrow function
// arrow function dapat digunakan untuk mengurangi kode yang digunakan dalam callback function

//perbandingan dengan function pada umumnya

// function normal
// function perpangkatan(x) {
//   return x * x;
// }
// const hasil = perpangkatan(5); //25

// expression function
// const hasil = function (x) {
//   return x * x;
// }; // hasil(5) = 25

// arrow function dengan parameter
// const hasil = (x) => {
//   return x * x;
// }; // hasil(5) = 25

// arrow function tanpa parameter
// const hasil2 = () => {
//   return Math.floor(Math.random() * 100);
// };

// implisit return
// tidak perlu keyword return jika dalam function hanya proses sederhana atau hanya satu baris kode saja
// const hasil3 = () => (
//   Math.floor(Math.random() * 100)
// );

// const tambah = (a, b) => a + b;

// setTimeout
// akan mengeksekusi kode setelah waktu tertentu(dalam satuan milisecond)
// setTimeout(function(){
//     //process
// }, 3000) // proses akan dijalankan setelah 3 detik

// console.log('Hi...');
// setTimeout(() => {
//     console.log('masih disana nggak?');
// }, 5000);

// setInterval
// akan mengeksekusi kode secara berulang-ulang setiap waktu tertentu (dalam satuan milisecond)
// setInterval(function(){
//     //process
// }, 3000) // proses akan dijalankan setiap 3

// setInterval(() => {
//     console.log(Math.floor(Math.random() * 100) + 1);
// }, 2000);

// filter
// function yang akan mengembalikan nilai array lagi yang sudah dimanipulasi sesuai dengan kriteria yang ditetapkan

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const angkaGanjil = angka.filter((n) => {
//   return n % 2 === 1; // [1, 3, 5, 7, 9]
// });

// const animeList = [
//   { judul: "Naruto", rating: 89 },
//   { judul: "One Piece", rating: 92 },
//   { judul: "Bleach", rating: 85 },
//   { judul: "Dragon Ball", rating: 88 },
//   { judul: "Fullmetal Alchemist", rating: 90 },
//   { judul: "Death Note", rating: 95 },
//   { judul: "Attack on Titan", rating: 92 },
//   { judul: "Hunter x Hunter", rating: 90 },
// ];

// const animeBagus = animeList.filter((anime) => anime.rating >= 90);
// const judulAnimeBagus = animeBagus.map((anime) => anime.judul);

// const judulAnimeBagus = animeList
// .filter((anime) => anime.rating >= 90)
// .map((anime) => anime.judul); // chain method

// const animeCukupBagus = animeList.filter(
//   (anime) => anime.rating >= 80 && anime.rating < 90
// );

//every
// akan mengembalikan nilai true jika semua elemen array memenuhi kriteria yang ditetap
// const kataKata = ['kita', 'kamu', 'saya'];
// kata.every(kata => {
//     return kata.length === 4;
// }) // true

// const examScore = [80, 90, 70, 75];
// const isGraduate = examScore.every((score) => score >= 70); //true karena semua nilai diatas 70

//some
// akan mengembalikan nilai true jika salah satu elemen array memenuhi kriteria yang
// const kataKata = ['kita', 'kamu', 'saya', 'dia'];
// kata.some(kata => {
//     return kata.length === 4;
// }) // true

// const animeList = [
//   { judul: "Naruto", rating: 89 },
//   { judul: "One Piece", rating: 92 },
//   { judul: "Bleach", rating: 85 },
//   { judul: "Dragon Ball", rating: 88 },
//   { judul: "Fullmetal Alchemist", rating: 90 },
//   { judul: "Death Note", rating: 95 },
//   { judul: "Attack on Titan", rating: 92 },
//   { judul: "Hunter x Hunter", rating: 90 },
// ];

// const isHighRated = animeList.some((anime) => anime.rating >= 99); //false // karena tidak ada satupun yang nilainya 99 keatas

// reduce
// melakukan proses sebanyak element milik suatu array. Tetapi nilai baliknya adalah single value
// akan mengembalikan nilai yang merupakan hasil dari operasi pengurangan
// reduce bantu jumlahkan (atau operasi lain) semua elemen array jadi satu nilai.

// nilai reduce by default adalah 0
// const subtotal = [1500, 20000, 4000, 19000, 32000];
// const total = subtotal.reduce((currentTotal, singleSubtotal) => {
//   return currentTotal + singleSubtotal;
// });
// console.log(total); // Output: 76500

// define nilai reduce = 100
// const total = subtotal.reduce((currentTotal, singleSubtotal) => {
//   return currentTotal + singleSubtotal;
// }, 100); // Nilai awal reduce = 100
// console.log(total); // Output: 76600 (76500 + 100)

// const examScore = [80, 90, 70, 75];

// menggunakan forEach
// let total = 0;
// examScore.forEach((score) => {
//   total += score;
// });
// console.log(total); // Output : 315

// menggunakan reduce
// const total = examScore.reduce((current, score) => {
//   return current + score;
// }); // output : 315

const animeList = [
  { judul: "Naruto", rating: 89 },
  { judul: "One Piece", rating: 92 },
  { judul: "Bleach", rating: 85 },
  { judul: "Dragon Ball", rating: 88 },
  { judul: "Fullmetal Alchemist", rating: 90 },
  { judul: "Death Note", rating: 95 },
  { judul: "Attack on Titan", rating: 92 },
  { judul: "Hunter x Hunter", rating: 90 },
];

const bestAnime = animeList.reduce((best, current) => {
  console.log(best, current); // debugging
  if (current.rating > best.rating) {
    return current;
  }
  return best;
}); // output : { judul: "Death Note", rating: 95 }
