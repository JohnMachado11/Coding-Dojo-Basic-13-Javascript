// Given an array with multiple values, write a function that returns the maximum number in the array. 
// (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
            console.log(`Max is ${max} on this iteration`);
        }
    }
    return max; 
}

x = findMax([6,22,-2,1,5,99,2,99.1,100]); // 100
console.log(x);