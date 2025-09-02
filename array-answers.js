
// - [ ] **T-001**: Create an array of 5 elements using the Array Constructor.
const array = new Array(5);
console.log(array);
// - [ ] **T-002**: Create an array of 3 empty slots.
const array_one = new Array(3);
console.log(array_one);
// - [ ] **T-003**: Create an array of 6 elements using the Array literals and access 
//the fourth element in the array using its `length` property.

const letters = ['a','b','c','d','e','f','g','h','i'];
console.log(letters.length);
// - [ ] **T-004**: Use the `for` loop on the above array to print elements in the odd index.

for(let i = 0; i <= letters.length -1; i++){
    if(i % 2 != 0){
        console.log(letters[i])
    }
}
// - [ ] **T-005**: Add one element at the front and the end of an array.

letters.unshift('z');
letters.push('y');
console.log(letters);
// - [ ] **T-006**: Remove an element from the front and the end of an array.

// element from the front
letters.shift();
console.log(letters);

letters.pop();
console.log(letters);
// - [ ] **T-007**: Create an array containing the name of your favourite foods(10 foods). 
//Destructure the 6th food element from the array using destructuring.

const foods = ['pork','rice','meat','beef','matooke','beans','chicken','pilau','cowpeas','gnuts']
const [,,,,,sixthFood] = foods;
console.log(sixthFood);
// Destructuring skips items using commas ,
// Each comma means “skip one spot

// - [ ] **T-008**: Take out the last 8 food items from the above array 
// using the Array destructuring. Hint: rest parameter.

const [pork, rice, ...rest] = ['pork','rice','meat','beef','matooke','beans','chicken','pilau','cowpeas','gnuts']
console.log(...rest);
// - [ ] **T-009**: Clone an Array(Shallow cloning)
const clubs = ['united','city','arsenal','liverpool'];
const universities = ['UCU','KYU','MUK','Busiitema'];

const together = clubs.concat(universities)
console.log(together)

// - [ ] **T-010**: Empty an array using its length property
const teams = ['united','city','arsenal','liverpool'];
console.log(teams.splice())

const fruits = new Array(7)
console.log(fruits.length);
// - [ ] **T-011**: Create an array of 10 elements(number 1 to 10). 
//Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.

const digits = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i <= digits.length - 1; i++){
    if(digits[i] === digits[4]){
        console.log("number 5 has been reached.")
    }
}
// - [ ] **T-012**: Create an Array of 10 elements. 
// Use the `splice()` method to empty the array.

const numerals = [1,2,3,4,5,6,7,8,9,10];
console.log(numerals.splice());
// - [ ] **T-013**: Create an Array of 10 elements. 
// You can empty the array in multiple ways: 
// using the `length` property, using the `pop()` method, 
// using the `shift()` method, setting the array with `[]`, 
// or the `splice()` method. Which among these methods are most efficient and why?
const names = ["Tendo","calvin","Trent","Alexander","Arnold"];
console.log(names.splice()); // empties an array and leaves it with nothing.
console.log(names.shift());
console.log(names);
// - [ ] **T-014**: What happens when you concatenate two empty arrays?

const lame = [];
const strong = [];

const combined = lame.concat(strong)
console.log(combined);
// - [ ] **T-015**: How can you check if a value is partially matching with any of the elements of an Array?
// - [ ] **T-016**: What is the difference between the slice() and splice() methods?

// splice empties the array while slice 

// - [ ] **T-017**: Create an Array of alphanumeric strings. 
// Sort the elements in both ascending and descending orders. 
//You must be doing this in an immutable way such that the source array never gets modified.

const figures = ['zan', 'plan','nato','oozing','bants']
// console.log(figures.slice());
console.log(figures.reverse());



// - [ ] **T-018**: Can you give examples of sparse and dense arrays?
// - [ ] **T-019**: Give a practical usages of the .fill() method

const cars = ['tesla','toyota','bmw'];
cars.fill('audi', 1, 3)
console.log(cars)
// - [ ] **T-020**: How to convert an array to a string?
const colors = ['red','blue','green','yellow'];
const joined = colors.join(" <==> ")
console.log(joined);