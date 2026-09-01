# Vue.js - Composition API Lifecycle Hooks

Lifecycle Hooks adalah function yang memungkinkan kita menjalankan kode pada tahap tertentu dalam siklus hidup sebuah Vue Component.

Secara sederhana, sebuah component memiliki beberapa tahap:

```text
Component dibuat
      ↓
Before Mount
      ↓
Mounted
      ↓
Data berubah
      ↓
Before Update
      ↓
Updated
      ↓
Component akan dihapus
      ↓
Before Unmount
      ↓
Unmounted
```

---

# Lifecycle Hooks yang Sering Digunakan

| Hook                | Kapan Dipanggil           |
| ------------------- | ------------------------- |
| `onBeforeMount()`   | Sebelum component dimount |
| `onMounted()`       | Setelah component dimount |
| `onBeforeUpdate()`  | Sebelum DOM diperbarui    |
| `onUpdated()`       | Setelah DOM diperbarui    |
| `onBeforeUnmount()` | Sebelum component dihapus |
| `onUnmounted()`     | Setelah component dihapus |

---

# onBeforeMount()

## Penjelasan

`onBeforeMount()` dipanggil tepat sebelum component pertama kali dirender ke DOM.

Pada tahap ini component sudah selesai melakukan setup, tetapi elemen HTML belum tersedia di DOM.

## Kegunaan

- Persiapan data.
- Menjalankan logic sebelum component ditampilkan.
- Melakukan setup awal.

## Contoh

```vue
<script setup>
import { onBeforeMount } from "vue";

onBeforeMount(() => {
    console.log("Component akan dimount");
});
</script>
```

## Flow

```text
setup()
   ↓
onBeforeMount()
   ↓
Component ditampilkan
```

---

# onMounted()

## Penjelasan

`onMounted()` dipanggil setelah component berhasil dimasukkan ke DOM.

Ini adalah salah satu lifecycle hook yang paling sering digunakan.

## Kegunaan

- Fetch data dari API.
- Mengakses DOM.
- Menginisialisasi library.
- Menjalankan kode setelah component tampil.

## Contoh

```vue
<script setup>
import { onMounted } from "vue";

onMounted(() => {
    console.log("Component sudah dimount");
});
</script>
```

## Contoh Fetch API

```vue
<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);

onMounted(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    users.value = await response.json();
});
</script>
```

---

# onBeforeUpdate()

## Penjelasan

`onBeforeUpdate()` dipanggil sebelum Vue memperbarui DOM akibat perubahan reactive state.

Pada tahap ini data sudah berubah, tetapi tampilan DOM belum diperbarui.

## Kegunaan

- Menjalankan kode sebelum DOM berubah.
- Mengecek state sebelum update.
- Melakukan persiapan tertentu.

## Contoh

```vue
<script setup>
import { ref, onBeforeUpdate } from "vue";

const count = ref(0);

onBeforeUpdate(() => {
    console.log("DOM akan diperbarui");
});
</script>
```

---

# onUpdated()

## Penjelasan

`onUpdated()` dipanggil setelah Vue selesai memperbarui DOM.

## Kegunaan

- Menjalankan kode setelah tampilan berubah.
- Mengecek DOM terbaru.

## Contoh

```vue
<script setup>
import { ref, onUpdated } from "vue";

const count = ref(0);

onUpdated(() => {
    console.log("DOM sudah diperbarui");
});
</script>
```

> Hindari mengubah reactive state secara langsung di dalam `onUpdated()` karena dapat menyebabkan infinite update loop.

---

# onBeforeUnmount()

## Penjelasan

`onBeforeUnmount()` dipanggil sebelum component dihapus dari DOM.

Pada tahap ini component masih aktif dan masih dapat digunakan.

## Kegunaan

- Persiapan cleanup.
- Menyimpan data terakhir.
- Menghentikan proses tertentu sebelum component dihapus.

## Contoh

```vue
<script setup>
import { onBeforeUnmount } from "vue";

onBeforeUnmount(() => {
    console.log("Component akan dihapus");
});
</script>
```

