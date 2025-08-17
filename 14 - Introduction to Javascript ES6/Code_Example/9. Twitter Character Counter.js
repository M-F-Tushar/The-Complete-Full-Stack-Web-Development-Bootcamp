
const prompt = require("prompt-sync")();

var tweet = prompt("Enter your tweet: ");

var tweetUnder140 = tweet.slice(0, 140);

console.log(tweetUnder140);

// All in one line
console.log(prompt("Enter your tweet: ").slice(0, 140));
