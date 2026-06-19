# JavaScript OOP (Object-Oriented Programming)

## Folder Overview

The **JavaScript OOP** folder (Folder 4) contains learning materials focused on **Object-Oriented Programming (OOP)** principles in JavaScript. This folder demonstrates different approaches and patterns for creating and managing objects in JavaScript, including factory functions, constructor functions, ES6 classes, and inheritance patterns.

### Files in this folder:

- **index.html** - HTML file to run the JavaScript code in a browser environment
- **OOP.js** - Main JavaScript file containing OOP concepts and examples

---

## OOP Concepts in OOP.js

### 1. **Factory Functions**

Factory functions are regular functions that return objects. They provide a simple way to create multiple instances of similar objects.

```javascript
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.hex = function () {
    const { r, g, b } = this;
    return hex(r, g, b);
  };
  return color;
}
```

**Advantages:**

- Simple and straightforward
- No need for `new` keyword
- Can encapsulate private data

**Disadvantages:**

- Each object instance gets its own copy of methods (memory inefficient)
- No built-in way to establish inheritance

---

### 2. **Constructor Functions**

Constructor functions are used with the `new` keyword to create object instances. By convention, constructor function names start with a capital letter.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.data = `${make} ${model} ${year}`;
}

const car1 = new Car("Honda", "BR-V", "2016");
console.log(car1.make); // Honda
```

**How it works:**

1. The `new` keyword creates a new empty object
2. The function is executed with `this` bound to that object
3. The object is returned implicitly

**Advantages:**

- More efficient than factory functions
- Methods can be added to the prototype (shared across instances)
- Clear intent with capital letter naming convention

---

### 3. **ES6 Classes**

Classes are syntactic sugar over constructor functions, providing a more organized and cleaner way to define objects and their behavior.

```javascript
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calsHSL();
  }

  colorName() {
    console.log(`Color name is ${this.name}`);
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
```

**Key Features:**

- **Constructor**: Initializes object properties
- **Methods**: Define behaviors/functionality
- **Cleaner syntax**: More readable and organized than constructor functions

**Color Class Example:**
The `Color` class in OOP.js demonstrates a practical use case:

- Accepts RGB values and converts them to different color formats
- Methods include: `rgb()`, `hex()`, `hsl()`, `fullysaturated()`, `opposite()`
- Uses HSL (Hue, Saturation, Lightness) color conversion algorithm

---

### 4. **Inheritance using `extends`**

Inheritance allows classes to inherit properties and methods from a parent class, promoting code reuse and reducing duplication.

```javascript
class Hewan {
  // Parent class
  constructor(nama, usia) {
    this.nama = nama;
    this.usia = usia;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

class Kucing extends Hewan {
  // Child class
  constructor(nama, usia, lives) {
    super(nama, usia); // Call parent constructor
    this.lives = lives;
  }

  meong() {
    return `${this.nama} mengeluarkan suara: Meong!`;
  }
}

class Anjing extends Hewan {
  // Another child class
  guk() {
    return `${this.nama} mengeluarkan suara: Guk!`;
  }
}
```

**How it works:**

- `Hewan` (Animal) is the parent class with common properties and methods
- `Kucing` (Cat) and `Anjing` (Dog) extend `Hewan`, inheriting its functionality
- Each child class adds its own specific methods (`meong()`, `guk()`)

**Advantages:**

- Eliminates code duplication
- Establishes logical hierarchy (is-a relationship)
- Easier to maintain and scale

---

### 5. **The `super` Keyword**

The `super` keyword is used in a child class to call the parent class's constructor and methods.

```javascript
class Kucing extends Hewan {
  constructor(nama, usia, lives) {
    super(nama, usia); // Calls parent constructor
    this.lives = lives; // Additional property
  }
}

const kucing1 = new Kucing("Mimi", 2, 9);
console.log(kucing1.nama); // Mimi (from parent)
console.log(kucing1.usia); // 2 (from parent)
console.log(kucing1.lives); // 9 (own property)
console.log(kucing1.makan()); // Mimi sedang makan (inherited method)
```

**Important Notes:**

- `super()` must be called before accessing `this` in the constructor
- Without `super()`, the child class won't have access to parent properties

---

## Key OOP Principles

### **1. Encapsulation**

Bundling data (properties) and methods that operate on that data into a single unit (class).

### **2. Inheritance**

Creating new classes based on existing ones, inheriting their properties and methods while adding new functionality.

### **3. Polymorphism**

Objects of different classes can be treated uniformly through inheritance. For example, both `Kucing` and `Anjing` inherit from `Hewan` but have different `meong()` and `guk()` methods.

### **4. Abstraction**

Hiding complex implementation details and exposing only the necessary functionality. The HSL conversion in the `Color` class is abstracted away in the `calsHSL()` method.

---

## Summary

The JavaScript OOP folder teaches you:

- ✅ Different ways to create objects (factory functions, constructors, classes)
- ✅ How to organize code with classes
- ✅ How to reuse code through inheritance
- ✅ Practical applications like color format conversion
- ✅ Real-world hierarchy modeling (Animals and their types)
