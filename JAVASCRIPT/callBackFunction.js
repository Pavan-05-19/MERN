//calling another function as a parameter is called callback function
function display(result){
    console.log("The result is: " + result);
}
function add(a, b, callback){
    let sum = a + b;
    callback(sum);
}
add(5, 10, display); // Output: The result is: 15