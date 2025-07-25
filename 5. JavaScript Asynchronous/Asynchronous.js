//Call Back Hell adalah situasi di mana fungsi-fungsi callback yang bersarang membuat kode sulit dibaca dan dipelihara. Hal ini terjadi ketika kita memiliki banyak callback yang terletak di dalam callback lainnya, sehingga menciptakan struktur kode yang dalam dan rumit.
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "green";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "purple";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//           }, 3000);
//         }, 3000);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//call back hell
// searchMoviesApi("batman", (movies) => {
//     saveToMyDb(
//         movies,
//         function(){
//             //Kalau Berhasil
//             filteringMovies(movies, () => {

//             })
//         },
//         () => {
//             //Kalau Gagal
//         }
//     );
// }, () => {
//     // server error
// });

// Untuk menghindari callback hell, kita bisa menggunakan Promise atau async/await.

// Promise adalah objek yang mewakili penyelesaian (atau kegagalan) dari operasi asinkron. Dengan menggunakan Promise, kita dapat menghindari callback hell dengan menulis kode yang lebih bersih dan mudah dibaca.

// Promise adalah "janji" bahwa suatu operasi (misal, nunggu data) bakal selesai, dengan 2 kemungkinan:
// Resolve: Berhasil, kembalikan hasil.
// Reject: Gagal, kembalikan error.
// Sintaks: new Promise((resolve, reject) => { ... })
// # resolve dipanggil kalau sukses.
// # reject dipanggil kalau gagal.

// callback version
// const requestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Error: Connection Timeout");
//     } else {
//       success(`Success: ${url} (${delay}ms)`);
//     }
//   }, delay);
// };
// requestCallback(
//   "movies.com",
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

// Promise version
// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 3000) {
//         reject("Error: Connection Timeout");
//       } else {
//         resolve(`Success: ${url} (${delay}ms)`);
//       }
//     }, delay);
//   });
// };

// requestPromise('google.com').then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   });

// requestPromise("movies.com")
//   .then((result) => {
//     console.log(result);
//     console.log("step 1 done");
//     return requestPromise("movies.com");
//   })
//   .then(() => {
//     console.log("Step 2");
//     return requestPromise("movies.com");
//   })
//   .then(() => {
//     console.log("Step 3");
//     return requestPromise("movies.com");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// Dengan Promise, kita bisa menghindari callback hell dengan chaining .then() untuk setiap langkah yang ingin kita lakukan setelah operasi asinkron selesai. Jika terjadi error, kita bisa menangkapnya dengan .catch() di akhir rantai.
// Dengan cara ini, kode kita menjadi lebih terstruktur dan mudah dibaca, tanpa harus bersarang terlalu dalam seperti pada callback hell.

// Membuat promise
// const contohPromise = () => {
//   return new Promise((resolve, reject) => {
//     // resolve(() => {
//     //   console.log("Promise resolved");
//     // });
//     // reject(() => {
//     //   console.log("Promise rejected");
//     // });
//   });
// }

// const req = contohPromise();


// async dan await adalah fitur di JavaScript yang memungkinkan kita menulis kode asinkron dengan cara yang lebih mudah dibaca, mirip dengan kode sinkron. Dengan async/await, kita bisa menulis kode yang terlihat seperti kode sinkron, tetapi tetap menjalankan operasi asinkron di belakang layar.
// async digunakan untuk mendeklarasikan fungsi yang mengembalikan Promise.
// await digunakan untuk menunggu Promise selesai sebelum melanjutkan eksekusi kode.