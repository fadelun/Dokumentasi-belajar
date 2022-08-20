// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.


// test
// reverseString("hello") should return the string olleh.
// reverseString("Howdy") should return the string ydwoH.



function reverseString(str) {
 
    str = str.split('').reverse().join('');
  
    return str
  }
  
  console.log(reverseString("hello"))
  //olleh