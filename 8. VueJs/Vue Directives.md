# Vue.js Directives

Direktif (Directives) adalah atribut khusus yang diawali dengan awalan `v-`. Direktif digunakan untuk menambahkan perilaku dinamis pada elemen HTML, seperti menampilkan data, menangani event, melakukan perulangan, hingga menghubungkan input dengan data.

---

# Daftar Direktif Vue.js

| Direktif | Fungsi |
|----------|--------|
| `v-bind` (`:`) | Menghubungkan data ke atribut HTML |
| `v-model` | Two-way Data Binding |
| `v-if` | Menampilkan elemen jika kondisi benar |
| `v-else-if` | Percabangan kondisi |
| `v-else` | Kondisi default |
| `v-show` | Menampilkan atau menyembunyikan elemen |
| `v-for` | Melakukan perulangan data |
| `v-on` (`@`) | Menangani event |
| `v-html` | Menampilkan HTML |
| `v-text` | Menampilkan teks |
| `v-once` | Render hanya sekali |
| `v-pre` | Melewati proses kompilasi |
| `v-cloak` | Mencegah template berkedip |
| `v-memo` | Optimasi rendering (Vue 3.2+) |

---

# v-bind (`:`)

## Penjelasan

`v-bind` digunakan untuk menghubungkan data JavaScript dengan atribut HTML secara dinamis.

## Kegunaan

- Mengubah `src` gambar
- Mengubah `href`
- Menambahkan class
- Menambahkan style
- Mengaktifkan atau menonaktifkan tombol

## Sintaks

```vue
<element v-bind:attribute="value"></element>
```

Shorthand

```vue
<element :attribute="value"></element>
```

## Contoh

```vue
<script setup>
const image =
  "https://picsum.photos/300";
</script>

<template>
  <img :src="image">
</template>
```

---

# v-model

## Penjelasan

`v-model` digunakan untuk membuat **Two-Way Data Binding**, yaitu menghubungkan nilai input dengan data di Vue sehingga perubahan pada salah satu akan langsung memperbarui yang lainnya.

## Kegunaan

- Input text
- Textarea
- Checkbox
- Radio Button
- Select Option

## Contoh

```vue
<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>

<input v-model="name">

<p>{{ name }}</p>

</template>
```

---

# v-if

## Penjelasan

`v-if` digunakan untuk menampilkan elemen hanya jika kondisi bernilai `true`.

Jika kondisi `false`, elemen tidak akan dibuat ke dalam DOM.

## Kegunaan

- Login
- Dashboard
- Validasi
- Loading

## Contoh

```vue
<script setup>
const isLogin = true;
</script>

<template>

<h1 v-if="isLogin">
Dashboard
</h1>

</template>
```

---

# v-else-if

## Penjelasan

Digunakan sebagai percabangan lanjutan setelah `v-if`.

## Kegunaan

- Penilaian
- Status
- Kategori

## Contoh

```vue
<p v-if="score >= 90">

A

</p>

<p v-else-if="score >= 80">

B

</p>
```

---

# v-else

## Penjelasan

Digunakan sebagai kondisi terakhir jika seluruh kondisi sebelumnya bernilai `false`.

## Contoh

```vue
<p v-if="isLogin">

Dashboard

</p>

<p v-else>

Silakan Login

</p>
```

---

# v-show

## Penjelasan

`v-show` digunakan untuk menyembunyikan atau menampilkan elemen menggunakan CSS (`display: none`).

Berbeda dengan `v-if`, elemen tetap berada di DOM.

## Kegunaan

- Modal
- Sidebar
- Dropdown
- Tooltip

## Contoh

```vue
<p v-show="showText">

Hello Vue

</p>
```

---

# Perbedaan v-if dan v-show

| v-if | v-show |
|------|---------|
| Menghapus elemen dari DOM | Elemen tetap ada di DOM |
| Cocok untuk kondisi yang jarang berubah | Cocok untuk kondisi yang sering berubah |
| Lebih berat saat toggle | Lebih cepat saat toggle |

---

# v-for

## Penjelasan

`v-for` digunakan untuk membuat elemen HTML secara berulang berdasarkan data.

## Kegunaan

- Produk
- User
- Komentar
- Menu
- Tabel

## Contoh Array

```vue
<script setup>

const fruits = [
"Apple",
"Orange",
"Banana"
];

</script>

<template>

<li
v-for="fruit in fruits"
:key="fruit">

{{ fruit }}

</li>

</template>
```

## Contoh Array of Object

```vue
<script setup>

const users = [

{
id:1,
name:"Andi"
},

{
id:2,
name:"Budi"
}

];

</script>

<template>

<div
v-for="user in users"
:key="user.id">

{{ user.name }}

</div>

</template>
```

