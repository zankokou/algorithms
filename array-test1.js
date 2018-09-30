// Task: Remove duplicate values from an array

// Given Unsorted array
let array = [1, 2, 3, 5, 2, 1, 3, 6, 8];

// Method 1 - No sorting needed
let resultArray = [];

let len = array.length

function methodOne(){
    for (let i = 0; i < len; i++){
        if (resultArray.includes(array[i])){
            console.log(`duplicate number detected ${array[i]}`)
        }
    
        else {
            resultArray.push(array[i]);
        }
    }
    
    console.log(resultArray)
}

// methodOne();


// Method 2 - Sorted array
var _temp;

function methodTwo(){
    array.sort();
    
    for (let i = 0; i < len; i ++){
  
       if(array[i] !== _temp){
            resultArray.push(array[i]);
            _temp = array[i]
       }
    }

    console.log(resultArray);
}

// methodTwo();



// Method 3 - Set Operator
function setOperator(data){
    var newSet = [...new Set(data)]
    console.log(newSet)
}

// setOperator(array);
