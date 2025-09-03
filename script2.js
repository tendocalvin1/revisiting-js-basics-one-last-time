// working with attributes

const playground = document.getElementById('playground');

const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand1');
magicWand.setAttribute('class', 'magical-item wand');
magicWand.textContent = 'Magic Wand'
playground.append(magicWand);


// console.log(playground.getAttribute('id'))

magicWand.id = 'Wand 3'
console.log(magicWand.id)


// working with data attributes
const secretScroll = document.createElement('div');
secretScroll.id = 'secretScroll';
secretScroll.dataset.spell = 'invisibility';
secretScroll.dataset.componenets = 'moonlight, shadow essence'
secretScroll.textContent = "Ancient Spell Scroll"

console.log("Spell type:",secretScroll.dataset.spell)
console.log("Components:",secretScroll.dataset.componenets.split(','))