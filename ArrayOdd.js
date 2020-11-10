//Write a function that would return an array of all the odd numbers between 1 to 50. 
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumbers(num) {
    var arr = [];
    for (var i = 0; i <= num; i++){
        if (i % 2 == 1){
            arr.push(i);
        }
    }
    return arr; 
}

x = oddNumbers(50);
console.log(x);