// HOF(high order functions)
// explanation of High Order Functions
// A function that takes another function as an argument or returns a function as a result.
// High order functions take one or more functions as argument
// High order function may return a function.

const getCapture =(camera)=>{
    camera();
}

getCapture(function(camera){
    console.log("Canon")
})


function returnFn(){
    return function(){
        console.log("Returning....")
    }
}
const innerFn = returnFn();
innerFn();