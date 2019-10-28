function tentukanDeretGeometri(arr) {
  let i = 1,
    indeks = 0,
    temp = 0,
    beda = 0,
    arr2 = [];
  while (indeks < arr.length) {
    while (i < arr.length) {
      temp = arr[i] / arr[i - 1];
      arr2.push(temp);
      i++;
    }
    indeks++;
  }
  for (let i = 0; i < arr2.length; i++) {
    beda += arr2[i];
  }
  return beda / arr2.length === arr2[0] ? true : false;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false