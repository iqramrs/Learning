// #function
// function namaFungsi(){
//     lakukan proses
// }
// function nyanyi() {
//   console.log("check");
//   console.log("doremi");
// }

// nyanyi();

// contoh iseng function + for loop
// for (let i = 1; i <= 5; i++) {
//     console.log(`Pemanggilan ke : ${i}`);
//     nyanyi();
// }

// #parameter dan argument
// parameter adalah variabel yang ada di dalam function
// argument adalah nilai (bisa di isi nilai apa saja) yang dikirimkan ke parameter
// jika function digunakan tanpa argument maka harus definiskan default value pada parameter (ada di file Additional)

// function menyapa(name) // <- ini parameter
//   {
//     console.log(`Halo ${name}. Selamat Pagi!`);
// }
// menyapa("Iqram");// <- ini agrument 

// output : Halo Iqram. Selamat Pagi!

// multiple parameter dan argument
// function total(a, b) {
//     const nilai = a + b;
//     console.log(nilai);
// }
// total(10, 20); // output : 30

//#return
// return digunakan untuk mengembalikan nilai dari function
// function tambah(a, b) {
//   return a + b; // Ini adalah "jawaban" dari mesin
// }

// const hasil = tambah(5, 3); // hasil = 8

//#Scope
// Scope adalah area atau ruang lingkup dimana variabel dapat diakses

// let linux = 'Redhat';

// function os(){
//     let linux = 'debian';
//     linux; -> Debian
// }

// linux; -> Redhat

// let programming = "JavaScript";

// function typeSafe() {
//     let programming = "Python";
//     console.log(programming); //JavaScript
// }

// console.log(programming); //JavaScript
// typeSafe() //Python

//#Blocked scope
// Block scope adalah aturan dimana variabel hanya bisa diakses di dalam "blok" tempat dia dideklarasi.
// {
//     // Ini adalah sebuah blok
//     let x = 10;
// }

// #Lexical Scope
// Lexical scope adalah aturan dimana variabel hanya bisa diakses di dalam "blok" tempat dia dideklarasi.
// function lamarKerja(){
//     const jabatan = "Software Engineer";
//     function orangDalam(){
//         let kenalan = `Orang dalam bisa membuat menjadi ${jabatan}`;
//         console.log(kenalan);
//     }
//     orangDalam();
// }

// lamarKerja();

// #Function expression
// adalah sebuah fungsi yang dideklarasikan dengan menggunakan operator assignment (=)

// before
// function perpangkatan(nilai){
//     return nilai*nilai;
// }
// let hasil = perpangkatan(5);
// console.log(hasil); //25

// after
// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;
// };
// hasilPerpangkatan(5); // 25

// #Function sebagai argument
// function duaKali(func){
//     func()
//     func()
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// duaKali(lemparDadu) // 4 4

// #Function sebagai return

// function returnFunction() {
//   const random = Math.random();
//   if (random > 0.5) {
//     return function () {
//       console.log("Anda mendapatkan nilai besar");
//     };
//   } else {
//     return function () {
//       console.log("Anda mendapatkan nilai kecil");
//     };
//   }
// }

// const result = returnFunction();
// result(); // Anda mendapatkan nilai kecil

// Method
// Method adalah sebuah fungsi yang ada di dalam sebuah object
// Method dapat diakses dengan menggunakan notasi dot (.) atau bracket ([]) dan nama method
// Method dapat memiliki parameter dan return value
// Method dapat dijadikan sebagai callback function
// Method dapat dijadikan sebagai event handler dan dapat dijadikan sebagai property object

// function myFunc() {
//   // Function biasa
//   console.log("Hello, World!");
//   return "Hello, World!";
// }

// const myMath = { // Object
//   perkalian: function (x, y) { // Method
//     return x * y;
//   },
// };

// let hasil = myMath.perkalian(2,3);
// console.log(hasil); // 6

// this
// this adalah keyword untuk memanggil suatu property pada object yang sama. Tujuannya untuk mendapatkan nilai
// const saya = {
//     nama: "Rizky",
//     umur: 20,
//     info: function(){
//         return`Hi, Saya ${this.nama} yang berumur ${this.umur} tahun.`
//     }
// }
// console.log(saya.info()); // Hi, Saya Rizky yang berumur 20 tahun.
// saya.nama = 'Iqram';
// console.log(saya.info()); // Hi, Saya Iqram yang berumur 20 tahun.

// try and catch
// try adalah keyword untuk mengeksekusi kode yang mungkin menghasilkan error
// catch adalah keyword untuk menangani error yang terjadi pada try
// try dan catch dapat digunakan bersamaan dalam satu block kode

try {
  //jika error terjadi maka akan di tangani oleh catch
  console.log(saya.info());
} catch {
  // jika error terjadi maka akan di tangani oleh catch
  console.log("Error");
}

console.log("after try and catch");

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log('Silahkan masukkan argument pada function teriak()');
  }
}

teriak(12); // HELLO
console.log('after function teriak()'); // after function teriak()