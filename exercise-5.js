// cara gampangnya bisa di split ke array, reverse, join, cek sama ga dengan kata aslinya
// bisa juga bikin variable baru, masukin huruf per huruf dari index paling belakang, cek sama ga dengan kata aslinya

// cara manual, cek huruf per huruf dari tengah ke kiri dan tengah ke kanan sama atau engga
function palindrome(kata) {
  let kiri = 0;
  let kanan = 0;

  // ilangin spasi (optional untuk palindrome yg ga cuma 1 kata, contoh : ah m adam ha)
  kata = kata.split(' ').join('');

  // bagi index jadi 2, tengah ke kiri dan tengah ke kanan
  if (kata.length % 2 === 0) {
    kiri = (kata.length / 2) - 1;
    kanan = (kata.length / 2);
  } else {
    kiri = Math.floor(kata.length / 2) - 1;
    kanan = kiri + 2;
    // gamasalah meskipun num.length = 1, karena median -1 dan median + 1 sama-sama mereturn undefined
  }

  // cocokkin index kiri dan index kanan
  // validasi terakhir di index 0 dan index length - 1
  for (let i = kiri; i > 0; i--) {
    if (kata[i] === kata[kanan]) {
      kanan += 1;
      kiri -= 1;
    }
  }
  return kata[kiri] === kata[kanan] ? true : false;
}


// Pake split reverse join
// const palindrome = kata => {
//   // split join pertama buat ngilangin spasi, lalu split lg, reverse, kemudian join lg
//   let arrKata = kata.split(' ').join('').split('').reverse().join('');
//   return kata.split(' ').join('') === arrKata ? true : false;
// }


// Pake variable baru, masukkin huruf per huruf dari belakang
// const palindrome = kata => {
//   let temp = '';
//   // ini buat ngilangin spasi biar bisa ngecek palindrome yang dipisah spasi
//   let kataBaru = kata.split(' ').join('');
//   for (let i = kataBaru.length - 1; i >= 0; i--) {
//     temp += kataBaru[i];
//   }
//   return temp === kataBaru ? true : false;
// }


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('ah mad da m ha')); // true
console.log(palindrome('123 456 54321')); // true