# WDT RestfullAPI

> Halo, ini adalah repository test Assesment WDT bagian RestfullAPI. Disini saya menggunakan database PostgreSQL dengan ExpressJS dan di deploy ke HEROKU. Disini saya mengambil tema BLOG.

## Running Apps

Untuk menjalankan aplikasi. kita bisa mengakses di link heroku https://guarded-meadow-69994.herokuapp.com/ atau jalankan di lcoal dengan cara:

```bash
$ nodemon bin/www
```

## Tersedia API

Disini saya juga menyiapkan APInya.

1. https://guarded-meadow-69994.herokuapp.com/users
Ini adalah daftar dari users blog. Kita bisa mengedit atau mengakses route lainnya yaitu:

```bash
- /users/:id dengan method GET untuk mencari users per ID
- /users/update/:id dengan method PATCH untuk mengupdate informasi users
- /users/delete/:id dengan method DELETE untuk menghapus user
- /users dengan method POST untuk menambah users
```

2. https://guarded-meadow-69994.herokuapp.com/blog
Ini adalah daftar dari postingan blog.

```bash
- /blog/:id dengan method GET untuk mencari post per ID
- /blog/update/:id dengan method PATCH untuk mengupdate informasi post
- /blog/delete/:id dengan method DELETE untuk menghapus post
- /blog dengan method POST untuk menambah post
```

3. https://guarded-meadow-69994.herokuapp.com/signin
Ini adalah route signin.

```bash
- /signin dengan method POST digunakan untuk login
```

4. https://guarded-meadow-69994.herokuapp.com/signup
Ini adalah route signup.

```bash
- /signup dengan method POST digunakan untuk daftar akun baru
```

5. https://guarded-meadow-69994.herokuapp.com/forgot
Ini adalah route forgot.

```bash
- /forgot dengan method POST digunakan untuk lupa password. Sehingga akan diberitahu passwordnya.
```

6. https://guarded-meadow-69994.herokuapp.com/reset
Ini adalah route forgot.

```bash
- /reset dengan method POST digunakan untuk reset password. Sehingga akan disediakan password baru secara random.
```

7. https://guarded-meadow-69994.herokuapp.com/
Halaman awal yang berisikan informasi routes

8. https://guarded-meadow-69994.herokuapp.com/cek/:hari
Halaman ini mencoba untuk mengecek hari ke berapa? misalnya kamu menulis sabtu, maka akan muncul "sabtu adalah hari ke 6"