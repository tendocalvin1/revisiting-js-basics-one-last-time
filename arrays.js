
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

// nested array
const_numbers = [1,2,3,4,[3,5,7,9]]
console.log(const_numbers[4][2]);


// rest and spread operator
// ...
const [strawberry, apple, ...rest]  = ['🍒','🍑','🍅','🌽','🍄']
console.log(rest)

// swapping

let a = 10;
let b = 14;
[a, b] = [b, a]
console.log(a, b);


// merging things in arrays
// we use the spread operator .
const numbers = [1,2,3,4,5,6];
const letters = ['a','b','c','d','e','f'];

const alphabets = [...numbers, ...letters]
console.log(alphabets);


// length property

console.log(alphabets.length);
console.log(numbers.length);
console.log(letters.length);

// JavaScript Array Methods
// 1. concat() method
const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second)
console.log(combined);


const one = [2,4,6,8,10];
const three = [12,14,16,18,20];
const five = [22,24,26,28,30]
const merged = one.concat(three, five)
console.log(merged);


const emotions = ['😂','😁','🤣','😍','😄','😎','😊']
const joined = emotions.join("<==>")
console.log(joined);

// fill() - This changes the origin of the array or it mutates the array.

const colors = ['red','yellow','green'];
colors.fill('pink', 1, 3)
console.log(colors)


// includes() - checks if an element exists in an array
const names = ['alex','maya','melissa','arnold','debby', 'alex']
console.log(names.includes('july'))  // false
console.log(names.includes('melissa'))  // true

// indexOf()
console.log(names.indexOf('alex'));
console.log(names.indexOf('debby'));
console.log(names.lastIndexOf('alex'))

// sort() 
//explanation of sort()
// The default sort() method converts the element types into strings
// the default sorting order is ascending

names.sort()
console.log(names.sort())

const artists = [
    'Drake', 'Adele', 'Beyonce', 'Kanye', 'Rihanna', 'Eminem'
]

console.log("default sorting of artists after array:", artists.sort())

// to sort in descending order
console.log("descending order:", artists.sort().reverse())



let ages = [2,4,8,23,34,99,89]
console.log("descending order:",ages.sort().reverse())
console.log("ascending order:",ages.sort())

// splice method
// splice(starting index, number of elements to be removed, elements to be added)

const institutions = ['renault','redbull','mercedes','ferrari','aston-martin']
//console.log(institutions.splice(0, 1)) // splice always returns the array that contains
// the removed elements. output = [Tom]


console.log(institutions.splice(2, 1, "audi"))
console.log(institutions) // here, we have added audi to our array and replaced mercedes
// since it was at index 2. 

// slice - This copies an array
// splice - this mutates an array. removes/adds/replaces an element

// at() method


const junk_food = ['🍕','🍔','🍟','🌭','🍿','🥗','🧀','🥐','🍞']
console.log(junk_food.at(0)); // junk_food at index zero
console.log(junk_food.at(6)); // junk_food at index six
console.log(junk_food.at(-1));



// copywithIn
// syntax; copyWithin(target, start, end)

const nums = [1,2,3,4,5,6]
nums.copyWithin(0, 3, 6)
console.log(nums.copyWithin()) // [4,5,6,4,5,6]

const plagues = [1,2,3,4,5,6]
plagues.copyWithin(0, 3, 5)
console.log(plagues.copyWithin()) // 





