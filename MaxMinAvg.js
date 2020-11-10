// Given an array with multiple values, write a function that returns a new array that... 
// ... only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
    var arrnew = [];
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
        if (max < arr[i]){
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    return arrnew; 
}

x = maxMinAvg([12,3,-5,2,3,100,-6]); // [ 100, -6, 15.571]
console.log(x);