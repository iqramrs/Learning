# Vue.js Composition API

---

# Apa itu Composition API?

## Penjelasan

Composition API adalah cara modern untuk menulis komponen pada Vue.js (mulai diperkenalkan di Vue 3). Berbeda dengan Options API yang memisahkan kode berdasarkan jenisnya (`data`, `methods`, `computed`, dll.), Composition API mengelompokkan kode berdasarkan fitur atau logika yang saling berkaitan.

Hal ini membuat kode lebih mudah dibaca, dipelihara, dan digunakan kembali, terutama pada aplikasi yang besar.

## Kegunaan

- Mengorganisasi kode berdasarkan fitur.
- Mempermudah penggunaan ulang logika (reusable).
- Lebih mudah dipelihara.
- Sangat cocok untuk aplikasi berskala besar.

## Contoh

```vue
<script setup>
const message = "Hello Vue 3!";
</script>

<template>
  <h1>{{ message }}</h1>
</template>
```

---

# setup()

## Penjelasan

`setup()` adalah fungsi utama pada Composition API. Semua state, function, computed, dan lifecycle hook biasanya didefinisikan di dalam fungsi ini.

Pada Vue modern, kita lebih sering menggunakan `<script setup>` sehingga tidak perlu menulis `setup()` secara eksplisit.

## Kegunaan

- Tempat menulis seluruh logika komponen.
- Mengembalikan data ke template.
- Menggunakan Composition API.

## Contoh

```vue
<script>
export default {
  setup() {
    const message = "Hello";

    return {
      message
    };
  }
}
</script>
```

---

# script setup

## Penjelasan

`<script setup>` adalah sintaks yang lebih sederhana dibanding menggunakan `setup()`.

Semua variabel yang dibuat otomatis dapat digunakan di dalam template tanpa perlu `return`.

## Kegunaan

- Penulisan kode lebih singkat.
- Lebih mudah dibaca.
- Direkomendasikan untuk Vue 3.

## Contoh

```vue
<script setup>
const message = "Belajar Vue";
</script>

<template>
  {{ message }}
</template>
```

---

# ref()

## Penjelasan

`ref()` digunakan untuk membuat data yang bersifat **reactive**. Ketika nilainya berubah, tampilan akan otomatis diperbarui.

Untuk mengakses nilainya di JavaScript gunakan `.value`.

## Kegunaan

- Counter.
- Input.
- Data sederhana.

## Contoh

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

---

# reactive()

## Penjelasan

`reactive()` digunakan untuk membuat object menjadi reactive.

Berbeda dengan `ref()`, kita tidak menggunakan `.value`.

## Kegunaan

- Form.
- Object.
- Data yang memiliki banyak properti.

## Contoh

```javascript
import { reactive } from "vue";

const user = reactive({
  name: "Iqram",
  age: 23
});

user.age++;
```

---

# computed()

## Penjelasan

`computed()` digunakan untuk membuat nilai turunan berdasarkan data lain.

Nilainya akan otomatis diperbarui ketika data asal berubah.

## Kegunaan

- Harga total.
- Filter data.
- Format tampilan.

## Contoh

```javascript
import { ref, computed } from "vue";

const price = ref(100);

const tax = computed(() => {
  return price.value * 0.11;
});
```

---

# watch()

## Penjelasan

`watch()` digunakan untuk menjalankan kode ketika suatu data berubah.

## Kegunaan

- Validasi.
- Memanggil API.
- Menyimpan data.

## Contoh

```javascript
import { ref, watch } from "vue";

const search = ref("");

watch(search, (newValue) => {
  console.log(newValue);
});
```

---

# watchEffect()

## Penjelasan

`watchEffect()` otomatis menjalankan fungsi ketika data reactive yang digunakan berubah.

Tidak perlu menentukan data yang akan diawasi.

## Kegunaan

- Logging.
- Request otomatis.
- Sinkronisasi data.

## Contoh

```javascript
import { ref, watchEffect } from "vue";

const count = ref(0);

watchEffect(() => {
  console.log(count.value);
});
```

---

# onMounted()

## Penjelasan

`onMounted()` dijalankan ketika komponen selesai ditampilkan ke halaman.

Biasanya digunakan untuk mengambil data dari API.

## Kegunaan

- Fetch API.
- Mengambil data awal.
- Inisialisasi plugin.

## Contoh

```javascript
import { onMounted } from "vue";

onMounted(() => {
  console.log("Component mounted");
});
```

---

# onUnmounted()

## Penjelasan

`onUnmounted()` dipanggil ketika komponen dihapus dari halaman.

## Kegunaan

- Membersihkan timer.
- Menghapus event listener.
- Membersihkan resource.

## Contoh

```javascript
import { onUnmounted } from "vue";

onUnmounted(() => {
  console.log("Component dihapus");
});
```

---

# defineProps()

## Penjelasan

`defineProps()` digunakan untuk menerima data dari parent component.

## Kegunaan

- Menampilkan data.
- Membuat komponen reusable.

## Contoh

```vue
<script setup>
const props = defineProps({
  title: String
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

---

# defineEmits()

## Penjelasan

`defineEmits()` digunakan untuk mengirim event dari child component ke parent component.

## Kegunaan

- Tombol submit.
- Menghapus data.
- Komunikasi antar komponen.

## Contoh

```vue
<script setup>
const emit = defineEmits(["save"]);

function submit() {
  emit("save");
}
</script>
```

---

# Ringkasan

| Fitur | Fungsi |
|--------|--------|
| setup() | Tempat utama menulis logika |
| script setup | Versi sederhana dari setup() |
| ref() | Reactive untuk data sederhana |
| reactive() | Reactive untuk object |
| computed() | Nilai turunan |
| watch() | Mengawasi perubahan data |
| watchEffect() | Watch otomatis |
| onMounted() | Saat komponen ditampilkan |
| onUnmounted() | Saat komponen dihapus |
| defineProps() | Menerima data dari parent |
| defineEmits() | Mengirim event ke parent |