const dataHandling = arr => {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    console.log(
      `Nomor ID : ${arr[i][0]}\nNama Lengkap : ${arr[i][1]}\nTTL : ${arr[i][2]} ${arr[i][3]}\nHobi : ${arr[i][4]}\n`);
  }
};

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input);