// map method in arrays
const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element)=> Math.pow(element, 2))
console.log(squares);

const digits = [5,6,7,8,9,1,2,3,4]
const cubes = digits.map((element)=> Math.pow(element, 3))
console.log(cubes);

const numerals = [2,3,4,5,6,7,8];
const quadruples = numerals.map((element)=>Math.pow(element, 4))
console.log(quadruples)

// for each method in arrays
const fruits = ['🍎','🍊','🍋','🍉','🍇','🍓']
fruits.forEach((element)=> console.log(element))

// filter method in arrays

const even_numbers = numbers.filter((element)=> element % 2 === 0)
console.log(even_numbers);


const odd_numbers = numerals.filter((element)=> element % 2 !== 0)
console.log(odd_numbers);