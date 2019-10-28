function groupAnimals(animals) {
  // you can only write your code here!
  return arrBaru(animals);
}

const firstLetter = animals => {
  let letter = [];
  for (let i = 0; i < animals.length; i++) {
    letter.push(animals[i][0]);
  }
  return letter;
};

const unik = animals => [...new Set(firstLetter(animals))];

const arrBaru = animals => {
  let hasil = [];
  let arrUnik = unik(animals).sort();
  for (let i = 0; i < arrUnik.length; i++) {
    let tampung = [];
    for (let j = 0; j < animals.length; j++) {
      if (arrUnik[i] === animals[j][0]) {
        tampung.push(animals[j]);
      }
    }
    hasil.push(tampung);
  }
  return hasil;
};

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]