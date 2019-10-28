function targetTerdekat(arr) {
  return cekIndex(arr)[0] ? cekIndex(arr)[0] : 0;
}

// bikin array yg isinya index dari 'x'
function indexOfX(arr) {
  let arrTemp = [],
    arrX = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr.indexOf('x', i);
    arrTemp.push(a);
    // bikin array baru dengan unique value
    arrX = [...new Set(arrTemp)];
  }
  arrX.sort();
  switch (arrX[0]) {
    case -1:
      arrX.shift();
      break;
  }
  return arrX;
}

// bikin array yg isinya index dari 'o'
function indexOfO(arr) {
  let arrTemp = [],
    arrO = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr.indexOf('o', i);
    arrTemp.push(a);
    // bikin array baru dengan unique value
    arrO = [...new Set(arrTemp)];
  }
  arrO.sort();
  switch (arrO[0]) {
    case -1:
      arrO.shift();
      break;
  }
  return arrO;
}

// bikin array yg isinya semua jarak dari x ke o, vice versa, terus di sort
const cekIndex = arr => {
  let arrX = indexOfX(arr),
    arrO = indexOfO(arr),
    arrTemp = [];
  for (let i = 0; i < arrX.length; i++) {
    for (let j = 0; j < arrO.length; j++) {
      if (arrX[i] < arrO[j]) {
        arrTemp.push(arrO[j] - arrX[i]);
      } else {
        arrTemp.push(arrX[i] - arrO[j]);
      }
    }
  }
  return arrTemp.sort();
};

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2