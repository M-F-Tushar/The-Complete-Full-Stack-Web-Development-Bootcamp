const prompt = require("prompt-sync")();

// Get dog's age from user
var dogAge = prompt("How old is your dog?");

// Calculate human equivalent using proper precedence
var humanAge = (dogAge - 2) * 4 + 21;

// Display result
console.log("Your dog is " + humanAge + " years old in human years.");