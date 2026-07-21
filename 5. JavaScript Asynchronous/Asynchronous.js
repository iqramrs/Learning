//setTimeout berfungsi untuk menunda eksekusi sebuah fungsi selama beberapa waktu tertentu. Fungsi ini menerima dua parameter, yaitu fungsi yang akan dieksekusi dan waktu tunda dalam milidetik.
// console.log("Start");
// setTimeout(() => {
//     console.log("after 3 seconds");
// }, 3000);
// console.log("End");

//Callback Hell Example
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "blue";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "yellow";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "orange";
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// PROMISE
// Promise adalah sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa depan. Promise memiliki 3 state yaitu pending, fulfilled, dan rejected.
// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500; // delay random antara 500ms hingga 5000ms
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection Timeout");
//       } else {
//         resolve(`Here is your data from ${url}`);
//       }
//     }, delay);
//   });
// };

// requestPromise("google.com")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Cara membuat promise dengan benar
new Promise((resolve, reject) => {
  resolve(() => {}); // resolve adalah fungsi yang dipanggil ketika promise berhasil diselesaikan
  reject(() => {}); // reject adalah fungsi yang dipanggil ketika promise gagal diselesaikan
});

// Async keyword digunakan untuk mendeklarasikan sebuah fungsi asynchronous.
// # Fungsi async akan otomatis menjadi promise, sehingga kita tidak perlu membuat promise secara manual.
// # Kalau fungsinya punya data, maka resolve akan mengirimkan data juga yang bisa kita tangkap dengan then. Jika tidak ada data, maka resolve akan mengirimkan undefined.
// # Kalau didalam function ada object throw error, maka akan menjalankan bagian reject dari promise, sehingga kita bisa menangkap errornya dengan catch
// const hello = async () => {
//   throw "Error";
//   // return "Hello World";
// };

// hello()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Await keyword digunakan untuk menunggu promise selesai sebelum melanjutkan eksekusi kode berikutnya. Await hanya bisa digunakan di dalam fungsi async.
// # await akan menunggu promise selesai, jika promise berhasil maka akan mengembalikan data yang dikirimkan oleh resolve.
// # Jika promise gagal maka akan mengembalikan error yang dikirimkan oleh reject.

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500; // delay random antara 500ms hingga 5000ms
    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your data from ${url} after ${delay}ms`);
      }
    }, delay);
  });
};

async function requestHandler() {
  try {
    let response = await requestPromise("google.com");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}


// Challenge 1
/*
Write an async function called getPost that:
Fetches data from https://jsonplaceholder.typicode.com/posts/1 (this is a real free API)
Converts the response to JSON
Logs the title property of the returned post
Handles errors with try/catch — if something goes wrong, log "Something went wrong: " followed by the error message
*/

async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.log(`Something went wrong: ${error.message}`);
  }
}

getPost();

// challenge 2
/*
Requirements:
Write an async function called getPosts that:
Fetches all posts from https://jsonplaceholder.typicode.com/posts
Filters only posts where userId === 1
Returns an array of just their titles
Logs the total count like: "Found 10 posts from user 1"
Logs each title on a separate line
Handles errors with try/catch
*/

async function getTitles() {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const userPosts  = data.filter((users) => users.userId === 1);
    const postTitles = userPosts.map((users) => users.title)
    console.log(`Found ${postTitles.length} posts from user 1`)
    for(const title of postTitles ){
      console.log(title)
    }
  } catch (error){
    console.log(`Something went wrong: ${error.message}`);
  }
}

getTitles()