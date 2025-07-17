// tipe tipe looping | for | while | for..of (array) | for..in (object)|

// #for
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// #array dan looping
// setiap melakukan pengulangan dengan array, selalu diawali dengan nilai awal 0 dan batasnya sampai panjangnya suatu array yang digunakan
// let buah = ["apel", "mangga", "pisang", "jeruk"];

// for (let i = 0; i < buah.length; i++) {
//   console.log(i + 1, buah[i]);
// }

// #nested loop
// let string = "LMAO";
// for (i = 1; i <= 6; i++) {
//   console.log("Nomor : ", i);
//   for (let j = 0; j < string.length; j++) {
//     console.log("   Karakter : ", string[j]);
//   }
// }

// const pilihan = "abcd";
// for (i = 1; i <= 6; i++) {
//   console.log(`${i}. Soal Nomor ${i} :`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//   }
// }

// #nested array + nested loop
// const studentRow = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];
// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row ke -> ${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }

// #while
// let num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// Authentication using while
// const Password = 'iqram2003';
// let guess = prompt('Enter your password: ');
// while (guess !== Password){
//     guess = prompt('Enter your password: ');
// }
// alert('accses granted!');

// #using break
// for(let i = 0 ; i < 1000 ; i++){
//     console.log(i);
//     if(i === 123) break;
// }

// #for..of
// for (variable of iterable){
//   statement
// }

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'mango'];
// for(let fruit of fruits){
//     console.log(`Buah ${fruit}`);
// }

// const studentRow = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];

// for (let row of studentRow){
//     for (let student of row){
//         console.log(student);
//     }
// }

// #for..in
// const StudentScore = {
//   iqram: 90,
//   iqbal: 80,
//   Kevin: 70,
//   Noah: 60,
// };

// for (let student in StudentScore) {
//   console.log(`${student} memiliki skor ${StudentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(StudentScore);
// for (let score of scores) {
//   total += score;
// }
// console.log(total / scores.length);
