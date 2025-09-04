// DOM = DOCUMENT OBJECT MODEL
//      Object {} that represents the page you see in the web browser
//      and provides you with an API to interact with. 
//      Web browser constructs the DOM when it loads an HTML document,
//      and structures all the elements in a tree like representation.
//      JavaScript can access the DOM to dynamically 
//      change the content, structure and style of a web page. 

// document.title = "My website"  // this line of code changes the title of the web page being displayed
// document.body.style.backgroundColor = 'pink'

const username = "Tendo Calvin SWE"
const Welcome = document.getElementById("welcome-message")
Welcome.textContent  += username === "" ? `Guest` : username 