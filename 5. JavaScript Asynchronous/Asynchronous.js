// Call Stack Functions
// Call Stack adalah struktur data yang digunakan untuk menyimpan informasi tentang fungsi-fungsi yang sedang dieksekusi dalam program.

// Contoh Call Stack
// function firstFunction() {
//     console.log("This is the first function.");
//     secondFunction();
// }

// function secondFunction() {
//     console.log("This is the second function.");
//     thirdFunction();
// }
// function thirdFunction() {
//     console.log("This is the third function.");
// }
// firstFunction();

// Output:
// This is the first function.
// This is the second function.
// This is the third function.

// ---------
// Asynchronous Functions
// Asynchronous functions adalah fungsi yang memungkinkan program untuk mengeksekusi kode lain sementara menunggu operasi yang memakan waktu selesai, seperti permintaan jaringan atau pembacaan file.
// setTimeout adalah salah satu contoh fungsi asynchronous yang digunakan untuk menunda eksekusi kode selama periode waktu tertentu.
console.log("show first");

setTimeout(() => {
  console.log("This is an asynchronous message.");
}, 3000);

console.log("show second");

// Output:
// show first
// show second
// This is an asynchronous message. (after 3 seconds)

// promise adalah objek yang mewakili penyelesaian atau kegagalan dari operasi asynchronous. Promise memiliki tiga status: pending, fulfilled, dan rejected.
