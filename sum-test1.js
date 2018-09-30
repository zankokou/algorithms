// Task: Given a set of numbers; figure out of any pair of the numbers equal the sum

// Given Sorted Array
var array1 = [1, 2, 3, 9]; // Answer should be No/Null
var array2 = [1, 2, 4, 4]; // Answer should be Yes
var sum = 8;

// Method One

var len = array1.length
var first;
var last;

for (let i = 0; i < len; i++){
    first = array1[i]
    last = array1[len--]

     if (first + last === 8){
        console.log(`Found matching pair ${first} , ${last}`);
        break;
    }

    else {
        console.log('no matching pair');
    }
}
