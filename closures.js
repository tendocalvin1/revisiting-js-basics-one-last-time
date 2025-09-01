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