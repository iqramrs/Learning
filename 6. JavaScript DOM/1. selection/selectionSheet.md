# JavaScript DOM - Properties & Methods yang Penting

---

## ![alt text](image.png)

# classList

## Penjelasan

`classList` adalah properti yang digunakan untuk membaca, menambah, menghapus, atau mengecek class CSS yang dimiliki oleh sebuah elemen HTML.

## Kegunaan

- Menambahkan class.
- Menghapus class.
- Mengaktifkan/menonaktifkan class.
- Mengecek apakah sebuah class ada.

## Contoh Penggunaan

```javascript
const box = document.querySelector(".box");

// Menambah class
box.classList.add("active");

// Menghapus class
box.classList.remove("active");

// Toggle class
box.classList.toggle("dark");

// Mengecek class
console.log(box.classList.contains("active"));
```

---

# getAttribute()

## Penjelasan

`getAttribute()` digunakan untuk mengambil nilai dari sebuah attribute HTML.

## Kegunaan

- Membaca href.
- Membaca src.
- Membaca id.
- Membaca data-\* attribute.

## Contoh Penggunaan

```javascript
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
```

---

# setAttribute()

## Penjelasan

`setAttribute()` digunakan untuk membuat atau mengubah attribute pada elemen HTML.

## Kegunaan

- Mengubah href.
- Mengubah src gambar.
- Memberi id.
- Memberi class.
- Menambahkan data attribute.

## Contoh Penggunaan

```javascript
const img = document.querySelector("img");

img.setAttribute("src", "gambar.jpg");
img.setAttribute("alt", "Pemandangan");
```

---

# appendChild()

## Penjelasan

`appendChild()` digunakan untuk menambahkan sebuah node sebagai anak terakhir dari suatu elemen.

> Hanya menerima object Node.

## Kegunaan

- Menambahkan elemen baru.
- Membuat list dinamis.
- Membuat card secara JavaScript.

## Contoh Penggunaan

```javascript
const ul = document.querySelector("ul");

const li = document.createElement("li");
li.textContent = "Item Baru";

ul.appendChild(li);
```

---

# append()

## Penjelasan

`append()` digunakan untuk menambahkan node atau text ke bagian akhir elemen.

Berbeda dengan `appendChild()`, method ini dapat menerima beberapa parameter sekaligus.

## Kegunaan

- Menambahkan elemen.
- Menambahkan text.
- Menambahkan banyak elemen sekaligus.

## Contoh Penggunaan

```javascript
const div = document.querySelector(".container");

div.append("Halo Dunia");
```

Atau

```javascript
div.append(document.createElement("hr"));
```

---

# prepend()

## Penjelasan

`prepend()` menambahkan node atau text di bagian paling awal (sebelum child pertama).

## Kegunaan

- Menampilkan data terbaru di urutan atas.
- Menambahkan heading.
- Membuat notifikasi baru.

## Contoh Penggunaan

```javascript
const ul = document.querySelector("ul");

const li = document.createElement("li");
li.textContent = "Item Pertama";

ul.prepend(li);
```

---

# removeChild()

## Penjelasan

`removeChild()` menghapus child tertentu dari parent.

> Method ini dipanggil dari parent.

## Kegunaan

- Menghapus item list.
- Menghapus card.
- Menghapus elemen tertentu.

## Contoh Penggunaan

```javascript
const ul = document.querySelector("ul");
const li = document.querySelector("li");

ul.removeChild(li);
```

---

# remove()

## Penjelasan

`remove()` digunakan untuk menghapus elemen itu sendiri dari DOM.

Lebih sederhana dibanding `removeChild()`.

## Kegunaan

- Menghapus card.
- Menghapus modal.
- Menghapus notifikasi.

## Contoh Penggunaan

```javascript
const modal = document.querySelector(".modal");

modal.remove();
```

---

# createElement()

## Penjelasan

`createElement()` digunakan untuk membuat elemen HTML baru.

Elemen belum muncul di halaman sampai ditambahkan ke DOM.

## Kegunaan

- Membuat card.
- Membuat list.
- Membuat tombol.
- Membuat form secara dinamis.

## Contoh Penggunaan

```javascript
const p = document.createElement("p");

p.textContent = "Belajar JavaScript DOM";
```

---

# innerText

## Penjelasan

`innerText` digunakan untuk membaca atau mengubah teks yang terlihat oleh pengguna.

Property ini memperhatikan CSS (`display: none`, `visibility`, dll).

## Kegunaan

- Mengubah isi teks.
- Menampilkan pesan.
- Membaca teks yang terlihat.

## Contoh Penggunaan

```javascript
const h1 = document.querySelector("h1");

console.log(h1.innerText);

h1.innerText = "Selamat Datang";
```

