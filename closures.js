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

    let isOn = false;

    const toggle =()=>{
        isOn = !isOn;
        return isOn;
    }

    return toggle;
}

const on = createToggle();
console.log(on());

// secret message
// Create a function secretMessage(message) that returns two functions:
// one to reveal the secret,
// one to update it.


const secretMessage = ()=>{
    let secret = "I am a software engineer." // private, only visible to inner functions
    const revelation =()=>{
      return secret;
    }   

    const update =(new_message)=>{
        return new_message;
    }

    // returning both functions
    return [revelation, update]; // using arrays to return the functions created
}

// const word = secretMessage()
// console.log(word[0]()) // invoking the revelation function
// console.log(word[1]()) // invoking the update function


const [revelation , update] = secretMessage("Initial message")
console.log(revelation()); // this helps to invoke the revelation function
console.log(update("I work for a startup called Airbnb")); // this helps to invoke the update function



// secret message
// Create a function imaginaryMessage(message) that returns two functions:
// one to show the secret,
// one to change it.


const imaginaryMessage =(message)=>{
    let talk = "I am an all round software engineer who creates software for the future"

        const show = ()=>{
            return talk;
        }

        const change =(message_change)=>{
            return message_change;
        }

        // calling or invoking both sets of functions
        return [show, change]


}

const [show, change] = imaginaryMessage("Initial message");
console.log(show()); // this helps to invoke the show function
console.log(change("I am a Real Estate developer and a software engineer.")); // this helps to invoke the change function


// Private Bank Account
// Create a createBankAccount(initialBalance) function that returns methods:
// deposit(amount),
// withdraw(amount),
// getBalance().
// The balance must remain private.


const createBankAccount = (initial_deposit)=>{
    let principal = 50000;
    let rate = 0.25;
    let time = 1; // in years
    let amount_withdrawn = 2000;
    let interest = principal * rate * time
    let amount = principal + interest;
    let balance = amount - amount_withdrawn;
    let remaining_amount = amount - amount_withdrawn - interest
    
    

    const deposit =()=>{
        return amount;
    }

    const withdraw =()=>{
        return balance;
    }

    const getBalance =()=>{
        return remaining_amount;
    }

    return [deposit, withdraw, getBalance]
}


const [deposit, withdraw, getBalance] = createBankAccount("Initial Deposit")
console.log(deposit()); // invokes the deposit function
console.log(withdraw()); // invokes the withdraw function
console.log(getBalance()); // invokes the getBalance function


//Rate Limiter
// Create a function limitCalls(fn, maxCalls) that allows a function fn to be called only up 
// to maxCalls times. After that, it always returns "Limit reached".

function limitCalls(fn, maxCalls) {
    let count = 0; // Tracks number of calls
    
    return function(...args) {
        if (count >= maxCalls) {
            return "Limit reached";
        }
        count++;
        return typeof fn === 'function' ? fn(...args) : fn;
    };
}

// Example usage:
const beeps = limitCalls((x) => `Beep ${x}`, 4);

// Test cases
console.log(beeps(1)); // "Beep 1"
console.log(beeps(2)); // "Beep 2"
console.log(beeps(3)); // "Beep 3"
console.log(beeps(4)); // "Beep 4"
console.log(beeps(5)); // "Limit reached"
console.log(beeps(6)); // "Limit reached"


// Memoized Factorial
// Write a function memoizedFactorial() that caches factorial results so that 
// repeated calls with the same number don’t recompute.

const memoizedFactorial = () => {
    let factorial_results = [];
}


//Event Emitter (Mini Pub/Sub System)
//Build a closure-based createEventEmitter() that supports:
//subscribe(event, callback),
//emit(event, data),
//unsubscribe(event, callback).
const createEventEmitter =()=>{
    let Event = "Sports Day";
    let Event_two = "It's actually sports day tomorrow."
    let Event_three = "I do not want to hear about the sports announcement any more"
    const subscribe =()=>{
        return Event;
    }

    const emit =()=>{
        return Event_two;
    }


    const unsubscribe =()=>{
        return Event_three;
    }


    return [subscribe, emit , unsubscribe]
}

const [subscribe, emit , unsubscribe] = createEventEmitter("initial message");
console.log(emit()); // evokes the emit function
console.log(subscribe()); // evokes the subscribe function
console.log(unsubscribe()); // evokes the unsubscribe function


// Custom Hook Simulation (React-like)
// Implement useCounter(initialValue) that behaves like a React hook using closures. 
// It should return [getCount, increment, decrement, reset].
const useCounter =()=>{
    let count = 0;
        const getCount =()=>{
            return count;
        }

        const increment =()=>{
            return count += 1;
        }

        const decrement =()=>{
            return count -= 1;
        }

        const reset =()=>{
            return count === 0;
        }


        return [getCount, increment, decrement, reset];
}

const [getCount, increment, decrement, reset] = useCounter("initial digit");
console.log(getCount()); // evokes the getCount function
console.log(increment()); // evokes the increment function
console.log(decrement()); // evokes the decrement function
console.log(reset()); // evokes the reset function


// Currying with Closures
// Write a function curry(fn) that transforms a function into its curried form. For example:
// function sum(a, b, c) { return a + b + c; }
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3)); // 6
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...args2) {
                return curried(...args, ...args2);
            }
        }
    };
}
