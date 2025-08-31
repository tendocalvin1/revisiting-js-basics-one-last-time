const add = (x, y) =>{
    return x + y
}


console.log(add(4, 6))

const subtract = (x, y) => x - y
console.log(subtract(4, 6))

// nested functions in JavaScript
// This is a function within another function

const inner = () =>{
    console.log("Inner function");

    const outer = () =>{
        console.log("Outer function");
    }
    outer();
}

inner();


// Understanding JavaScript function Scope
function doSomething(){
    let x = 10;
    const y = 20;
    var z = 30;

    console.log(x, y, z);
}

// Note if I put the statement, console.log(x, y, z); it will show me undefined as its
// outside of the scope 
// console.log(x); // This statement displays X is not defined
// console.log(y); // This statement displays Y is not defined
// console.log(z); // This statement displays Z is not defined

doSomething();

var m = 10;
const n = 20;
let p = 30;

const Something = () =>{
    console.log(m, n, p);
}

Something();