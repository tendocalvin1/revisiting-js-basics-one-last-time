// filter method

// filter = creates a new array by filtering out elements.

let numbers = [1,2,3,4,5,6,7]
let even_numbers = numbers.filter(isEven)
console.log("The even numbers from the set of numbers are:",even_numbers)

let odd_numbers = numbers.filter(isOdd)
console.log("The odd numbers from the set of numbers are:",odd_numbers)

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 != 0;
}



const ages = [12,12,45,67,90,22,45,40]
const adults = ages.filter(isAdult)
console.log(adults)

function isAdult(element){
    return element >= 18;
}