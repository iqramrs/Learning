# Vue.js - Transition Lifecycle Hooks

---

# Apa itu Transition?

## Penjelasan

`<Transition>` adalah built-in component pada Vue.js yang digunakan untuk memberikan **animasi ketika sebuah elemen ditambahkan atau dihapus dari DOM**.

Contohnya ketika menggunakan:

```vue
v-if
```

Vue dapat memberikan animasi ketika elemen:

```text
Tidak ada
   ↓
Muncul
```

atau:

```text
Ada
 ↓
Hilang
```

---

# Contoh Dasar

```vue
<script setup>
import { ref } from "vue";

const show = ref(true);
</script>

<template>
    <button @click="show = !show">Toggle</button>

    <Transition>
        <p v-if="show">Hello Vue!</p>
    </Transition>
</template>
```

---

# Transition Lifecycle

Vue menyediakan beberapa hook yang dapat digunakan untuk menjalankan JavaScript pada setiap tahap transition.

Lifecycle transition terdiri dari:

```text
Enter
│
├── @before-enter
├── @enter
└── @after-enter

Leave
│
├── @before-leave
├── @leave
└── @after-leave

Cancel
│
├── @enter-cancelled
└── @leave-cancelled
```

---

# before-enter

## Penjelasan

`before-enter` dipanggil **sebelum elemen mulai melakukan enter transition**.

Pada tahap ini elemen sudah dibuat, tetapi transition belum dimulai.

## Kegunaan

- Mengatur kondisi awal animasi.
- Mengatur style awal.
- Persiapan animasi menggunakan JavaScript.

## Contoh

```vue
<Transition @before-enter="beforeEnter">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function beforeEnter(el) {
    console.log("Before enter");
}
```

---

# enter

## Penjelasan

`enter` dipanggil ketika elemen **mulai masuk ke halaman**.

Hook ini dapat digunakan untuk membuat animasi menggunakan JavaScript.

## Kegunaan

- Custom animation.
- Menggunakan animation library.
- Mengontrol animasi secara manual.

## Contoh

```vue
<Transition @enter="enter">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function enter(el, done) {
    console.log("Enter");

    setTimeout(() => {
        done();
    }, 500);
}
```

`done()` digunakan untuk memberi tahu Vue bahwa animasi telah selesai.

---

# after-enter

## Penjelasan

`after-enter` dipanggil **setelah enter transition selesai**.

## Kegunaan

- Menjalankan kode setelah animasi selesai.
- Logging.
- Menjalankan aksi berikutnya.

## Contoh

```vue
<Transition @after-enter="afterEnter">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function afterEnter(el) {
    console.log("Enter selesai");
}
```

---

# enter-cancelled

## Penjelasan

`enter-cancelled` dipanggil ketika proses enter transition dibatalkan.

Hal ini dapat terjadi ketika transition belum selesai tetapi state berubah kembali.

## Contoh

```vue
<Transition @enter-cancelled="enterCancelled">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function enterCancelled(el) {
    console.log("Enter dibatalkan");
}
```

---

# before-leave

## Penjelasan

`before-leave` dipanggil **sebelum elemen mulai keluar dari halaman**.

## Kegunaan

- Menentukan kondisi awal animasi keluar.
- Persiapan animasi.

## Contoh

```vue
<Transition @before-leave="beforeLeave">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function beforeLeave(el) {
    console.log("Before leave");
}
```

---

# leave

## Penjelasan

`leave` dipanggil ketika elemen **mulai melakukan transition keluar**.

## Kegunaan

- Custom exit animation.
- Menggunakan animation library.
- Mengontrol animasi keluar dengan JavaScript.

## Contoh

```vue
<Transition @leave="leave">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function leave(el, done) {
    console.log("Leave");

    setTimeout(() => {
        done();
    }, 500);
}
```

---

# after-leave

## Penjelasan

`after-leave` dipanggil setelah elemen selesai melakukan transition keluar.

## Kegunaan

- Menjalankan kode setelah elemen hilang.
- Cleanup.
- Menjalankan proses berikutnya.

## Contoh

