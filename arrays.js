
const salad = []
salad.push('tomato')
salad.push('cucumber')
salad.push('onion')
salad.push('salad')
salad.push('carrot')
console.log(salad)

const array = ['🍋','🍉','🍊','🍋','🍒','🍑','🍅','🌽','🍄','🍉','🥦','🥕']
// console.log(array)

const anotherSalad = new Array('🍋','🍉','🍊','🍋','🍒','🍑','🍅','🌽','🍄','🍉','🥦','🥕')

console.log("Array", array);
console.log("Another Salad", anotherSalad);

console.log(array === anotherSalad); // the answer is false because they are two different arrays

// creating arrays with a constructor function

const two = new Array(1,4);
console.log(two);

const four = new Array(1,3,5,8)
console.log(four);

console.log(array[1]);
console.log(array[5]);
console.log(array[0]);


for(let i = 0; i <= array.length - 1; i++){
    console.log(`Element at index ${i} is ${array[i]}`)
}

// methods in arrays
// push() - Adds an element at the end of an array
array.push('🍍')
console.log(array);

// unshift() - Adds an element at the beginning of an array
array.unshift('🥝')
console.log(array);

// how to remove elements in an array
// pop() - removes the last element of an array

console.log(array);
array.pop();

const popRet = array.pop()
console.log(popRet);  // This returns the element that has been removed.


// shift() - removes an element from an array at the beginning
array.shift();
console.log(array);

const shiftRet = array.shift();
console.log(shiftRet)

// creating a copy of an array
// slice()- this creates another copy of an array
const arrayCopy = array.slice();
console.log(arrayCopy);


// determining an array
Array.isArray(['🍋','🍉','🍊','🍋','🍒','🍑','🍅','🌽','🍄','🍉','🥦','🥕']);

// desctructuring in Arrays
const [pineapple, orange,berry] = ['🍒','🍑','🍅']
console.log(pineapple,orange,berry);

// skipping a value
const [banana,,bear] = ['🍒','🍑','🍅']
console.log(banana);
console.log(bear);