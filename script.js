/* REMEMBER: npm install will add package.json file and if any file is deleted as long as you have the package.json file just use npm install and it will add the correct files! */
/* In your package.json file in the script you can change "test" to "build" then add browserifyfy script.js > bundle.js then use the command "npm run build" NPM lessons */
//import { without } from 'lodash'; this is not supported as much at the moment browsify was used. Kind of a lesson before webpack 
var _ = require('lodash');

/* just for fun with lodash */
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
/* end of fun with lodash */


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);