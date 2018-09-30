/*
# Question:
#
#  Given a standard English sentence passed in as a string,
#  write a method that will return a sentence comprised of the same words,
#  but sorted by their first letter.
#
#  However, the method of sorting has a twist to it:
#  all words that begin with a lowercase letter should be
#  at the beginning of the sorted sentence,
#  and sorted in ascending order. All words that begin with
#  an uppercase letter should come after that, and should be sorted
#  in descending order. If a word appears twice in the sentence,
#  it should be returned twice in the sorted sentence.
#
#  Any punctuation must be discarded.
#
#  Sample Run:
#
#    Input: `Mary had a Little Lamb whose fleech was white as snow.`
#
#    Output `a as fleech had snow was white whose Mary Little Lamb`
*/

// Convert string to array 

// split array into capital and non capitals and discard punctuations 

// sort the noncapitals in ABC order

// sort the capitals in reverse ABC order

// combine both arrays

var capitalizedWordsArray = [];
var nonCapitalizedWordsArray = [];
var punctuation = [];

function reorganize(string){
  string = string.replace(/(?:[\(\)\-&$#!\[\]{}\"\',\.]+(?:\s|$)|(?:^|\s)[\(\)\-&$#!\[\]{}\"\',\.]+)/g, ' ').trim();
  
  let stringToArray = string.split(" ");
  // console.log(stringToArray);
  
  for(let i = 0; i < stringToArray.length; i++){
    
    if(/^[A-Z]/.test(stringToArray[i])){
      capitalizedWordsArray.push(stringToArray[i]);  
    }
    
    else if(/^[a-z]/.test(stringToArray[i])){
      nonCapitalizedWordsArray.push(stringToArray[i]);  
    }
         
  }
  
  nonCapitalizedWordsArray.sort();
  capitalizedWordsArray.sort().reverse();
  
  console.log(capitalizedWordsArray);
   
  nonCapitalizedWordsArray.push(...capitalizedWordsArray);
  
  var result = nonCapitalizedWordsArray.join(" ").toString();
  
  console.log(result);
}

reorganize(`Mary had a Little Lamb whose fleech was white as snow.`)