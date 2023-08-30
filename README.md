# Tes Teknis 1 Frontend Developer Keda Tech

Selamat datang di submission saya untuk technical test 2 untuk posisi Frontend Developer di KedaTech. Repositori ini digunakan untuk mengerjakan uji unit menggunakan Jest. Tes ini akan fokus pada pengujian fungsi-fungsi yang melibatkan pengurutan array, menemukan jumlah maksimum subarray, dan menjumlahkan bilangan genap dalam nested objek.

## Instruksi Test

1. **Pengurutan Array Angka:**
   - Buatlah sebuah fungsi yang menerima input berupa array angka dan mengurutkan angka-angka dari yang terbesar ke yang terkecil secara manual tanpa menggunakan fungsi pengurutan bawaan JavaScript.
   - **Input:** `[1, 2, 4, 3, 5, 3, 2, 1]`
   - **Hasil yang Diharapkan:** `[5, 4, 3, 3, 2, 2, 1, 1]`

2. **Jumlah Maksimum Subarray:**
   - Buatlah sebuah fungsi yang menerima input berupa array angka dan sebuah angka `n`, dan temukan jumlah maksimum dari `n` angka berurutan dalam array.
   - **Input:** `([100, 200, 300, 400], 2)`
   - **Hasil yang Diharapkan:** `700` (dihitung dari `300 + 400`)
   - **Input:** `([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)`
   - **Hasil yang Diharapkan:** `39` (dihitung dari `4 + 2 + 10 + 23`)
   - **Input:** `([-3, 4, 0, -2, 6, -1], 2)`
   - **Hasil yang Diharapkan:** `5` (dihitung dari `6 + -1`)

3. **Jumlah Bilangan Genap dalam nested Objek:**
   - Buatlah sebuah fungsi yang menerima input berupa objek bersarang dan menghitung jumlah semua bilangan genap dalam objek tersebut.
   - **Input:**
     ```javascript
     {
       outer: 2,
       obj: {
         inner: 2,
         otherObj: {
           superInner: 2,
           notANumber: true,
           alsoNotANumber: "yup"
         }
       }
     }
     ```
   - **Hasil yang Diharapkan:** `6`
   - **Input:**
     ```javascript
     {
       a: 2,
       b: {b: 2, bb: {b: 3, bb: {b: 2}}},
       c: {c: {c: 2}, cc: 'ball', ccc: 5},
       d: 1,
       e: {e: {e: 4}, ee: 'car'}
     }
     ```
   - **Hasil yang Diharapkan:** `12`

## Memulai

1. Clone repositori:
   ```bash
   git clone https://github.com/reshaditiya/kedatech-test1.git
   ```

2. Pindah ke direktori repositori:
   ```bash
   cd kedatech-test1
   ```

3. Install dependensi:
   ```bash
   npm install
   ```

4. Jalankan uji dengan menggunakan Jest:
   ```bash
   npm run test
   ```
