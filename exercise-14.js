function mengelompokkanAngka(arr) {
  let arrHasil = [];
  arrHasil.push(genap(arr), ganjil(arr), kelipatanTiga(arr));
  return arrHasil;
}

const genap = arr => {
  let arrGenap = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
      arrGenap.push(arr[i]);
    }
  }
  return arrGenap;
};

const ganjil = arr => {
  let arrGanjil = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
      arrGanjil.push(arr[i]);
    }
  }
  return arrGanjil;
};

const kelipatanTiga = arr => {
  let arrTiga = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arrTiga.push(arr[i]);
    }
  }
  return arrTiga;
};

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]