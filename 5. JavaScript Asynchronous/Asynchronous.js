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

// callback version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// Promise version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

requestCallback(
  "movies.com",
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);
