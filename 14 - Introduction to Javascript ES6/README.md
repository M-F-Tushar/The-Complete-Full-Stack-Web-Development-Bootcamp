# Complete JavaScript Learning Guide

## Table of Contents
1. [Introduction to JavaScript](#1-introduction-to-javascript)
2. [JavaScript Alerts - Adding Behavior to Websites](#2-javascript-alerts---adding-behavior-to-websites)
3. [Data Types](#3-data-types)
4. [JavaScript Variables](#4-javascript-variables)
5. [Variable Naming Conventions](#5-variable-naming-conventions)
6. [String Concatenation](#6-string-concatenation)
7. [String Lengths and Character Retrieval](#7-string-lengths-and-character-retrieval)

---

## 1. Introduction to JavaScript

### What is JavaScript?
JavaScript is **the language that powers the web**. It's a programming language that enables dynamic, interactive websites with animations and real-time user interaction.

### Historical Background

#### The Browser Wars Era
- **Before JavaScript**: HTML websites were "all form and no function"
- **Netscape Navigator**: Dominated the 90s with over 80% market share
- **The Problem**: When websites needed functionality (data retrieval, calculations), they had to send requests to servers
- **The Vision**: Netscape wanted dynamic web pages that could run code directly in the browser

#### Birth of JavaScript
- **Creator**: Brendan Eich
- **Timeline**: Created in just **10 days** in 1995
- **Original Name**: LiveScript (later renamed to JavaScript for marketing reasons)
- **Microsoft's Response**: JScript (reverse-engineered version)

#### Standardization
- **ECMAScript**: European Computer Manufacturers Association Script
- **Why Important**: You'll see versions like ES6, ES7 (not JS6, JS7)
- **Purpose**: Standardized the language across different browsers

### JavaScript vs Java
**Key Difference**: "Java and JavaScript have about as much in common as car and carpet"

| JavaScript | Java |
|------------|------|
| Interpreted language | Compiled language |
| Runs in browser | Runs on various platforms |
| Dynamic typing | Static typing |
| Named for marketing reasons | Different language entirely |

### Compiled vs Interpreted Languages

#### Interpreted Languages (JavaScript)
- Code is executed line by line
- No compilation step needed
- Historically seen as "toy languages" (slow, less powerful)
- Modern JavaScript has changed this perception

#### Compiled Languages (Java, C++)
- Code is compiled into machine code first
- Generally faster execution
- Traditionally seen as "serious" languages

### Why Learn JavaScript?

#### Universal Browser Support
- **Only language** natively supported by all major browsers
- Other languages can compile to JavaScript, but JavaScript remains the core

#### Versatility
- **Frontend**: User interfaces, animations, interactions
- **Backend**: Server-side development (Node.js)
- **Mobile**: React Native, Ionic
- **Desktop**: Electron apps

#### Popularity
According to RedMonk (2018 data), JavaScript was the most popular programming language, closely followed by Java.

### JavaScript Without JavaScript
**Demonstration**: When you disable JavaScript in Chrome:
- **Twitter**: Falls back to mobile version, missing character counters
- **YouTube/Netflix**: Won't load at all
- **New York Times**: Ads won't load (ad-free experience)
- **General Web**: Most modern functionality breaks

### What is "Script" in JavaScript?
Think of a theater script that tells actors what to do:

**Theater Script Example**:
```
1. Gwyneth appears on stage for 1 second
2. Brad appears
3. Gwyneth says "Hello"
4. After 1 second delay, Brad says "Hello"
```

**Web Development Script Example**:
```javascript
1. Unhide h1 element
2. After 1-second delay, unhide paragraph element
3. h1 changes text to "Hello"
4. Paragraph changes text to "World"
```

The script tells HTML elements (the "actors") what to do and when to do it.

---

## 2. JavaScript Alerts - Adding Behavior to Websites

### Getting Started with Chrome Developer Tools

#### Accessing JavaScript Console
1. Open Chrome
2. Go to **View** → **Developer** → **JavaScript Console**
3. Alternative: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)

### Your First JavaScript Code

#### Basic Alert Syntax
```javascript
alert("Hello");
```

**Breakdown**:
- `alert` - keyword (function)
- `()` - parentheses contain the message
- `"Hello"` - string (message to display)
- `;` - semicolon ends the statement

#### Multi-line Code in Console
**Problem**: Pressing Enter executes immediately
**Solution**: Hold `Shift + Enter` to go to next line

```javascript
alert("Hello");
alert("World");
```

### Chrome Snippets - Better JavaScript Editor

#### Accessing Snippets
1. Go to **Sources** tab in Developer Tools
2. Click arrow on left side
3. Select **Snippets**
4. Click **+ New snippet**
5. Name it `index.js`

#### Advantages of Snippets
- Write multi-line code easily
- Execute entire script at once
- Save code for later use
- Better than console for complex scripts

#### Running Snippets
Click the **Run** button (bottom right) or press `Ctrl+Enter`

### Understanding JavaScript Functions

#### What is a Function?
A function is a piece of functionality that makes the browser do something.

```javascript
alert("This is a function call");
```

#### Function Anatomy
```javascript
alert("Hello World");
```

- **`alert`** - Function name (keyword)
- **`"`** - Quotation marks define a string
- **`Hello World`** - The message (string)
- **`"`** - Closing quotation marks
- **`(`** - Opening parenthesis
- **`)`** - Closing parenthesis  
- **`;`** - Semicolon (end of statement)

### Programming Grammar and Syntax

#### Why Special Characters?
Just like English has grammar rules, programming languages have syntax rules:

**English**: say: "hello"
**JavaScript**: `alert("hello");`

#### Important Syntax Rules

##### Quotation Marks
- **Programming**: `"` (same symbol for opening and closing)
- **Word Processors**: `"` and `"` (different symbols)
- **Rule**: Always use programming quotes, not stylistic quotes

##### Spacing Best Practices
```javascript
// Good (no unnecessary spaces)
alert("Hello");

// Acceptable but not preferred
alert( "Hello" );
```

##### Single vs Double Quotes
```javascript
// Both work, but double quotes are JavaScript convention
alert("Hello");  // Preferred
alert('Hello');  // Also valid
```

### Error Handling

#### Common Error Example
```javascript
say("Hello");  // This will cause an error
```

**Error Message**: `Uncaught ReferenceError: say is not defined`

**Translation**: "I don't know what 'say' means. Use a valid keyword."

### Finding JavaScript Documentation

#### MDN Web Docs
- Go to **developer.mozilla.org**
- Select **JavaScript** technology
- Search for functions like `alert`
- Example: `Window.alert()` documentation

#### Key Information in Documentation
- **Syntax**: How to write the function
- **Parameters**: What you can put inside parentheses
- **Examples**: Sample code
- **Browser Support**: Which browsers support it

### Style Guidelines

#### JavaScript Style Guide Reference
**Resource**: GitHub repository for JavaScript style guidelines
**Key Principle**: "All code should look like a single person typed it"

#### Style Conventions Covered
1. **No spaces** between function name and parentheses
2. **Double quotes** for strings
3. **Consistent indentation**
4. **Semicolons** to end statements

---

## 3. Data Types

### What are Data Types?
Data types classify data to tell the computer how the program intends to use that data.

### The Three Primitive Data Types

#### 1. Strings
**Definition**: Text that's not meant to be interpreted as code

```javascript
"Hello World"    // String
"123"           // This is a string, not a number
"true"          // This is a string, not a boolean
```

**Key Features**:
- Enclosed in quotation marks
- Can contain any characters
- Called "string" because it's a string of characters (like string of pearls)

#### 2. Numbers
**Definition**: Numeric values for mathematical operations

```javascript
123        // Number
45.67      // Number (decimal)
-789       // Number (negative)
```

**Key Features**:
- No quotation marks needed
- Can be positive, negative, integers, or decimals
- Used for calculations

#### 3. Booleans
**Definition**: Data that is either true or false

```javascript
true       // Boolean
false      // Boolean
```

**Key Features**:
- Only two possible values: `true` or `false`
- No quotation marks
- Used for decision-making in programs

### Testing Data Types

#### Using typeof() Function
```javascript
typeof(23)        // Returns: "number"
typeof("Angela")  // Returns: "string"  
typeof(true)      // Returns: "boolean"
```

### Practical Examples in Console

#### Testing Different Data Types
```javascript
// Numbers
2 + 3                    // Result: 5
typeof(23)               // Result: "number"

// Strings  
typeof("my name")        // Result: "string"

// Booleans
typeof(true)             // Result: "boolean"

// Using in alerts
alert(2 + 3);           // Shows: 5
alert(typeof(123));     // Shows: "number"
```

### Why Data Types Matter
Understanding data types is a foundation for:
- Building websites and web applications
- Making programs behave correctly
- Avoiding common programming errors
- Working with user input and data processing

---

## 4. JavaScript Variables

### What are Variables?
Variables are containers that store data values. They allow us to:
- Save information in computer memory
- Refer to data without repeating it
- Change data values when needed

### Real-World Analogy
Think of variables like labeled storage boxes:
- The **box** is the variable
- The **label** is the variable name  
- The **contents** are the data stored inside

### Basic Variable Syntax

#### Creating a Variable
```javascript
var myName = "Angela";
```

**Breakdown**:
- `var` - keyword that creates a new variable
- `myName` - the name we give to the variable
- `=` - assignment operator
- `"Angela"` - the value we store in the variable
- `;` - semicolon ends the statement

#### Using Variables
```javascript
var myName = "Angela";
alert(myName);  // Shows: "Angela"
```

### The prompt() Function

#### Getting User Input
```javascript
prompt("What is your name?");
```

This creates a popup where users can type input, but the data is lost unless we store it.

#### Storing User Input in Variables
```javascript
var yourName = prompt("What is your name?");
```

Now the user's input is saved in the `yourName` variable.

### Variable Operations

#### Changing Variable Values
```javascript
var myName = "Angela";      // Create and assign
myName = "Jack Bauer";      // Change the value (no 'var' needed)
```

**Important**: Use `var` only when **creating** a variable, not when changing it.

#### Combining Variables with Strings
```javascript
var myName = "Angela";
var yourName = prompt("What is your name?");

alert("My name is " + myName + ", welcome to my course " + yourName + "!");
```

**Result**: "My name is Angela, welcome to my course Jack Bauer!"

### Practical Examples

#### Example 1: Basic Variable Storage
```javascript
var gameLevel = 1;
alert("Your level is currently: " + gameLevel);
// Shows: "Your level is currently: 1"

gameLevel = 2;  // Level up!
alert("Your level is currently: " + gameLevel);
// Shows: "Your level is currently: 2"
```

#### Example 2: Interactive Greeting
```javascript
var myName = "Angela";
var yourName = prompt("What is your name?");
alert("Hello " + yourName + ", my name is " + myName + "!");
```

### The Variable Switching Challenge

#### Problem Statement
**Goal**: Switch the values in two variables
**Given**:
```javascript
var a = 3;
var b = 8;
```

**Desired Result**:
- `a` should equal 8
- `b` should equal 3

#### Rules
1. Cannot change existing code
2. Cannot type any numbers directly
3. Cannot re-declare variables
4. Must use logic, not hardcoding

#### Solution Approach: The Bucket Method
Think of real-world buckets:
- Bucket A contains sand
- Bucket B contains water  
- How do you switch their contents?
- **Answer**: Use a third bucket!

#### Code Solution
```javascript
var a = 3;
var b = 8;

// Solution (3 lines):
var c = a;    // Store a's value in c
a = b;        // Put b's value into a  
b = c;        // Put original a's value (from c) into b

// Result: a = 8, b = 3
```

#### Why This Works
1. **Line 1**: `c` now holds 3 (original value of `a`)
2. **Line 2**: `a` now holds 8 (value from `b`)  
3. **Line 3**: `b` now holds 3 (original value of `a` from `c`)

### Variable Memory Concepts

#### How Variables Work in Memory
1. **Creation**: `var myName = "Angela"`
   - Computer creates a box labeled `myName`
   - Puts "Angela" inside the box
   
2. **Access**: `alert(myName)`
   - Computer finds box labeled `myName`
   - Reads the contents ("Angela")
   - Uses that value

3. **Modification**: `myName = "Jack"`
   - Computer finds existing box `myName`
   - Removes old contents
   - Puts new value inside

---

## 5. Variable Naming Conventions

### Why Naming Matters
Good variable names make code:
- **Readable** - Others can understand your code
- **Maintainable** - Easy to modify later
- **Professional** - Follows industry standards

### Bad Naming Example
```javascript
var kjhdskjfhdsf = "Angela";  // Terrible name!
```

Problems:
- No one knows what this represents
- Hard to remember
- Impossible to maintain

### JavaScript Naming Rules

#### 1. Cannot Use Reserved Keywords
```javascript
// WRONG - 'var' is a keyword
var var = "Angela";  // Error!

// RIGHT - Can contain keywords  
var myVar = "Angela";  // OK
```

#### 2. Cannot Start with Numbers
```javascript
// WRONG
var 123name = "Angela";  // Error!

// RIGHT  
var name123 = "Angela";  // OK
```

#### 3. Cannot Contain Spaces
```javascript
// WRONG
var my name = "Angela";  // Error!

// RIGHT - Use underscore or camelCase
var my_name = "Angela";   // OK
var myName = "Angela";    // Better (camelCase)
```

#### 4. Valid Characters Only
**Allowed**: Letters, numbers, underscore (_), dollar sign ($)
**Not Allowed**: Hyphens, spaces, special characters

```javascript
// WRONG
var my-name = "Angela";   // Error! (hyphen)
var my@name = "Angela";   // Error! (@ symbol)

// RIGHT
var my_name = "Angela";   // OK (underscore)
var my$name = "Angela";   // OK (dollar sign)
var myName = "Angela";    // Best (camelCase)
```

### Best Practices

#### 1. Use Meaningful Names
```javascript
// Bad
var x = "Angela";
var a = 25;

// Good  
var firstName = "Angela";
var userAge = 25;
```

#### 2. Use camelCase Convention
```javascript
// JavaScript standard
var firstName = "Angela";
var userAge = 25;
var gameLevel = 1;
var isGameOver = false;
```

**camelCase Rules**:
- First word lowercase
- Each subsequent word capitalized
- No spaces or underscores

#### 3. Avoid Ambiguous Names
```javascript
// Confusing - could be misread
var therapistFinder = "website";  // Could read as "the rapist finder"

// Better
var therapyWebsite = "website";
var therapistDirectory = "website";
```

### Console Clearing

#### Clear Console Display
- **Mac**: `Cmd + K`
- **Windows**: `Ctrl + K`

**Note**: This only clears the display, not the stored data.

#### Clear All Data (Hard Reset)
1. **Mac**: Click and hold reload button → "Empty Cache and Hard Reload"
2. **Windows**: Right-click reload button → "Empty Cache and Hard Reload"

This clears all variables from memory.

### Variable Naming Examples

#### Good Examples
```javascript
var userName = "John";
var totalScore = 100;
var isGameActive = true;
var playerLevel = 5;
var highScore = 999;
```

#### Poor Examples  
```javascript
var n = "John";           // Too short, unclear
var user_name = "John";   // Underscore (not JavaScript style)
var USERNAME = "John";    // All caps (not JavaScript style)
var username = "John";    // No camelCase for multi-word
```

---

## 6. String Concatenation

### What is String Concatenation?
String concatenation is combining multiple strings into a single string using the `+` operator.

### Basic Concatenation

#### Simple Example
```javascript
"a" + "b"           // Result: "ab"
"Hello" + "World"   // Result: "HelloWorld"
```

#### Adding Spaces
```javascript
"Hello" + " " + "World"    // Result: "Hello World"
"Hello" + " World"         // Result: "Hello World"
```

### Concatenation with Variables

#### Basic Variable Concatenation
```javascript
var message = "Hello";
var name = "John";

// Concatenate variables
alert(message + name);     // Result: "HelloJohn"

// Add spaces between
alert(message + " " + name);    // Result: "Hello John"
```

### Practical Challenge: Greeting Message

#### Challenge Requirements
Create a greeting message using:
1. A variable called `message` with value "Hello"
2. A variable called `name` (set to your name or user input)
3. Combine them in an alert to display a greeting

#### Solution Method 1: Hardcoded Name
```javascript
var message = "Hello";
var name = "Angela";

alert(message + " there " + name);
// Result: "Hello there Angela"
```

#### Solution Method 2: User Input
```javascript
var message = "Hello";
var name = prompt("What is your name?");

alert(message + " there " + name);
// Result: "Hello there [user's name]"
```

#### Solution Method 3: Multiple Spaces
```javascript
var message = "Hello";
var name = "Angela";

alert(message + " " + " " + name);  // Multiple space strings
// Or more readably:
alert(message + "  " + name);       // Single string with two spaces
```

### Advanced Concatenation Examples

#### Building Complex Messages
```javascript
var firstName = "John";
var lastName = "Smith";
var age = 25;

var fullMessage = "Hello, my name is " + firstName + " " + lastName + 
                 " and I am " + age + " years old.";

alert(fullMessage);
// Result: "Hello, my name is John Smith and I am 25 years old."
```

#### Concatenation with Numbers
```javascript
var score = 100;
var level = 5;

alert("Your score is " + score + " at level " + level);
// Result: "Your score is 100 at level 5"
```

### Important Concatenation Rules

#### 1. Only Parts in Quotes are Combined
```javascript
"hello" + " " + "world"  // Only quoted parts combine
// Result: "hello world"
```

#### 2. Variables Don't Need Quotes
```javascript
var word1 = "Hello";
var word2 = "World";

alert(word1 + " " + word2);  // Variables without quotes
// Result: "Hello World"
```

#### 3. Mix Variables and Strings
```javascript
var name = "Angela";
alert("Hi " + name + ", welcome!");  // Mix of strings and variables
// Result: "Hi Angela, welcome!"
```

### Common Concatenation Patterns

#### Pattern 1: Greeting with User Input
```javascript
var userName = prompt("Enter your name:");
alert("Welcome " + userName + "!");
```

#### Pattern 2: Status Messages
```javascript
var level = 3;
var score = 150;
alert("Level: " + level + ", Score: " + score);
```

#### Pattern 3: Form Responses
```javascript
var firstName = prompt("First name:");
var lastName = prompt("Last name:");
alert("Hello " + firstName + " " + lastName + ", nice to meet you!");
```

---

## 7. String Lengths and Character Retrieval

### The .length Property
Every string in JavaScript has a `.length` property that tells you how many characters it contains.

### Basic Length Syntax
```javascript
"Hello".length        // Result: 5
"Angela".length       // Result: 6
"".length            // Result: 0 (empty string)
```

### Using .length with Variables
```javascript
var name = "Angela";
var nameLength = name.length;
alert(nameLength);    // Shows: 6

// Or directly:
alert(name.length);   // Shows: 6
```

### Practical Example: Twitter Character Counter

#### The Twitter Challenge
**Background**: Twitter originally limited tweets to 140 characters (now 280).

**Goal**: Create a character counter that tells users:
1. How many characters they've written
2. How many characters they have remaining

#### Expected Output Format
```
"You have written 182 characters, you have -42 characters remaining."
```

### Challenge Solution: Step by Step

#### Step 1: Get User Input
```javascript
var tweet = prompt("Compose your tweet:");
```

#### Step 2: Count Characters
```javascript
var tweetCount = tweet.length;
```

#### Step 3: Calculate Remaining Characters
```javascript
var remaining = 140 - tweetCount;
```

#### Step 4: Create Output Message
```javascript
alert("You have written " + tweetCount + " characters, you have " + remaining + " characters remaining.");
```

### Complete Twitter Counter Solution

#### Full Code
```javascript
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");
```

#### Alternative Compact Version
```javascript
var tweet = prompt("Compose your tweet:");

alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");
```

### Understanding the Math
```javascript
// If tweet has 187 characters:
140 - 187 = -47    // Negative means over the limit

// If tweet has 50 characters:  
140 - 50 = 90      // Positive means characters remaining
```

### Code Comments

#### Single Line Comments
```javascript
// This is a single line comment
var name = "Angela";  // Comment at end of line
```

#### Multi-line Comments
```javascript
/*
This is a multi-line comment
It can span several lines
Everything between /* and */ is ignored
*/
var name = "Angela";
```

#### Commenting Out Code
```javascript
// alert("This won't run");     // Commented out
alert("This will run");         // Active code
```

### Common Errors and Solutions

#### Error: "Cannot read property 'length' of null"
**Cause**: User navigated away from tab or cancelled prompt
**What happens**: Variable becomes `null`, which has no `.length` property

```javascript
// This can cause the error:
var tweet = prompt("Enter tweet:");  // User cancels or navigates away
var count = tweet.length;           // Error! tweet is null
```

**Solution**: Always ensure user provides input before using `.length`

### Length Property Examples

#### Different String Lengths
```javascript
"A".length                    // 1
"Hello".length               // 5  
"Hello World!".length        // 12
"".length                    // 0 (empty string)
"   ".length                 // 3 (spaces count as characters)
```

#### Length with Special Characters
```javascript
"Hello\nWorld".length        // 11 (\n is one character)
"café".length                // 4
"🙂".length                  // 2 (emoji can be 2 characters)
```

### Building on String Length

#### Character Validation
```javascript
var password = prompt("Enter password:");
if (password.length < 8) {
    alert("Password too short! Must be at least 8 characters.");
} else {
    alert("Password length: " + password.length + " characters. Good!");
}
```

#### Input Limits
```javascript
var comment = prompt("Enter comment (max 500 characters):");
if (comment.length > 500) {
    alert("Comment too long! You used " + comment.length + " characters.");
} else {
    alert("Comment accepted. Length: " + comment.length + " characters.");
}
```

---

## Summary and Next Steps

### Key Concepts Mastered
1. **JavaScript Fundamentals**: History, purpose, and place in web development
2. **Alerts and User Interaction**: Creating popups and getting user input
3. **Data Types**: Strings, numbers, and booleans
4. **Variables**: Creating, naming, and manipulating data containers
5. **String Operations**: Concatenation and length measurement

### Skills Developed
- Using Chrome Developer Tools
- Writing and running JavaScript code
- Creating interactive web elements
- Following programming best practices
- Debugging common errors

### Programming Concepts Learned
- **Syntax and Grammar**: Understanding JavaScript language rules
- **Functions**: Using built-in functions like `alert()` and `prompt()`
- **Variables**: Data storage and manipulation
- **String Manipulation**: Combining and measuring text
- **User Input/Output**: Interactive programming basics

### Best Practices Established
- Meaningful variable names using camelCase
- Proper code formatting and style
- Error handling awareness
- Documentation through comments
- Testing code in browser environment

### Foundation for Advanced Topics
This foundation prepares you for:
- Conditional statements (if/else)
- Loops and iteration
- Functions and methods
- DOM manipulation
- Event handling
- Modern JavaScript frameworks

The concepts learned here form the building blocks for all future JavaScript development, from simple scripts to complex web applications.
# Complete JavaScript Guide: Strings, Numbers, and Functions

## Table of Contents
1. [String Manipulation](#1-string-manipulation)
2. [Basic Arithmetic and Operators](#2-basic-arithmetic-and-operators)
3. [Functions in JavaScript](#3-functions-in-javascript)
4. [Practical Challenges and Solutions](#4-practical-challenges-and-solutions)

---

## 1. String Manipulation

### 1.1 Slicing and Extracting Parts of Strings

#### The `.slice()` Method

The slice method allows you to extract specific portions of a string by specifying start and end positions.

**Syntax:**
```javascript
string.slice(startPosition, endPosition)
```

**Key Points:**
- Programmers always count from 0 (zero-indexing)
- The end position is NOT included in the result
- Characters are extracted from startPosition up to (but not including) endPosition

#### Examples:

**Basic Slicing:**
```javascript
var name = "Angela";

// Get first character (position 0 to 1, excluding 1)
name.slice(0, 1);  // Result: "A"

// Get last character (position 5 to 6, excluding 6)
name.slice(5, 6);  // Result: "a"

// Get first three characters
name.slice(0, 3);  // Result: "Ang"

// Get middle characters
name.slice(1, 5);  // Result: "ngel"
```

**Position Reference for "Angela":**
```
A n g e l a
0 1 2 3 4 5
```

**Quick Calculation Tip:**
To determine how many characters you'll get: `endPosition - startPosition`
- `slice(0, 3)` → `3 - 0 = 3` characters
- `slice(1, 5)` → `5 - 1 = 4` characters

#### Practical Application: Twitter Character Counter

**Challenge:** Create a function that limits tweets to 140 characters.

**Solution:**
```javascript
// Get user input
var tweet = prompt("Enter your tweet:");

// Create variable for limited tweet
var tweetUnder140 = tweet.slice(0, 140);

// Display the result
alert(tweetUnder140);
```

**Condensed Version:**
```javascript
// All in one line
alert(prompt("Enter your tweet:").slice(0, 140));
```

### 1.2 Changing String Case

#### Case Conversion Methods

JavaScript provides built-in methods to change the case of strings:

**`.toUpperCase()` Method:**
```javascript
var name = "Angela";
name.toUpperCase(); // Result: "ANGELA"

// To save the change permanently:
name = name.toUpperCase();
console.log(name); // Outputs: "ANGELA"
```

**`.toLowerCase()` Method:**
```javascript
var name = "ANGELA";
name.toLowerCase(); // Result: "angela"

// To save the change permanently:
name = name.toLowerCase();
console.log(name); // Outputs: "angela"
```

#### Advanced Challenge: Name Capitalization

**Problem:** Create a function that capitalizes only the first letter of a name, regardless of how the user enters it.

**Breaking Down the Problem:**
1. Get the user's name via prompt
2. Isolate the first character
3. Convert the first character to uppercase
4. Isolate the rest of the name
5. Convert the rest to lowercase (to handle mixed case input)
6. Concatenate the capitalized first character with the lowercase rest

**Step-by-Step Solution:**

```javascript
// Step 1: Get user input
var name = prompt("What is your name?");

// Step 2: Isolate first character
var firstChar = name.slice(0, 1);

// Step 3: Convert first character to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// Step 4: Isolate rest of name
var restOfName = name.slice(1, name.length);

// Step 5: Convert rest to lowercase (handles mixed case input)
restOfName = restOfName.toLowerCase();

// Step 6: Concatenate parts
var capitalisedName = upperCaseFirstChar + restOfName;

// Step 7: Greet the user
alert("Hello, " + capitalisedName);
```

**Key Concepts Demonstrated:**
- **String slicing** for character extraction
- **Case conversion** for formatting
- **String concatenation** for combining parts
- **Dynamic length calculation** using `.length` property
- **Problem decomposition** - breaking complex problems into smaller steps

---

## 2. Basic Arithmetic and Operators

### 2.1 Basic Mathematical Operations

JavaScript supports standard mathematical operations:

```javascript
// Addition
var sum = 5 + 3;        // Result: 8

// Subtraction
var difference = 10 - 4; // Result: 6

// Multiplication
var product = 6 * 7;     // Result: 42

// Division
var quotient = 15 / 3;   // Result: 5
```

### 2.2 The Modulo Operator (%)

The modulo operator returns the remainder of a division operation.

**Examples:**
```javascript
9 % 6    // Result: 3 (6 goes into 9 once, remainder 3)
6 % 4    // Result: 2 (4 goes into 6 once, remainder 2)
12 % 8   // Result: 4 (8 goes into 12 once, remainder 4)
45 % 2   // Result: 1 (45 is odd, so remainder is 1)
44 % 2   // Result: 0 (44 is even, so remainder is 0)
```

**Practical Use - Odd/Even Detection:**
```javascript
var number = 45;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```

### 2.3 Order of Operations (Precedence)

JavaScript follows mathematical precedence rules:

**Example:**
```javascript
var cost = 3 + 5 * 2;  // Result: 13 (not 16)
// Multiplication happens first: 5 * 2 = 10, then 3 + 10 = 13
```

**Using Parentheses for Clarity:**
```javascript
var cost1 = 3 + (5 * 2);   // Result: 13 (explicit order)
var cost2 = (3 + 5) * 2;   // Result: 16 (forces addition first)
```

### 2.4 Practical Challenge: Dog Age Calculator

**Problem:** Convert dog years to human years using the formula:
`Human Age = (Dog Age - 2) × 4 + 21`

**Solution:**
```javascript
// Get dog's age from user
var dogAge = prompt("How old is your dog?");

// Calculate human equivalent using proper precedence
var humanAge = (dogAge - 2) * 4 + 21;

// Display result
alert("Your dog is " + humanAge + " years old in human years.");
```

**Example Calculation:**
- Dog is 7 years old
- Human age = (7 - 2) × 4 + 21 = 5 × 4 + 21 = 20 + 21 = 41

### 2.5 Increment and Decrement Operations

#### Shorthand Operators

**Increment/Decrement by 1:**
```javascript
var x = 5;

// Traditional way
x = x + 1;  // x becomes 6

// Shorthand way
x++;        // x becomes 6 (increment)
x--;        // x becomes 4 (decrement)
```

**Increment/Decrement by Other Values:**
```javascript
var x = 5;

// Add more than 1
x += 2;     // Equivalent to: x = x + 2 (x becomes 7)
x += y;     // Equivalent to: x = x + y

// Subtract more than 1
x -= 3;     // Equivalent to: x = x - 3

// Multiply
x *= 2;     // Equivalent to: x = x * 2

// Divide
x /= 4;     // Equivalent to: x = x / 4
```

---

## 3. Functions in JavaScript

### 3.1 Introduction to Functions

Functions are reusable blocks of code that perform specific tasks. Think of them as packages of instructions that you can call whenever needed.

**Real-world Analogy:**
Imagine a house robot named Angela. Instead of writing detailed instructions every time you want milk:
```javascript
alert("leaveHouse");
alert("moveRight");
alert("moveRight");
alert("moveUp");
alert("moveUp");
alert("moveUp");
alert("moveUp");
alert("moveRight");
alert("moveRight");
alert("buyMilk");
// ... return instructions
```

You can package all these instructions into a single function called `getMilk()`.

### 3.2 Basic Functions (No Parameters)

#### Function Structure:
```javascript
function functionName() {
    // Instructions go here
}
```

#### Creating a Basic Function:
```javascript
function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}
```

#### Calling a Function:
```javascript
getMilk(); // Executes all instructions inside the function
```

**Key Distinctions:**
- **Creating a function:** Uses `function` keyword, has curly braces `{}`
- **Calling a function:** Uses only the function name with parentheses `()`

### 3.3 Karel the Robot Exercise

Karel is a programming learning tool where you control a simple robot with basic commands.

**Available Commands:**
- `move()` - Move forward one space
- `turnLeft()` - Turn 90 degrees left
- `putBeeper()` - Place a marker
- `pickBeeper()` - Pick up a marker

#### Challenge 1: Move to Corner
**Goal:** Get Karel from bottom-left to top-right corner of a 5×5 grid.

**Solution:**
```javascript
function main() {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
}
```

**Optimized Solution Using Functions:**
```javascript
function moveFourTimes() {
    move();
    move();
    move();
    move();
}

function main() {
    moveFourTimes();
    turnLeft();
    moveFourTimes();
}
```

#### Challenge 2: Diagonal Line
**Goal:** Place beepers diagonally from bottom-left to top-right.

**Solution:**
```javascript
function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight(); // Note: turnRight() might need to be implemented as turnLeft() three times
}

function main() {
    putBeeper(); // First beeper at starting position
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
}
```

### 3.4 Functions with Parameters (Input)

Parameters allow functions to accept input values, making them more flexible and reusable.

#### Syntax:
```javascript
function functionName(parameter1, parameter2) {
    // Use parameters inside function
}
```

#### Example: getMilk with Bottles Parameter
```javascript
function getMilk(bottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of milk");
    // ... return instructions
}

// Calling the function with different inputs
getMilk(2);  // Buys 2 bottles
getMilk(12); // Buys 12 bottles
```

#### Challenge: Money-Based Milk Buying
**Goal:** Calculate how many bottles can be bought with given money.

**Solution:**
```javascript
function getMilk(money) {
    var costPerBottle = 1.5;
    var numberOfBottles = Math.floor(money / costPerBottle);
    
    console.log("leaveHouse");
    // ... movement instructions
    console.log("buy " + numberOfBottles + " bottles of milk");
    // ... return instructions
}

getMilk(5); // With $5, can buy 3 bottles (Math.floor(5/1.5) = 3)
```

**Key Concept: `Math.floor()`**
- Rounds numbers DOWN to the nearest integer
- `Math.floor(3.99)` = 3
- `Math.floor(3.01)` = 3
- Used here because you can't buy partial bottles

### 3.5 Functions with Return Values (Output)

Return values allow functions to send data back to the caller, enabling more complex interactions.

#### Syntax:
```javascript
function functionName(parameters) {
    // calculations
    return someValue;
}

var result = functionName(input);
```

#### Example: getMilk with Change Calculation
```javascript
function getMilk(money) {
    var costPerBottle = 1.5;
    var numberOfBottles = Math.floor(money / costPerBottle);
    var change = money % costPerBottle;
    
    console.log("leaveHouse");
    // ... movement instructions
    console.log("buy " + numberOfBottles + " bottles of milk");
    // ... return instructions
    
    return change; // Return the change
}

var change = getMilk(4); // Returns 1 (4 % 1.5 = 1)
console.log("Hello master, here is your $" + change + " change.");
```

#### Advanced Example: Modular Functions
```javascript
// Function to calculate bottles from money
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

// Function to calculate change
function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

// Main function using other functions
function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    // ... movement instructions
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    // ... return instructions
    
    return calcChange(money, costPerBottle);
}

// Usage
var change = getMilk(10, 3);
console.log("Hello master, here is your $" + change + " change.");
```

---

## 4. Practical Challenges and Solutions

### 4.1 Life in Weeks Calculator

**Problem:** Calculate remaining days, weeks, and months if you live to 90.

**Assumptions:**
- 365 days per year
- 52 weeks per year  
- 12 months per year

**Solution:**
```javascript
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    
    console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left.");
}

lifeInWeeks(12); // Example: if you're 12 years old
```

### 4.2 BMI Calculator Challenge

**Problem:** Create a Body Mass Index calculator.

**Formula:** `BMI = weight (kg) / height² (m)`

#### Basic Solution:
```javascript
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi); // Outputs: 20.061728395061728
```

#### Enhanced Solution with Math Functions:
```javascript
function bmiCalculator(weight, height) {
    // Method 1: Using multiplication
    var bmi = weight / (height * height);
    
    // Method 2: Using Math.pow() for squaring
    // var bmi = weight / Math.pow(height, 2);
    
    return Math.round(bmi); // Round to nearest whole number
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi); // Outputs: 20
```

**Mathematical Functions Used:**
- `Math.pow(base, exponent)` - Raises base to the power of exponent
- `Math.round(number)` - Rounds to nearest integer
- `Math.floor(number)` - Rounds down to integer

#### Complete Example:
```javascript
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

// Test the function
var myBMI = bmiCalculator(65, 1.8);
console.log("Your BMI is: " + myBMI);
```

### 4.3 Key Programming Concepts Demonstrated

Throughout these exercises, several crucial programming concepts are reinforced:

1. **Problem Decomposition:** Breaking complex problems into smaller, manageable parts
2. **DRY Principle:** "Don't Repeat Yourself" - using functions to avoid code repetition
3. **Parameter Passing:** Using inputs to make functions flexible and reusable
4. **Return Values:** Getting data back from functions for further use
5. **Mathematical Operations:** Using JavaScript's built-in Math functions
6. **String Manipulation:** Slicing, concatenation, and case conversion
7. **Variable Scope:** Understanding where variables can be accessed
8. **Function Naming:** Using descriptive, camelCase names for functions and variables

### 4.4 Best Practices Summary

1. **Function Naming:** Use descriptive, camelCase names (`getMilk`, `calculateBMI`)
2. **Parameter Order:** Be consistent and logical (weight before height)
3. **Code Organization:** Group related functionality into functions
4. **Error Prevention:** Use `Math.floor()` for whole number requirements
5. **Code Readability:** Use parentheses to clarify operation order
6. **Testing:** Always test functions with sample inputs
7. **Documentation:** Use clear variable names and comments when necessary

This comprehensive guide covers all the essential JavaScript concepts from the provided materials, with detailed explanations, examples, and practical applications to ensure thorough understanding.
