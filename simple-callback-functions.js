// basic callback function
const greet = (name, callback)=>{
    console.log("Hello " + name);
    callback();
}

const goodbye = ()=>{
    console.log("Good bye")
}


greet("Calvin", goodbye);