```vue
<Transition @after-leave="afterLeave">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function afterLeave(el) {
    console.log("Leave selesai");
}
```

---

# leave-cancelled

## Penjelasan

`leave-cancelled` dipanggil ketika proses leave transition dibatalkan.

## Contoh

```vue
<Transition @leave-cancelled="leaveCancelled">

  <p v-if="show">
    Hello
  </p>

</Transition>
```

```javascript
function leaveCancelled(el) {
    console.log("Leave dibatalkan");
}
```

---

# Transition Lifecycle Flow

## Enter

Ketika elemen muncul:

```text
show = true
     ↓
before-enter
     ↓
enter
     ↓
after-enter
```

---

## Leave

Ketika elemen menghilang:

```text
show = false
     ↓
before-leave
     ↓
leave
     ↓
after-leave
```

---

# Transition dengan CSS

Tidak semua transition harus menggunakan JavaScript hook.

Vue dapat menggunakan CSS transition secara otomatis.

## Contoh

```vue
<Transition name="fade">

  <p v-if="show">
    Hello Vue!
  </p>

</Transition>
```

CSS:

```css
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
```

---

# Transition Class

Vue menyediakan beberapa class khusus untuk CSS transition.

## Enter

```text
v-enter-from
v-enter-active
v-enter-to
```

## Leave

```text
v-leave-from
v-leave-active
v-leave-to
```

Jika menggunakan:

```vue
<Transition name="fade">
```

maka class menjadi:

```text
fade-enter-from
fade-enter-active
fade-enter-to

fade-leave-from
fade-leave-active
fade-leave-to
```

---

# Transition Lifecycle vs Component Lifecycle

Jangan tertukar antara keduanya.

## Component Lifecycle

Berhubungan dengan kehidupan sebuah component.

Contoh:

```javascript
onMounted();
onUpdated();
onUnmounted();
```

Flow:

```text
Component dibuat
      ↓
onMounted()
      ↓
onUpdated()
      ↓
onUnmounted()
```

---

## Transition Lifecycle

Berhubungan dengan **animasi masuk dan keluar elemen**.

```text
ENTER

before-enter
     ↓
enter
     ↓
after-enter


LEAVE

before-leave
     ↓
leave
     ↓
after-leave
```

---

# Ringkasan Transition Hooks

| Hook              | Kapan dijalankan      |
| ----------------- | --------------------- |
| `before-enter`    | Sebelum elemen masuk  |
| `enter`           | Saat elemen masuk     |
| `after-enter`     | Setelah elemen masuk  |
| `enter-cancelled` | Saat enter dibatalkan |
| `before-leave`    | Sebelum elemen keluar |
| `leave`           | Saat elemen keluar    |
| `after-leave`     | Setelah elemen keluar |
| `leave-cancelled` | Saat leave dibatalkan |

---

# Contoh Lengkap

```vue
<script setup>
import { ref } from "vue";

const show = ref(false);

function beforeEnter(el) {
    console.log("Before Enter");
}

function enter(el, done) {
    console.log("Enter");

    setTimeout(() => {
        done();
    }, 500);
}

function afterEnter(el) {
    console.log("After Enter");
}

function beforeLeave(el) {
    console.log("Before Leave");
}

function leave(el, done) {
    console.log("Leave");

    setTimeout(() => {
        done();
    }, 500);
}

function afterLeave(el) {
    console.log("After Leave");
}
</script>

<template>
    <button @click="show = !show">Toggle</button>

    <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
    >
        <div v-if="show">Hello Vue!</div>
    </Transition>
</template>
```

---

# Kesimpulan

Transition Lifecycle Hooks digunakan untuk menjalankan JavaScript pada tahapan tertentu dari animasi sebuah elemen.

Lifecycle utama:

```text
ENTER

before-enter
      ↓
enter
      ↓
after-enter


LEAVE

before-leave
      ↓
leave
      ↓
after-leave
```

Untuk animasi sederhana, **CSS Transition** biasanya sudah cukup.

Gunakan **JavaScript Transition Hooks** ketika membutuhkan kontrol animasi yang lebih kompleks atau ingin menggunakan animation library.
