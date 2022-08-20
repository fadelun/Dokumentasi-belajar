// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let array = str.split(' ');
    let result = 0
   
   for(let i = 0; i < array.length; i++){
     if(array[i].length > result){
       result = array[i].length
     }
   }
   
   return result

   }
   
   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
//    6
console.log(findLongestWordLength("May the force be with you") )
// 5



// convert string ke array kemudian buat perulangan untuk mencari length dari tiap kata
// kemudian simpan jumlah angka tersebut dan terus melakukan perulangan sama ditemukannya kata terpanjang