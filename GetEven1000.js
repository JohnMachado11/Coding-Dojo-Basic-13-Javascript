// Write a function that would get the sum of all the even numbers from 1 to 1000. 
//You may use a modulus operator for this exercise.


function sum_even_numbers(num){
    var sum = 0;
    for (var i = 1; i < num + 1; i++){
        if (i % 2 == 0){
            sum += i;
        }
    }
    return sum; 
}

x = sum_even_numbers(1000); // 250500
console.log(x);