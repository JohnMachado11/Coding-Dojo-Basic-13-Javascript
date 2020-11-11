// Write a function that returns an array with all the numbers from 1 to 255. 
// You may use the push() function for this exercise.

function get_array(num) {
    var arr = [];
    for (var i = 1; i < num + 1; i++){
        arr.push(i);
    }
    return arr; 
}

x = get_array(255); 
console.log(x); // [1, 2, 3, 4, 5...255]
