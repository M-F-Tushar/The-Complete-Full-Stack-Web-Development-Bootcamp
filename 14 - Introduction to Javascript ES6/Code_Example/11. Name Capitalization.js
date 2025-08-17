const prompt = require("prompt-sync")();

var name = prompt("What is your name: ");

var firstChar = name.slice(0, 1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1, name.length);

restOfName = restOfName.toLocaleLowerCase();

var capitalizedName = upperCaseFirstChar + restOfName;

console.log("Hello " + capitalizedName);