// Object adalah sekumpulan properties, dimana properties ini merupakan sebuah key-value
// Cara mengakses object adalah dengan menggunakan key, contoh: object.key
// const fitnessData = {
//   totalSteps: 12432,
//   totalMiles: 119,
//   totalCalories: 1000,
// };
// console.log(fitnessData.totalSteps);
// console.log(fitnessData.totalMiles);
// console.log(fitnessData.totalCalories);

// const Person = {
//   name: "Iqram",
//   age: "22",
//   address: "Jakarta",
// };
// const Stuff = {
//   object: "Shoes",
//   price: 1500000,
//   isReady: true,
//   size: ["39", "40", "41", "42", "43", "44"],
//   color: ["Black", "White", "Red", "Blue"],
//   Location: {
//     Jakarta: 10,
//     Bandung: 20,
//   },
// };

// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.addres);

// console.log(Stuff.object);
// console.log(Stuff.price);
// console.log(Stuff.isReady);
// acsessing array in an object
// console.log(Stuff.size[3]);
// console.log(Stuff.color[0]);
// console.log(Stuff.Location.Jakarta);

// // Menambahkan kedalam object
// console.log(Person);
// Person.isMarried = true;
// console.log(Person.isMarried);
// console.log(Person);
// # Awal: { name: 'Iqram', age: '22', addres: 'Jakarta' }
// # Setelah Tambah: { name: 'Iqram', age: '22', addres: 'Jakarta', isMarried: true }
// # Properti isMarried ditambah di akhir objek.

// // Menghapus dari object
// delete Person.isMarried;
// console.log(Person);
// console.log(Person.isMarried); // undefined
// # Awal: { name: 'Iqram', age: '22', addres: 'Jakarta', isMarried: true }
// # Setelah Hapus: { name: 'Iqram', age: '22', addres: 'Jakarta' }


// Array + Object
// Example 1
// const Student = {
//   firstName: "John",
//   lastName: "Doe",
//   Hoby: ["coding", "reading"],
//   Exam: {
//     Midterm: 80,
//     Final: 90,
//   },
// };

// Example 2
const shoppingCart = [
  {
    product: "Cheese",
    price: 10,
    quantity: 2,
  },
  {
    product: "Tomato",
    price: 5,
    quantity: 1,
  },
  {
    product: "Aple",
    price: 7,
    quantity: 5,
  },
];

// console.log(shoppingCart[0].price);
for (let i = 0; i < shoppingCart.length; i++) {
  const row = shoppingCart[i];
  console.log(`Cart ${i + 1}`);
  console.log("Item :");
  for (let j = 0; j < row.length; j++) {
    console.log(`   ${row[j]}`);
  }
}


// Destructing object, extract only title, price, and category in one line.
// const product = {
//     id: 1,
//     title: "Laptop",
//     price: 15000000,
//     stock: 10,
//     category: "Electronics"
// };

// const {title, price, category} = product;

// console.log(title);
// console.log(price);
// console.log(category);