---

# v-on (`@`)

## Penjelasan

`v-on` digunakan untuk menangani event dari pengguna.

## Kegunaan

- Click
- Submit
- Keyboard
- Mouse
- Hover

## Sintaks

```vue
<button
v-on:click="save">
```

Shorthand

```vue
<button
@click="save">
```

## Contoh

```vue
<script setup>

function save(){

alert("Data berhasil disimpan");

}

</script>

<template>

<button
@click="save">

Save

</button>

</template>
```

---

# Event Modifier

Modifier membantu mempermudah penanganan event.

| Modifier | Fungsi |
|-----------|--------|
| `.prevent` | Mencegah aksi bawaan browser |
| `.stop` | Menghentikan propagasi event |
| `.once` | Event hanya berjalan sekali |
| `.self` | Hanya dijalankan pada elemen itu sendiri |
| `.capture` | Menggunakan event capturing |
| `.passive` | Optimasi event scroll |

Contoh

```vue
<form
@submit.prevent="save">
```

---

# Keyboard Modifier

```vue
@keyup.enter

@keyup.tab

@keyup.esc

@keyup.space

@keyup.delete
```

Contoh

```vue
<input
@keyup.enter="search">
```

---

# Mouse Modifier

```vue
@click.left

@click.right

@click.middle
```

---

# v-html

## Penjelasan

Digunakan untuk merender string HTML menjadi elemen HTML.

## Contoh

```vue
<script setup>

const html =
"<h2>Hello Vue</h2>";

</script>

<template>

<div
v-html="html">
</div>

</template>
```

> ⚠ Jangan gunakan `v-html` untuk data dari pengguna tanpa proses sanitasi karena dapat menyebabkan serangan XSS.

---

# v-text

## Penjelasan

Menampilkan isi teks suatu variabel.

Fungsinya mirip dengan `{{ }}`.

## Contoh

```vue
<p
v-text="message">
</p>
```

---

# v-once

## Penjelasan

Merender elemen hanya sekali.

Jika data berubah, tampilan tidak akan diperbarui.

## Contoh

```vue
<h1
v-once>

{{ title }}

</h1>
```

---

# v-pre

## Penjelasan

Menginstruksikan Vue untuk melewati proses kompilasi pada elemen tersebut.

## Contoh

```vue
<p
v-pre>

{{ message }}

</p>
```

Output

```text
{{ message }}
```

---

# v-cloak

## Penjelasan

Digunakan untuk menyembunyikan template Vue sebelum proses mounting selesai sehingga tidak terjadi efek "kedipan" pada halaman.

## CSS

```css
[v-cloak]{

display:none;

}
```

## Contoh

```vue
<div
v-cloak>

{{ message }}

</div>
```

---

# v-memo

## Penjelasan

`v-memo` digunakan untuk mengoptimalkan proses rendering dengan menyimpan hasil render selama dependensi tidak berubah.

Tersedia mulai Vue 3.2.

## Contoh

```vue
<div
v-memo="[user.id]">

{{ user.name }}

</div>
```

---

# Best Practice

- Gunakan `:key` yang unik saat menggunakan `v-for`.
- Gunakan `v-show` jika elemen sering ditampilkan/disembunyikan.
- Gunakan `v-if` jika kondisi jarang berubah.
- Gunakan shorthand (`:` dan `@`) agar kode lebih ringkas.
- Hindari penggunaan `v-html` pada data dari pengguna.
- Gunakan `v-model` untuk semua elemen form agar lebih mudah dikelola.

---

# Ringkasan

| Direktif | Fungsi |
|----------|--------|
| `v-bind` (`:`) | Binding atribut HTML |
| `v-model` | Two-way Data Binding |
| `v-if` | Conditional Rendering |
| `v-else-if` | Percabangan |
| `v-else` | Kondisi default |
| `v-show` | Menampilkan/Menyembunyikan elemen |
| `v-for` | Perulangan data |
| `v-on` (`@`) | Event Handling |
| `v-html` | Render HTML |
| `v-text` | Render Text |
| `v-once` | Render sekali |
| `v-pre` | Skip compilation |
| `v-cloak` | Mencegah template berkedip |
| `v-memo` | Optimasi rendering |

---

# Kesimpulan

Direktif Vue.js merupakan fitur inti yang memungkinkan halaman web menjadi dinamis dan interaktif. Dalam pengembangan aplikasi sehari-hari, direktif yang paling sering digunakan adalah **`v-bind`**, **`v-model`**, **`v-if`**, **`v-show`**, **`v-for`**, dan **`v-on`**. Menguasai keenam direktif tersebut sudah cukup untuk membangun sebagian besar antarmuka aplikasi menggunakan Vue.js.