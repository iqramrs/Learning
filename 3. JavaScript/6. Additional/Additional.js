// Default Value Parameter
// nilai yang digunakan saat fungsi dipanggil tapi tidak diberi nilai argument yang diperlukan
// biasanya default value terletak di belakang parameter yang membutuhkan argument

// contoh penggunaan default value parameter
// function lemparDadu (sisi = 6) {
//     return Math.floor(Math.random() * sisi) + 1;
// }

//with arrow function
// const lemparDadu = ((sisi = 6) => {
//     return Math.floor(Math.random() * sisi) + 1;
// })

//default value string
// function sapa(name, msg = "selamat malam") {
//   console.log(`Halo ${name}, ${msg}`);
// }

//////////////////////////////////////////

// spread operator pada function
// ... (titik tiga itu adalah spread operator)
// spread mengubah suatu array / object / string menjadi parameter yang dapat digunakan dalam function

// mengubah array menjadi parameter
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let max = Math.max(...angka);
// let min = Math.min(...angka);

//

// merge array dengan spread operator
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ["Alex", "Budi", "Caca", "Dedi", "Eva"];
// const campuran = [...angka, 10];
// const campuran = [...angka, ...nama];

//

// merge object dengan spread operator
// const user = {
//   nama: "john",
//   email: "john@gmail.com",
// };

// const newUser = { ...user, id: 123, password: 'password'};

//

// rest parameter
// berguna untuk mendefenisikan parameter yang flexible atau jumlahnya tidak terbatas
// function summary(...nums){
//     let total = 0;
//     for (let n of nums) total += n
//     return total;
// }

// const summary = (...nums) =>{
//     return nums.reduce((total, el) => total + el);
// };

// const nama = ["Alex", "Budi", "Caca", "Dedi", "Eva", "Fifi", "Gigi"];

// const pemenang = (gold, silver, bronze, ...nama) => {
//   console.log(`Pemenang emas: ${gold}`);
//   console.log(`Pemenang perak: ${silver}`);
//   console.log(`Pemenang perunggu: ${bronze}`);
//   console.log(`Pemenang lainnya: ${nama}`);
// };

///////////////////////////////

//Destructing
// unboxing array
// const nama = ["Alex", "Budi", "Caca", "Dedi", "Eva", "Fifi", "Gigi"]
// const [p1, p2, p3, ...lainnya] = nama;
// console.log(p1); // Alex
// console.log(p2); // Budi
// console.log(p3); // Caca
// console.log(lainnya); // [ 'Dedi', 'Eva', 'Fifi', 'Gigi' ]

//

// unboxing object
// const user = {
//   nama: "john",
//   email: "john@gmail.com",
// };

// const { nama: name, email, phone = '0931231231' } = user;
// console.log(name); // john
// console.log(email); // john@gmail.com
// console.log(phone); // 0931231231

//

// unboxing parameter
// const user = {
//   nama: "john",
//   email: "john@gmail.com",
//   role: "admin",
// };

// const userAndRole = ({ nama, role }) => {
//     return `Nama: ${nama}, Role: ${role}`;
// }
// console.log(userAndRole(user)); // Nama: john, Role: admin

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

const anime = animeList.map(({judul, rating}) => {
    return `Judul: ${judul}, Rating: ${rating}`;
})