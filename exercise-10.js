function perkalianUnik(arr) {
  let indeks = 0;
  let i = 0;
  let kali = 1;
  let arr2 = [];
  // untuk setiap index, kaliin dulu semua angkanya, kemudian bagi dgn angka di index yg aktif, lalu di push
  while (indeks < arr.length) {
    while (i < arr.length) {
      kali *= arr[i];
      i++;
    }
    arr2.push(kali / arr[indeks]);
    indeks++;
  }
  return arr2;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]