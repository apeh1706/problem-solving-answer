penjelasan untuk pertanyaan kedua

### Analisis Kompleksitas

#### Kompleksitas Waktu (Time Complexity):
- Algoritma ini memiliki kompleksitas waktu O(n), di mana `n` adalah panjang string input.
- Alasan utama adalah karena kita hanya melakukan satu kali iterasi melalui seluruh string. Untuk setiap karakter, kita melakukan operasi dasar seperti `push` dan `pop` ke dalam stack, yang masing-masing memiliki kompleksitas O(1).
- Oleh karena itu, total waktu yang dibutuhkan untuk memproses seluruh string adalah O(n).

#### Kompleksitas Ruang (Space Complexity):
- Algoritma ini menggunakan stack untuk menyimpan tanda kurung pembuka sampai kita menemukan pasangan tanda kurung penutup yang sesuai.
- Pada kasus terburuk, stack akan menyimpan semua tanda kurung pembuka, yang berjumlah hingga `n/2` elemen.
- Oleh karena itu, kompleksitas ruang adalah O(n), di mana `n` adalah panjang string, karena kita perlu ruang untuk menyimpan hingga setengah dari total karakter di stack.