---

# textContent

## Penjelasan

`textContent` membaca atau mengubah seluruh isi teks sebuah elemen, termasuk teks yang disembunyikan oleh CSS.

Lebih cepat daripada `innerText`.

## Kegunaan

- Mengambil semua teks.
- Mengubah isi teks.
- Parsing data.

## Contoh Penggunaan

```javascript
const div = document.querySelector(".box");

console.log(div.textContent);

div.textContent = "Belajar DOM";
```

---

# innerHTML

## Penjelasan

`innerHTML` digunakan untuk membaca atau mengubah isi HTML di dalam suatu elemen.

Berbeda dengan `innerText`, property ini dapat membuat tag HTML baru.
RULE: Use `textContent` when displaying user input. Only use `innerHTML` when YOU control the content.

## Kegunaan

- Membuat elemen dengan cepat.
- Menampilkan template HTML.
- Mengganti seluruh isi elemen.

## Contoh Penggunaan

```javascript
const box = document.querySelector(".box");

box.innerHTML = "<h2>Hello</h2><p>Belajar DOM</p>";
```

---

# value

## Penjelasan

`value` digunakan untuk membaca atau mengubah nilai dari elemen form.

Biasanya digunakan pada:

- input
- textarea
- select

## Kegunaan

- Mengambil input user.
- Mengubah isi input.
- Validasi form.

## Contoh Penggunaan

```javascript
const input = document.querySelector("input");

console.log(input.value);

input.value = "Iqram";
```

---

# parentElement

## Penjelasan

`parentElement` mengembalikan elemen induk (parent) dari sebuah elemen.

## Kegunaan

- Naik ke parent.
- Mengubah parent.
- Menghapus child melalui parent.

## Contoh Penggunaan

```javascript
const li = document.querySelector("li");

console.log(li.parentElement);
```

---

# children

## Penjelasan

`children` mengembalikan semua child element (bukan text) dari suatu elemen.

Hasilnya berupa HTMLCollection.

## Kegunaan

- Mengakses semua child.
- Melakukan looping.
- Menghitung jumlah child.

## Contoh Penggunaan

```javascript
const ul = document.querySelector("ul");

console.log(ul.children);
```

---

# nextSibling

## Penjelasan

`nextSibling` mengembalikan node setelah elemen saat ini.

Node dapat berupa:

- Element
- Text
- Comment

Karena itu hasilnya sering berupa text node.

## Kegunaan

- Navigasi DOM.
- Berpindah ke node berikutnya.

## Contoh Penggunaan

```javascript
const item = document.querySelector("li");

console.log(item.nextSibling);
```

> Jika hanya ingin elemen HTML berikutnya, gunakan `nextElementSibling`.

---

# previousSibling

## Penjelasan

`previousSibling` mengembalikan node sebelum elemen saat ini.

Sama seperti `nextSibling`, hasilnya bisa berupa text node.

## Kegunaan

- Navigasi DOM.
- Berpindah ke node sebelumnya.

## Contoh Penggunaan

```javascript
const item = document.querySelector("li");

console.log(item.previousSibling);
```

> Jika hanya ingin elemen HTML sebelumnya, gunakan `previousElementSibling`.

---

# style

## Penjelasan

`style` digunakan untuk membaca atau mengubah CSS inline dari suatu elemen.

Property ini hanya mempengaruhi inline style, bukan stylesheet eksternal.

## Kegunaan

- Mengubah warna.
- Mengubah ukuran.
- Menampilkan/menyembunyikan elemen.
- Membuat animasi sederhana.

## Contoh Penggunaan

```javascript
const box = document.querySelector(".box");

box.style.backgroundColor = "royalblue";
box.style.color = "white";
box.style.padding = "20px";
```

---

# Ringkasan

| Property / Method | Fungsi                        |
| ----------------- | ----------------------------- |
| classList         | Mengelola class CSS           |
| getAttribute()    | Mengambil attribute           |
| setAttribute()    | Mengubah/Menambah attribute   |
| appendChild()     | Menambah node di akhir        |
| append()          | Menambah node atau text       |
| prepend()         | Menambah node di awal         |
| removeChild()     | Menghapus child tertentu      |
| remove()          | Menghapus elemen              |
| createElement()   | Membuat elemen baru           |
| innerText         | Mengambil teks yang terlihat  |
| textContent       | Mengambil semua teks          |
| innerHTML         | Mengambil atau mengubah HTML  |
| value             | Mengambil nilai input         |
| parentElement     | Mengambil parent              |
| children          | Mengambil semua child element |
| nextSibling       | Node setelah elemen           |
| previousSibling   | Node sebelum elemen           |
| style             | Mengubah CSS inline           |
