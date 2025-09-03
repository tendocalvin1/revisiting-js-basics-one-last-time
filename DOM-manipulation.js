// DOM manipulation methods.

// getting element by id in JavaScript.
const playground = document.getElementById('playground')

// method two for getting the element in JavaScript
// const playground = document.querySelectorAll('div')

// getting and adding elements in DOm manipulation
playground.append("🧘‍♂️🧘‍♂️🧘‍♂️", "","🎅🎅🎅", "👩‍🌾👩‍🌾👨‍🏭crystal-ball")

// modifying text content
const scrollOfWisdom = document.createElement('p');
playground.append(scrollOfWisdom)

// scrollOfWisdom.innerText = "Ancient wisdom lies within";
// console.log(scrollOfWisdom.innerText);

scrollOfWisdom.textContent = "Ancient wisdom lies within";
console.log(scrollOfWisdom.textContent);

// Two main properties for modifying text
// inner text
// text content

playground.innerHTML = '<p>Spells include: <strong>Levixone</strong></p> and <em> Invisibility</em>'

console.log(playground.innerHTML)
console.log(playground.textContent)

// removing Elements using DOM manipulation
const temporaryElement = document.createElement('p')
temporaryElement.textContent = "I am the best Software Engineer ever"
playground.append(temporaryElement)

playground.removeChild(temporaryElement);


const fruitBasket = document.createElement('div');
fruits.innerHTML = `
    <p>Apple</p>
    <p>Banana</p>
    <p>Cherry</p>

`

playground.append(fruitBasket);