// modif dulu datanya sesuai perintah
const dataHandling2 = arr => {
  arr.splice(1, 1, "Roman Alamsyah Elsharawy");
  arr.splice(2, 1, "Provinsi Bandar Lampung");
  arr.splice(4, 1, "Pria", "SMA Internasional Metro");
  return arr;
};

// ambil tanggal, split jadi array, dipake buat fungsi berikutnya
const ambilTgl = arr => dataHandling2(arr)[3].split('/');

// konversi angka bulan ke nama bulan pake if else
const namaBulan = arr => {
  let bulan = ambilTgl(arr);
  if (bulan[1] === '04') {
    bulan = 'April';
  } else if (bulan[1] === '05') {
    bulan = 'Mei';
  } else if (bulan[1] === '06') {
    bulan = 'Juni';
  } else {
    bulan = 'Kalau bulan bisa ngomong';
  }
  return bulan;
}

// konversi angka bulan ke nama bulan pake switch case
// const namaBulan = arr => {
//   let bulan = ambilTgl(arr);
//   switch (true) {
//     case bulan[1] === '04':
//       bulan = 'April';
//       break;
//     case bulan[1] === '05':
//       bulan = 'Mei';
//       break;
//     case bulan[1] === '06':
//       bulan = 'Juni';
//       break;
//     default:
//       bulan = 'Kalau bulan bisa ngomong';
//   }
//   return bulan;
// };

// return value setelah tgl diurutin secara descending (number)
const urut = arr => ambilTgl(arr).sort(function (a, b) {
  return b - a;
});

// gabungin tanggal pake strip
const strip = arr => ambilTgl(arr).join('-');

// batasin nama jadi 15 karakter (index 0 - 14)
const batasNama = arr => dataHandling2(arr)[1].slice(0, 14);

// input
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

//output
console.log(dataHandling2(input));
console.log(namaBulan(input));
console.log(urut(input));
console.log(strip(input));
console.log(batasNama(input));