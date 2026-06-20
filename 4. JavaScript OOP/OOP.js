// membuat object dengan factory function

// function untuk mengubah kode rgb menjadi hex
// const hex = (r, g, b) => {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function makeColor(r, g, b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.hex = function(){
//         const {r, g, b} = this;
//         return hex(r, g, b);
//     }
//     return color;
// }

// membuat object dengan constructor function
// cosntruct function adalah function yang digunakan untuk membuat object dengan menggunakan keyword new
// constructor function harus diawali dengan huruf kapital
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.data = `${make} ${model} ${year}`;
// }

// const car1 = new Car("Honda", "BR-V", "2016");

// console.log(car1.make); // Honda
// console.log(car1.model); // BR-V
// console.log(car1.year); // 2016
// console.log(car1.data); // Honda BR-V 2016

// membuat object dengan class

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//     this.calsHSL();
//   }
//   colorName() {
//     console.log(`Color name is ${this.name}`);
//   }
//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   calsHSL() {
//     let { r, g, b } = this;
//     //Make r, g, and b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     //Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;
//     if (delta == 0) h = 0;
//     else if (cmax == r) h = ((g - b) / delta) % 6;
//     else if (cmax == g) h = (b - r) / delta + 2;
//     else h = (r - g) / delta + 4;
//     h = Math.round(h * 60);
//     if (h < 0) h += 360;
//     l = (cmax + cmin) / 2;
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }

//   hsl(){
//     const { h, s, l } = this;
//     return `hsl(${h}, ${s}%, ${l}%)`;
//   }

//   fullysaturated() {
//     const { h, l } = this;
//     return `hsl(${h}, 100%, ${l}%)`;
//   }

//   opposite() {
//     const { h, s, l } = this;
//     const newHue = (h + 180) % 360;
//     return `hsl(${newHue}, ${s}%, ${l}%)`;
//   }
// }

// const skyBlue = new Color(135, 206, 235, "Sky Blue");

// penjelasan OOP, Extend, dan Super
// class Kucing {
//     constructor(nama, usia) {
//         this.nama = nama;
//     this.usia = usia;
// }

// makan(){
//     return `${this.nama} sedang makan`;
// }

// bersuara() {
//     return `${this.nama} mengeluarkan suara: Meong!`;
// }
// }

// class Anjing{
//     constructor(nama, usia) {
//         this.nama = nama;
//         this.usia = usia;
//     }

//     makan(){
//         return `${this.nama} sedang makan`;
//     }

//     bersuara() {
//         return `${this.nama} mengeluarkan suara: Guk!`;
//     }
// }

// class di atas memiliki banyak kode yang sama, kita bisa menggunakan inheritance untuk mengurangi duplikasi kode
class Hewan {
  // parent class
  constructor(nama, usia) {
    this.nama = nama;
    this.usia = usia;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

class Kucing extends Hewan {
  // child class
  constructor(nama, usia, lives) {
    super(nama, usia); // memanggil constructor parent class
    this.lives = lives; // menambahkan property lives pada child class
  }
  meong() {
    return `${this.nama} mengeluarkan suara: Meong!`;
  }
}

class Anjing extends Hewan {
  // child class
  guk() {
    return `${this.nama} mengeluarkan suara: Guk!`;
  }
}

const kucing1 = new Kucing("Mimi", 2, 9);
const anjing1 = new Anjing("Buddy", 3);

class Animal{
  constructor(name){
    this.name = name;
  }
  
  makeSound(){
    return `Some generic animal sound`;
  }
}

class Dog extends Animal{
  constructor(name,age){
    super(name);
    this.age=age;
  }
  
  makeSound(){
  return `Woof! Woof!` 
  }
}

class Cat extends Animal{
  makeSound(){
    return`Meow!`
  }
}

const animals = [new Dog("Buddy", 4), new Cat("Whiskers")];

for (const animal of animals) {
  console.log(animal.makeSound());
}