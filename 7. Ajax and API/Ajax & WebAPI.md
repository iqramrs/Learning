# AJAX & Web API

---

# Apa itu AJAX?

## Penjelasan

AJAX (Asynchronous JavaScript And XML) adalah teknik yang memungkinkan JavaScript mengirim dan menerima data dari server **tanpa me-refresh halaman**.

Walaupun namanya mengandung XML, saat ini hampir semua aplikasi menggunakan **JSON** sebagai format pertukaran data.

## Kegunaan

- Login tanpa reload halaman
- Infinite Scroll
- Live Search
- Chat
- Dashboard Real-time
- Load data dari database

## Contoh

Sebelum AJAX

```
Klik tombol
↓
Reload halaman
↓
Data muncul
```

Dengan AJAX

```
Klik tombol
↓
Request ke server
↓
Data kembali
↓
Halaman tetap
```

---

# Apa itu Web API?

## Penjelasan

API (Application Programming Interface) adalah jembatan komunikasi antar aplikasi.

Browser mengirim Request ke API.

API memproses Request lalu mengirim Response.

## Contoh

```
Browser
      │
      │ GET /users
      ▼
REST API
      │
      │ JSON
      ▼
Browser
```

---

# Cara Kerja Client - Server

```
Client
   │
   │ Request
   ▼
Server
   │
   │ Processing
   ▼
Database
   │
   │ Data
   ▼
Server
   │
   │ Response
   ▼
Client
```

---

# HTTP Method

HTTP Method menjelaskan aksi yang ingin dilakukan terhadap suatu resource.

---

# GET

## Penjelasan

Mengambil data dari server.

## Kegunaan

- Menampilkan daftar user
- Menampilkan produk
- Menampilkan artikel

## Contoh

```
GET /users
```

Fetch

```javascript
fetch("/users")
```

---

# POST

## Penjelasan

Mengirim data baru ke server.

## Kegunaan

- Register
- Login
- Membuat produk
- Membuat artikel

## Contoh

```
POST /users
```

```javascript
fetch("/users", {
    method: "POST"
});
```

---

# PUT

## Penjelasan

Mengganti seluruh data yang sudah ada.

## Kegunaan

- Update profile
- Update produk

## Contoh

```
PUT /users/5
```

```javascript
fetch("/users/5", {
    method: "PUT"
});
```

---

# PATCH

## Penjelasan

Mengubah sebagian data.

## Kegunaan

Misalnya hanya mengganti email.

## Contoh

```
PATCH /users/5
```

```javascript
fetch("/users/5", {
    method: "PATCH"
});
```

---

# DELETE

## Penjelasan

Menghapus data.

## Kegunaan

- Menghapus user
- Menghapus produk

## Contoh

```
DELETE /users/5
```

```javascript
fetch("/users/5", {
    method: "DELETE"
});
```

---

# HTTP Request

Request adalah data yang dikirim browser ke server.

Request terdiri dari:

- URL
- Method
- Header
- Body

Contoh

```
POST /login

Headers
Content-Type: application/json

Body

{
    "email":"admin@gmail.com",
    "password":"123456"
}
```

---

# HTTP Response

Response adalah balasan dari server.

Berisi:

- Status Code
- Header
- Body

Contoh

```
200 OK

{
    "message":"Login berhasil"
}
```

---

# HTTP Status Code

Status Code menunjukkan hasil Request.

---

## 200 OK

Request berhasil.

Contoh

```
GET /users
```

Response

```
200 OK
```

---

## 201 Created

Data berhasil dibuat.

Contoh

```
POST /users
```

---

## 204 No Content

Request berhasil tetapi tidak ada data yang dikembalikan.

Biasanya digunakan setelah DELETE.

---

## 400 Bad Request

Request salah.

Misalnya format JSON tidak valid.

---

## 401 Unauthorized

Belum login atau token tidak valid.

---

## 403 Forbidden

Sudah login tetapi tidak memiliki izin.

---

## 404 Not Found

Endpoint tidak ditemukan.

---

## 500 Internal Server Error

Terjadi error pada server.

---

# Ringkasan Status Code

| Status | Arti |
|---------|------|
|200|Success|
|201|Created|
|204|No Content|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

# HTTP Header

Header berisi informasi tambahan mengenai Request maupun Response.

Contoh

```
Content-Type
Authorization
Accept
User-Agent
```

Contoh

```javascript
fetch("/users", {
    headers: {
        "Content-Type": "application/json"
    }
});
```

---

# Authorization Header

Digunakan ketika API memerlukan login.

Contoh

```javascript
fetch("/profile", {
    headers: {
        Authorization: "Bearer TOKEN"
    }
});
```

---

# JSON

JSON (JavaScript Object Notation) adalah format pertukaran data yang paling umum digunakan dalam API.

Contoh

```json
{
    "id":1,
    "name":"Iqram",
    "age":23
}
```

Mengubah Object menjadi JSON

```javascript
JSON.stringify(user);
```

Mengubah JSON menjadi Object

```javascript
JSON.parse(json);
```

---

# Fetch API

Fetch digunakan untuk mengirim HTTP Request.

Sintaks

```javascript
fetch(url, options);
```

Contoh GET

```javascript
fetch("/users")
    .then(response => response.json())
    .then(data => console.log(data));
```

---

# Async Await

Cara modern menggunakan Fetch.

```javascript
async function getUsers() {

    const response = await fetch("/users");

    const data = await response.json();

    console.log(data);

}
```

---

# Mengirim Data (POST)

```javascript
fetch("/users", {

    method: "POST",

    headers: {
        "Content-Type":"application/json"
    },

    body: JSON.stringify({
        name:"Iqram"
    })

});
```

---

# Error Handling

Selalu tangani kemungkinan error saat melakukan request.

```javascript
async function getUsers(){

    try{

        const response = await fetch("/users");

        if(!response.ok){
            throw new Error("Request gagal");
        }

        const data = await response.json();

        console.log(data);

    }catch(error){

        console.log(error.message);

    }

}
```

---

# CRUD dengan REST API

## Create

```
POST /users
```

---

## Read

```
GET /users
```

---

## Update

```
PUT /users/5
```

atau

```
PATCH /users/5
```

---

## Delete

```
DELETE /users/5
```

---

# Ringkasan HTTP Method

| Method | Fungsi |
|----------|---------|
| GET | Mengambil data |
| POST | Membuat data baru |
| PUT | Mengganti seluruh data |
| PATCH | Mengubah sebagian data |
| DELETE | Menghapus data |

---

# Ringkasan Alur Fetch API

```
JavaScript
      │
      ▼
fetch()
      │
      ▼
HTTP Request
      │
      ▼
Server
      │
      ▼
HTTP Response
      │
      ▼
JSON
      │
      ▼
JavaScript
      │
      ▼
Update DOM
```