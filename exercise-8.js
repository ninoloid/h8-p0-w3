function pasanganTerbesar(num) {
  num = String(num);
  let temp = [];
  let sortNum = 0;
  for (let i = 0; i < num.length - 1; i++) {
    temp.push(num.slice(i, i + 2));
    sortNum = temp.sort();
  }
  return Number(sortNum[sortNum.length - 1]);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99