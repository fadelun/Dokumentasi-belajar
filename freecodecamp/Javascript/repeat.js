// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let result = ''
  
    for(let i = 0; i < num; i++){
      result += str
    }
  console.log(result)
    return result
  }
  
  repeatStringNumTimes("abc", 3);
  //abcabcabc
  repeatStringNumTimes("*", 3)
  //*** */
  repeatStringNumTimes("*", 8)
  //******** */
  repeatStringNumTimes("abc", 0)
  // ""

  //buat string kosong
  //buat looping dan lakukan sebanyak berapakali sesuai banyaknya variable num
  //tambahkan string str kedalam string kosong
  //kembalikan string kosong yg sudah ditambah tadi