---

# onUnmounted()

## Penjelasan

`onUnmounted()` dipanggil setelah component benar-benar dihapus dari DOM.

Biasanya digunakan untuk membersihkan resource.

## Kegunaan

- Menghapus event listener.
- Menghentikan timer.
- Menutup WebSocket.
- Membersihkan subscription.

## Contoh

```vue
<script setup>
import { onMounted, onUnmounted } from "vue";

let timer;

onMounted(() => {
    timer = setInterval(() => {
        console.log("Running...");
    }, 1000);
});

onUnmounted(() => {
    clearInterval(timer);

    console.log("Timer dihentikan");
});
</script>
```

---

# Lifecycle Update Flow

Ketika reactive data berubah:

```text
Data berubah
     ↓
onBeforeUpdate()
     ↓
Vue memperbarui DOM
     ↓
onUpdated()
```

Contoh:

```vue
<script setup>
import { ref, onBeforeUpdate, onUpdated } from "vue";

const count = ref(0);

onBeforeUpdate(() => {
    console.log("Before Update");
});

onUpdated(() => {
    console.log("After Update");
});
</script>

<template>
    <button @click="count++">
        {{ count }}
    </button>
</template>
```

---

# Lifecycle Unmount Flow

Ketika component akan dihapus:

```text
Component masih aktif
        ↓
onBeforeUnmount()
        ↓
Component dihapus dari DOM
        ↓
onUnmounted()
```

---

# onErrorCaptured()

## Penjelasan

`onErrorCaptured()` digunakan untuk menangkap error yang terjadi pada component turunan.

Hook ini mirip dengan konsep **Error Boundary**.

## Kegunaan

- Error handling.
- Logging error.
- Menampilkan fallback UI.
- Mengirim error ke monitoring service.

## Contoh

```vue
<script setup>
import { onErrorCaptured } from "vue";

onErrorCaptured((error, instance, info) => {
    console.error(error);

    console.log(instance);

    console.log(info);
});
</script>
```

Parameter:

```text
error
   ↓
Error yang terjadi

instance
   ↓
Component yang menyebabkan error

info
   ↓
Informasi mengenai error
```

---

# onRenderTracked()

## Penjelasan

`onRenderTracked()` digunakan untuk debugging dependency yang sedang dilacak oleh Vue saat proses rendering.

Hook ini lebih berguna untuk debugging daripada penggunaan aplikasi sehari-hari.

## Contoh

```vue
<script setup>
import { onRenderTracked } from "vue";

onRenderTracked((event) => {
    console.log(event);
});
</script>
```

---

# onRenderTriggered()

## Penjelasan

`onRenderTriggered()` digunakan untuk mengetahui reactive dependency mana yang menyebabkan component melakukan render ulang.

## Kegunaan

- Debugging.
- Mencari penyebab unnecessary re-render.
- Optimasi performa.

## Contoh

```vue
<script setup>
import { onRenderTriggered } from "vue";

onRenderTriggered((event) => {
    console.log(event);
});
</script>
```

---

# onActivated()

## Penjelasan

`onActivated()` digunakan ketika component yang berada di dalam `<KeepAlive>` kembali diaktifkan.

Component tidak dibuat ulang, tetapi diaktifkan kembali.

## Contoh

```vue
<KeepAlive>
  <Component :is="currentComponent" />
</KeepAlive>
```

Component:

```vue
<script setup>
import { onActivated } from "vue";

onActivated(() => {
    console.log("Component aktif kembali");
});
</script>
```

---

# onDeactivated()

## Penjelasan

`onDeactivated()` dipanggil ketika component di dalam `<KeepAlive>` dinonaktifkan.

Component tidak dihapus, tetapi disimpan di memory untuk digunakan kembali.

## Contoh

```vue
<script setup>
import { onDeactivated } from "vue";

onDeactivated(() => {
    console.log("Component dinonaktifkan");
});
</script>
```

## KeepAlive Flow

```text
Component A aktif
       ↓
Pindah ke Component B
       ↓
Component A
onDeactivated()
       ↓
Component A disimpan
       ↓
Kembali ke Component A
       ↓
onActivated()
```

