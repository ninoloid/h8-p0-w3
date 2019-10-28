function palindrome(kata) {
  let kiri = 0;
  let kanan = 0;
  // you can only write your code here!

  // ilangin spasi (optional untuk palindrome yg ga cuma 1 kata, contoh : ah m adam ha)
  kata = kata.split(' ').join('');

  // bagi index jadi 2, tengah ke kiri dan tengah ke kanan
  if (kata.length % 2 === 0) {
    kiri = (kata.length / 2) - 1;
    kanan = (kata.length / 2);
  } else {
    kiri = Math.floor(kata.length / 2) - 1;
    kanan = kiri + 2;
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

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('ah mad da m ha')); // true
console.log(palindrome('123 456 54321')); // true