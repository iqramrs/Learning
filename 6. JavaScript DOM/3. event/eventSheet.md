# JavaScript DOM Events

Event adalah aksi atau kejadian yang terjadi pada halaman web. Event dapat dipicu oleh pengguna (user) maupun oleh browser. JavaScript dapat "mendengarkan" (listen) event tersebut dan menjalankan kode tertentu ketika event terjadi.

Contoh:

```javascript
button.addEventListener("click", function () {
    alert("Tombol diklik!");
});
```

---

# click

## Penjelasan
Event `click` terjadi ketika pengguna mengklik sebuah elemen menggunakan tombol kiri mouse.

## Kegunaan
- Menjalankan tombol.
- Membuka modal.
- Menghapus data.
- Mengirim request.

## Contoh Penggunaan

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button diklik");
});
```

---

# drag

## Penjelasan
Event `drag` terjadi ketika sebuah elemen yang dapat di-drag sedang dipindahkan.

## Kegunaan
- Drag & Drop.
- Menggeser card.
- Mengurutkan list.

## Contoh Penggunaan

```javascript
const item = document.querySelector(".item");

item.addEventListener("drag", () => {
    console.log("Sedang di-drag");
});
```

---

# drop

## Penjelasan
Event `drop` terjadi ketika elemen yang sedang di-drag dijatuhkan pada area tujuan.

## Kegunaan
- Upload file.
- Memindahkan item.
- Drag & Drop Board.

## Contoh Penggunaan

```javascript
const target = document.querySelector(".target");

target.addEventListener("drop", () => {
    console.log("Item dijatuhkan");
});
```

---

# hover

## Penjelasan
Hover bukan nama event resmi di JavaScript. Biasanya menggunakan kombinasi event `mouseenter` dan `mouseleave` untuk mendeteksi ketika mouse berada di atas sebuah elemen.

## Kegunaan
- Tooltip.
- Efek animasi.
- Highlight menu.

## Contoh Penggunaan

```javascript
const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
    console.log("Mouse masuk");
});

card.addEventListener("mouseleave", () => {
    console.log("Mouse keluar");
});
```

---

# scroll

## Penjelasan
Event `scroll` terjadi ketika halaman atau elemen digeser.

## Kegunaan
- Sticky navbar.
- Infinite scroll.
- Progress scroll.

## Contoh Penggunaan

```javascript
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});
```

---

# form submission (submit)

## Penjelasan
Event `submit` terjadi ketika form dikirim.

Biasanya digunakan untuk melakukan validasi sebelum data dikirim ke server.

## Kegunaan
- Validasi form.
- Mengirim data.
- Mencegah reload halaman.

## Contoh Penggunaan

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form dikirim");
});
```

---

# key press

## Penjelasan
Event keyboard digunakan ketika pengguna menekan tombol keyboard.

Event yang paling sering digunakan:
- `keydown`
- `keyup`

> `keypress` sudah tidak direkomendasikan (deprecated).

## Kegunaan
- Shortcut keyboard.
- Validasi input.
- Game.

## Contoh Penggunaan

```javascript
document.addEventListener("keydown", (event) => {
    console.log(event.key);
});
```

---

# focus / blur

## Penjelasan
- `focus` terjadi ketika sebuah input mulai aktif.
- `blur` terjadi ketika input kehilangan fokus.

## Kegunaan
- Validasi form.
- Menampilkan pesan error.
- Memberikan efek pada input.

## Contoh Penggunaan

```javascript
const input = document.querySelector("input");

input.addEventListener("focus", () => {
    console.log("Input aktif");
});

input.addEventListener("blur", () => {
    console.log("Input tidak aktif");
});
```

---

# mouse wheel

## Penjelasan
Event `wheel` terjadi ketika roda mouse diputar.

## Kegunaan
- Zoom.
- Scroll khusus.
- Mengubah ukuran.

## Contoh Penggunaan

```javascript
window.addEventListener("wheel", (event) => {
    console.log(event.deltaY);
});
```

---

# double click

## Penjelasan
Event `dblclick` terjadi ketika pengguna melakukan klik dua kali pada sebuah elemen.

## Kegunaan
- Edit data.
- Membuka file.
- Memperbesar gambar.

## Contoh Penggunaan

```javascript
const image = document.querySelector("img");

image.addEventListener("dblclick", () => {
    console.log("Double Click");
});
```

---

# copy

## Penjelasan
Event `copy` terjadi ketika pengguna menyalin (Ctrl + C) suatu teks.

## Kegunaan
- Mencatat aktivitas.
- Mencegah copy.
- Memberikan watermark.

## Contoh Penggunaan

```javascript
document.addEventListener("copy", () => {
    console.log("Teks disalin");
});
```

---

# paste

## Penjelasan
Event `paste` terjadi ketika pengguna melakukan paste (Ctrl + V).

## Kegunaan
- Validasi data.
- Membersihkan format teks.
- Membatasi input.

## Contoh Penggunaan

```javascript
const input = document.querySelector("input");

input.addEventListener("paste", () => {
    console.log("Paste dilakukan");
});
```

---

# audio

## Penjelasan
Elemen `<audio>` memiliki banyak event, seperti:
- `play`
- `pause`
- `ended`
- `timeupdate`

## Kegunaan
- Membuat music player.
- Menampilkan progress lagu.
- Menampilkan status audio.

## Contoh Penggunaan

```javascript
const audio = document.querySelector("audio");

audio.addEventListener("play", () => {
    console.log("Audio diputar");
});
```

---

# screen resize

## Penjelasan
Event `resize` terjadi ketika ukuran jendela browser berubah.

## Kegunaan
- Responsive layout.
- Menyesuaikan ukuran elemen.
- Mengubah tampilan.

## Contoh Penggunaan

```javascript
window.addEventListener("resize", () => {
    console.log(window.innerWidth);
});
```

---

# print

## Penjelasan
Browser menyediakan event `beforeprint` dan `afterprint` untuk mendeteksi proses pencetakan halaman.

## Kegunaan
- Mengubah tampilan sebelum dicetak.
- Mengembalikan tampilan setelah selesai mencetak.

## Contoh Penggunaan

```javascript
window.addEventListener("beforeprint", () => {
    console.log("Siap mencetak");
});

window.addEventListener("afterprint", () => {
    console.log("Selesai mencetak");
});
```

---

# Ringkasan

| Event | Fungsi |
|--------|--------|
| click | Ketika elemen diklik |
| drag | Saat elemen sedang di-drag |
| drop | Saat elemen dijatuhkan |
| mouseenter / mouseleave | Saat mouse masuk atau keluar dari elemen (hover) |
| scroll | Saat halaman atau elemen digeser |
| submit | Saat form dikirim |
| keydown / keyup | Saat tombol keyboard ditekan atau dilepas |
| focus | Saat elemen mendapatkan fokus |
| blur | Saat elemen kehilangan fokus |
| wheel | Saat roda mouse diputar |
| dblclick | Saat elemen diklik dua kali |
| copy | Saat pengguna menyalin teks |
| paste | Saat pengguna menempelkan teks |
| play / pause / ended | Event pada elemen audio |
| resize | Saat ukuran jendela browser berubah |
| beforeprint / afterprint | Sebelum dan sesudah proses mencetak |