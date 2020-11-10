// Write a function that returns the sum of all the odd numbers from 1 to 5000. 
// (e.g. 1+3+5+...+4997+4999)

function sum_odd_5000(num) {
    var sum = 0;
    for (var i = 1; i < num + 1; i++){
        if (i % 2 !== 0){ // can be "!== 0" OR "== 1"
            sum += i;
        }
    }
    return sum; 
}

x = sum_odd_5000(5000); // 6250000
console.log(x);