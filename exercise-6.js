// main function
function angkaPalindrome(num) {
  // you can only write your code here!
  return cekPalindrome(num + 1);
}

// cek dulu palindrome atau bukan
const cekPalindrome = num => {
  let kiri = 0;
  let kanan = 0;
  num = String(num);

  // bagi index jadi 2, tengah ke kiri dan tengah ke kanan
  if (num.length % 2 === 0) {
    kiri = (num.length / 2) - 1;
    kanan = (num.length / 2);
  } else {
    kiri = Math.floor(num.length / 2) - 1;
    kanan = kiri + 2;
  }

  // cocokkin index kiri dan index kanan
  // validasi terakhir di index 0 dan index length - 1
  for (let i = kiri; i > 0; i--) {
    if (num[i] === num[kanan]) {
      kanan += 1;
      kiri -= 1;
    }
  }
  // kalau false, recursive
  return num[kiri] === num[kanan] ? num : cekPalindrome(Number(num) + 1);
};

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001