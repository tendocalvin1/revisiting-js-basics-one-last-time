// A closure is lie a nested function. This means a function inside another function.
// Trying to go through what I learnt yesterday

// basic closures in JavaScript.
const outerFunction =(x)=>{
    
    const innerFunction =(y)=>{
        return x + y;
    }

    return innerFunction;
}

const analysis = outerFunction(0);
console.log(analysis(2));

// example 2

const outsideFunction =()=>{
    let message = "I love this game";
    let error = "This currrent Manchester United team is the worst in PL history";
    let honor = "I am delighted to announce that I am starting my journey as an ML engineer."

    const subscribe =()=>{
        return message;
    }

    const emit =()=>{
        return error;
    }

    const unsubscribe =()=>{
        return honor;
    }

    return [subscribe, emit, unsubscribe];
}


const [subscribe, emit, unsubscribe]  = outsideFunction("initial message");
console.log(subscribe()); // evokes the subscribe function
console.log(emit());    // evokes the emit function
console.log(unsubscribe()); // evokes the unsubscribe function


// Example 3
const game =()=>{
    let winning = "getting three points";
    let losing = "getting zero points";
    let drawing = "getting one point";

    const win =()=>{
        return winning;
    }

    const draw =()=>{
        return drawing; 
    }

    const loss =()=>{
        return losing; 
    }

    return [win, draw, loss]
}

const [win, draw, loss] = game("initial_result");
console.log(win()); // invokes the function win
console.log(draw()); // invokes the function draw
console.log(loss()); // invokes the function loss


const nba =()=>{
    let three_points = "win";
    let zero_points = "loss";

    const winning =()=>{
        return three_points;
    }

    const losing =()=>{
        return zero_points;
    }

    return [winning, losing]
}

const [winning, losing] = nba("result");
console.log(winning());  // invokes the function of winning
console.log(losing());   // invokes the function of losing