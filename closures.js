// Mastering JavaScript Closures with ease.
// The nested function is a closure . Simple as that


const outer = (x) =>{
    const inner = (y) =>{
        return x * y
    }

    return inner
}

const outerFunction = outer(15);

outerFunction(3);
console.log(outerFunction(3))

// Greeting
const makeGreeter =(name)=>{
    const greeting =()=>{
        console.log("Hello " + name)
    }
    return greeting;
}


const morning = makeGreeter("Arnold")
console.log(morning("Arnold"));


// incrementor
const makeIncrement =(x)=>{
    const increment =(y)=>{
        return x + y;
    }
    return increment;
}

const increasing = makeIncrement(5);
//increasing(1);
console.log(increasing(1));


// adder factory
const makeAdder =(x)=>{
    const adder =(y)=>{
        return x + y;
    }

    return adder;
}

const addition = makeAdder(3);
console.log(addition(4));


// Toggle Switch
const createToggle =()=>{
    const lighting =(on)=>{
        console.log("It is ON")
    }
    return lighting;
}

const not_lighting = createToggle();
console.log((not_lighting()));