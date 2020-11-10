// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).

function greaterY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > Y){
            count += 1;
        }
    }
    return count; 
}

x = greaterY([1,2,4,6,7,8,9], 2); // 5
console.log(x);