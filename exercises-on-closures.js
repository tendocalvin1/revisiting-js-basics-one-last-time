
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















