// arrow functions = a concise way to write function expressions
//                    good for simple functions that you can use once
//                    (parameters) => some code

const hello = (name, age) =>{
    console.log(`hello ${name}`);
    console.log(`You are ${age} years old`)
}

hello("David", 23)


const numbers = [1,2,3,4,5,6]
const squares = numbers.map((element)=> Math.pow(element, 2))

const cubes = numbers.map((element)=> Math.pow(element, 3))

const even_numbers = numbers.filter((element)=> element % 2 === 0)

const odd_numbers = numbers.filter((element)=> element % 2 != 0)

console.log(squares);
console.log(cubes);
console.log(even_numbers);
console.log(odd_numbers);


const printMeAgain = function(){
    console.log("Print Me Again");
}

const printMeAgainWithParam = function(a, b){
    console.log( a ,b)
}

printMeAgain();
printMeAgainWithParam(14, 67)