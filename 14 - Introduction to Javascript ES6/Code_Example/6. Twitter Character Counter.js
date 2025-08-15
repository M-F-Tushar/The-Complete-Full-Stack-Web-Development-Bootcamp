const prompt = require('prompt-sync')();

var tweet = prompt('Compose your tweet: ');

var tweetCount = tweet.length;

var remaining = 140 - tweetCount;

console.log("You have written " + tweetCount + " characters, you have " + remaining + " characters remaining");