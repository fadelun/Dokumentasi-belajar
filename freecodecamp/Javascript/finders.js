// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
    let num = 0
    for(let i = 0;i < arr.length; i++){
      if(func(arr[i])){
        return num = arr[i]
      }
    }
    
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  //2
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
  //8


  //variabel num bernilai 0
  // looping array
  // jadikan setiap nilai array sebuah parameter didalam func()
  // jika func() bernilai true maka taro lah nilai array tersebut ke variable num dan return
  // jika tidak ada yang cocok akan mengembalikan undefined