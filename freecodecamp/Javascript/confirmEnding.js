// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) == target
  }
  
  
  console.log(confirmEnding("Bastian", "n"))
  console.log(confirmEnding("Congratulation", "on"))
  console.log(confirmEnding("Connor", "n"))
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
  confirmEnding("Open sesame", "same")



  //pertama gunakan method slice
  //parameter pertama yang akan diambil oleh method slice yaitu awal posisi index dan parameter kedua akhir dari index
  // pada kasus kali ini kita hanya menggunakan satu parameter yang mengambil semua dari awal index
  //kemudian kita kurangi panjang str dengan panjang target, agar nilai yang dimiliki setara dengan panjang target
  //terakir kita bandingkan dengan string target 