---

# onServerPrefetch()

## Penjelasan

`onServerPrefetch()` digunakan dalam Server-Side Rendering (SSR).

Hook ini memungkinkan data diambil sebelum component dirender di server.

## Kegunaan

- Server-Side Rendering.
- Mengambil data sebelum HTML dikirim ke client.
- Mengurangi loading data setelah halaman tampil.

## Contoh

```vue
<script setup>
import { ref, onServerPrefetch } from "vue";

const users = ref([]);

onServerPrefetch(async () => {
    const response = await fetch("/api/users");

    users.value = await response.json();
});
</script>
```

> Hook ini biasanya tidak digunakan pada aplikasi Vue biasa yang menggunakan SPA, tetapi lebih relevan untuk SSR seperti Nuxt atau Vue SSR.

---

# Complete Lifecycle Flow

```text
COMPONENT CREATED
        │
        ▼
onBeforeMount()
        │
        ▼
Component Render
        │
        ▼
onMounted()
        │
        │
        │ Reactive Data Changed
        │
        ▼
onBeforeUpdate()
        │
        ▼
DOM Updated
        │
        ▼
onUpdated()
        │
        │
        │ Component Removed
        │
        ▼
onBeforeUnmount()
        │
        ▼
Component Removed
        │
        ▼
onUnmounted()
```

---

# Lifecycle Hooks dengan KeepAlive

```text
Component Created
       ↓
onMounted()
       ↓
Component Active
       ↓
onDeactivated()
       ↓
Component Cached
       ↓
onActivated()
       ↓
Component Active Again
```

---

# Ringkasan

| Hook                  | Fungsi                                 |
| --------------------- | -------------------------------------- |
| `onBeforeMount()`     | Sebelum component ditampilkan          |
| `onMounted()`         | Setelah component ditampilkan          |
| `onBeforeUpdate()`    | Sebelum DOM diperbarui                 |
| `onUpdated()`         | Setelah DOM diperbarui                 |
| `onBeforeUnmount()`   | Sebelum component dihapus              |
| `onUnmounted()`       | Setelah component dihapus              |
| `onErrorCaptured()`   | Menangkap error dari component turunan |
| `onRenderTracked()`   | Debug dependency saat render           |
| `onRenderTriggered()` | Debug penyebab re-render               |
| `onActivated()`       | Component `<KeepAlive>` diaktifkan     |
| `onDeactivated()`     | Component `<KeepAlive>` dinonaktifkan  |
| `onServerPrefetch()`  | Fetch data sebelum SSR                 |

---

# Lifecycle Hooks yang Paling Penting

Untuk penggunaan Vue.js sehari-hari, terutama saat belajar atau membuat aplikasi SPA, fokus utama pada:

```javascript
onMounted();

onBeforeUpdate();
onUpdated();

onBeforeUnmount();
onUnmounted();
```

Contoh penggunaan di aplikasi nyata:

```text
onMounted()
    ↓
Fetch data dari API

onUpdated()
    ↓
Menangani perubahan DOM

onBeforeUnmount()
    ↓
Persiapan cleanup

onUnmounted()
    ↓
Clear timer
Remove event listener
Close connection
```

---

# Kesimpulan

Lifecycle Hooks memungkinkan kita menjalankan kode pada waktu tertentu selama component hidup.

Flow utama yang perlu dipahami:

```text
CREATE
  ↓
MOUNT
  ↓
UPDATE
  ↓
UNMOUNT
```

Dengan Composition API, lifecycle hooks yang digunakan antara lain:

```text
onBeforeMount()
onMounted()

onBeforeUpdate()
onUpdated()

onBeforeUnmount()
onUnmounted()
```

Hook lainnya seperti `onErrorCaptured()`, `onActivated()`, `onDeactivated()`, dan `onServerPrefetch()` digunakan untuk kebutuhan yang lebih spesifik seperti error handling, `<KeepAlive>`, debugging, dan Server-Side Rendering.
