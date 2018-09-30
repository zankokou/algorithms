// Task: Count the number of times a character appears in a string

var array = [];

function count(params, string){
  
  // var splitString = string.split('');
  // console.log(splitString);
  
  
  for(let i = 0; i < string.length; i++){
      if(string[i] === params){
       
        array.push(string[i]);
      }
      
      console.log('looking at ', string[i])
     }
      console.log(array.length);
}


count('l', 'HellooooOMGLl')