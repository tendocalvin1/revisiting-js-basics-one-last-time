
// callback functions in JavaScript
// Explanation of what they mean
// A callback function is a function that is passed as an argument to another function
// OR a callback is a function passed into another function to be executed later.
// It allows a function to call another function

// basic callback
function greet(name, callback){
    console.log("hello " + name);
    callback()
}

const goodbye =()=>{
    console.log("Goodbye !")
}

greet("Tendo", goodbye);

// Example 2
// callback with parameters
function processUserInput(callback){
    const name = "Tendo";
    callback(name)

    processUserInput(function (user){
        console.log("Welcome " + user)
    })
}


// math operation callback
const calculate =(a, b, operation)=>{
    return operation(a, b)
}

const add =(x, y)=>{return x + y}
const subtract =(x, y)=>{return x - y}
const multiply =(x, y)=>{return x * y}

console.log(calculate(4, 3 , multiply));
console.log(calculate(4, 3 , add));
console.log(calculate(4, 3 , subtract));

// Asynchronous Callback with setTimeout
function fetchData(){
    console.log("Fetching Data...")

    setTimeout(()=>{
        callback("Here's the data")
    }, 2000)

    fetchData((data)=>{
        console.log("Received:", data);
    })
}

//fetchData()

// Error-First Callback

function divide(a, b, callback){
    if( b ===0){
        callback("Error: Division by zero", null)
    }else{
        callback(null, a/b)
    }
}

divide(10, 2, (err, result)=>{
    if(err) console.log(err);
    else console.log("Result:", result)
})