
const createCounter = (x) =>{
    return{
        increment :(y)=> x + y,
        decrement :(z)=> x - z,
        reset :(x)=> x == 0
    }
    
}
const counter = createCounter(5);
console.log(counter.increment(5));
console.log(counter.reset(1));
console.log(counter.decrement(5));


// Write a function once(fn) that ensures a given function fn can only be called once, 
// and afterwards always returns the result of the first call.

function once(a, b){
    const wrapper = ()=>{
        var hasRun = false;
        var result; 
    }

    
}


const oneAddition = once((a, b)=> a + b)
console.log(oneAddition(2, 3))















