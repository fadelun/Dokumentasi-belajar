// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {

    // SOLUTION 1
    // let result = ''
      // if(num < str.length){
      // return   result = str.substring(0, num) + "..."
      // }
      //  return result = str.substring(0, num)
      // 


      //SOLUTION 2
      return (num < str.length) ? str.substring(0, num) + "..." : str
    
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 8);
    //A-tisket...
    truncateString("Peter Piper picked a peck of pickled peppers", 11);
    //Peter Piper...
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
    //A-tisket a-tasket A green and yellow basket


    
    
    