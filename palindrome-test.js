

// split the word into array

// push array into new array in reverse order

// compare both indexes of arrays

function checkIfPalindrome(string){
    var splitString = string.split("");
      
    var reverseArray = []
    
    for(let i = splitString.length-1; i >= 0; i--){
      reverseArray.push(splitString[i]);
      
    }
  //   console.log('split', splitString);
  //   console.log('reverse ',reverseArray);
       if(splitString.toString() === reverseArray.toString()){
        console.log(true);
        }
    
        else{
        console.log(false)
        }
        
  }
  
  checkIfPalindrome('toto')

// method 2
  function checkIfPalindromeSimple(string){
    var reverse = string.split('').reverse().join('');
    
    if(string === reverse){
        console.log(true);
      
    }
    
    else{
      console.log(false)
    }
      
  }
  
  
  checkIfPalindromeSimple('toto')