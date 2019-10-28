const balikString = kata => {
  let hasil = '';
  for (let i = kata.length - 1; i >= 0; i--) {
    hasil += kata[i];
  }
  return hasil;
};

// TEST CASES
console.log(balikString('hello world!'));