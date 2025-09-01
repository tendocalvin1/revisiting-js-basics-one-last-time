// basic callback function
const greet = (name, callback)=>{
    console.log("Hello " + name);
    callback();
}

const goodbye = ()=>{
    console.log("Good bye")
}


greet("Calvin", goodbye);

// Anonymous function as Callback
const processUserInput = (callback)=>{
    const name = "SWE Tendo Calvin"
    callback(name);
}


processUserInput(function(name){
    console.log("Nice to meet you " + name);
})

// callback with parameters
const calculate = (num1, num2, callback)=>{
    return callback(num1, num2)
}

const add = (num1, num2)=>{
    return num1 + num2
}

console.log(calculate(2, 4, add))


// simulating asynchronous behavior
// using setTimeout (mimics async tasks)
fetchData = ()=>{
    console.log("Fetching Data....");
    setTimeout(()=>{
        console.log("Data Received")
    },3000)
}


fetchData(function(data){
    console.log(data)
})

// Array Methods with callbacks
const numbers = [2,3,4,5,6,7,8]
const squares = numbers.map(function(num){
    return num * num
})

console.log(squares);

// Error Handling with callbacks
const divide =(a, b, callback)=>{
    if(b === 0){
        callback("Error: Cannot divide by zero", null);
    }else{
        callback(null, a/b)
    }
}

divide(56, 8, function(error, result){
    if(error){
        console.log(error)
    }else{
        console.log("Result:", result)
    }
})


