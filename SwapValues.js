// Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    var value_store = arr[0];
    var arrnew = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[0]){
            arr[0] = arr[arr.length - 1];
        }
        break;
    }
    arr[arr.length -1] = value_store;
    arrnew = arr;
    return arrnew; 
}

x = swap([4,3,8,9]); // [9,3,8,4]
console.log(x);