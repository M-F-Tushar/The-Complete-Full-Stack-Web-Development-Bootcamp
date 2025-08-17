# Complete JavaScript Drum Kit Tutorial
*Building Interactive Web Applications with the DOM*

## Table of Contents
1. [Project Overview](#project-overview)
2. [Setting Up Event Listeners](#setting-up-event-listeners)
3. [Higher Order Functions and Callbacks](#higher-order-functions-and-callbacks)
4. [Playing Sounds with JavaScript](#playing-sounds-with-javascript)
5. [Switch Statements](#switch-statements)
6. [JavaScript Objects Deep Dive](#javascript-objects-deep-dive)
7. [Keyboard Event Listeners](#keyboard-event-listeners)
8. [Understanding Callbacks and Event Handling](#understanding-callbacks-and-event-handling)
9. [Adding Animations](#adding-animations)

---

## Project Overview

### What We're Building
A fully interactive drum kit website where users can:
- Click buttons to play drum sounds
- Use keyboard keys to trigger sounds
- See visual feedback when buttons are pressed
- Experience realistic drum kit functionality

### Key Learning Objectives
- Understanding the Document Object Model (DOM)
- Adding event listeners to HTML elements
- Working with JavaScript objects and methods
- Implementing keyboard event detection
- Creating animations and visual effects
- Using higher-order functions and callbacks

---

## Setting Up Event Listeners

### Initial Setup
First, ensure your project structure includes:
- `index.html` - Main HTML file
- `index.js` - JavaScript file
- `styles.css` - CSS stylesheet
- `sounds/` folder with drum sound files

#### Linking JavaScript to HTML
```html
<!-- Place this just before closing </body> tag -->
<script src="index.js"></script>
```

Always test the connection with a simple alert:
```javascript
alert("JavaScript connected!");
```

### Understanding Event Listeners

#### What is an Event Listener?
An event listener is like giving someone instructions to wait for a specific event and then perform an action. Think of it like asking your dad to pick you up from a party - you're adding an "event listener" to your dad that waits for your message.

#### Basic Event Listener Syntax
```javascript
element.addEventListener(eventType, functionToCall);
```

#### Adding Event Listener to a Single Button
```javascript
// Select the first button
document.querySelector("button").addEventListener("click", handleClick);

// Function to handle the click
function handleClick() {
    alert("I got clicked!");
}
```

### Important Concept: Function References vs Function Calls

**Wrong Way (Function gets called immediately):**
```javascript
document.querySelector("button").addEventListener("click", handleClick());
//                                                                    ↑
//                                                              Parentheses cause immediate execution
```

**Right Way (Function reference passed for later execution):**
```javascript
document.querySelector("button").addEventListener("click", handleClick);
//                                                                  ↑
//                                                            No parentheses = function reference
```

### Anonymous Functions Alternative
Instead of named functions, you can use anonymous functions:
```javascript
document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked!");
});
```

### Challenge Exercise: Adding Event Listeners to All Buttons

**Problem:** We need to add event listeners to all 7 drum buttons, not just the first one.

**Solution Using Loops:**
```javascript
// Get all buttons with class 'drum'
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through all buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked!");
    });
}
```

**Why Use `.drum` Class Instead of `button`?**
- More specific targeting
- Avoids accidentally selecting other buttons (like social media buttons)
- Safer and more maintainable code

---

## Higher Order Functions and Callbacks

### Understanding Higher Order Functions

A **Higher Order Function** is a function that can:
- Take other functions as parameters
- Return functions as results

#### Real-World Example: Calculator
```javascript
// Basic operations
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Higher Order Function
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// Usage Examples
calculator(4, 5, add);      // Returns 9
calculator(4, 5, multiply); // Returns 20
calculator(6, 3, subtract); // Returns 3
```

### Using the Debugger
Chrome DevTools debugger helps you understand code execution:
```javascript
debugger; // Pauses execution here
calculator(3, 4, multiply);
```

**Steps to debug:**
1. Type `debugger` in console
2. Call your function
3. Use step-through buttons to see execution flow

### Challenge Exercise: Complete Calculator
Create a calculator with all four operations:

```javascript
// Solution
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

// Test all operations
console.log(calculator(10, 5, add));      // 15
console.log(calculator(10, 5, subtract)); // 5
console.log(calculator(10, 5, multiply)); // 50
console.log(calculator(10, 5, divide));   // 2
```

---

## Playing Sounds with JavaScript

### The HTML Audio Element

#### Basic Sound Playing
```javascript
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
```

#### What's Happening Behind the Scenes?
When you write `new Audio()`, you're creating an HTMLAudioElement object:

```javascript
// Simplified constructor function (conceptual)
function Audio(fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        // Complex operations:
        // - Access audio hardware
        // - Check file exists
        // - Verify it's an audio file
        // - Play the sound
    };
}
```

### Challenge Exercise: Assign Background Images
Add appropriate background images to each drum button:

```css
/* Example solutions */
.w { background-image: url("images/tom1.png"); }
.a { background-image: url("images/tom2.png"); }
.s { background-image: url("images/tom3.png"); }
.d { background-image: url("images/tom4.png"); }
.j { background-image: url("images/snare.png"); }
.k { background-image: url("images/crash.png"); }
.l { background-image: url("images/kick.png"); }
```

### Identifying Which Button Was Clicked

#### Using the `this` Keyword
```javascript
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        console.log(this); // Logs the button that was clicked
        console.log(this.innerHTML); // Logs the text inside the button
    });
}
```

#### Challenge Exercise: Change Button Color
Modify the code to turn clicked button text white:

```javascript
// Solution
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color = "white";
    });
}
```

---

## Switch Statements

### Why Use Switch Instead of If-Else?
With 7 different buttons, multiple if-else statements become unwieldy. Switch statements provide cleaner code for multiple conditions.

### Switch Statement Syntax
```javascript
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
```

### Complete Drum Kit Switch Implementation
```javascript
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
                
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
                
            default:
                console.log(buttonInnerHTML);
        }
    });
}
```

### Key Points About Switch Statements
- **Case values**: Must be exact matches
- **Break statements**: Prevent fall-through to next case
- **Default case**: Handles unexpected values (like `else`)
- **Colons and breaks**: Replace parentheses and braces from if-else

---

## JavaScript Objects Deep Dive

### Understanding Objects Through Real-World Examples

#### The Hotel Bellboy Example
Imagine managing a hotel with multiple bellboys. Instead of separate variables:

```javascript
// Inefficient approach
var bellBoy1Name = "Timmy";
var bellBoy1Age = 19;
var bellBoy1HasWorkPermit = true;
var bellBoy1Languages = ["English", "Spanish"];
```

Use objects for better organization:

```javascript
// Efficient object approach
var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["English", "Spanish"]
};
```

### Creating Objects

#### Object Literal Syntax
```javascript
var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
};
```

#### Accessing Object Properties
```javascript
console.log(houseKeeper1.name); // "Jane"
console.log(houseKeeper1.yearsOfExperience); // 12
```

### Constructor Functions

When you need multiple similar objects, constructor functions act as "factories":

#### Basic Constructor Function
```javascript
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// Creating objects using constructor
var bellBoy1 = new BellBoy("Timmy", 19, true, ["English", "Spanish"]);
var bellBoy2 = new BellBoy("Jimmy", 25, true, ["English", "French"]);
```

#### Key Points About Constructor Functions
- **Capitalized names**: Convention to identify constructors
- **`new` keyword**: Required when creating objects
- **`this` keyword**: Refers to the object being created

### Challenge Exercise: HouseKeeper Constructor
Create a constructor function for housekeepers:

```javascript
// Solution
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

// Usage
var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper1.name); // "Tom"
```

---

## Objects, Methods, and Dot Notation

### Adding Methods to Objects

#### Object Literal with Method
```javascript
var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["English", "Spanish"],
    moveSuitcase: function() {
        alert("May I take your suitcase?");
        // Pick up suitcase logic
        // Move with suitcase logic
    }
};

// Calling the method
bellBoy1.moveSuitcase();
```

#### Adding Methods to Constructor Functions
```javascript
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
        alert("May I take your suitcase?");
    };
}
```

### Challenge Exercise: Add Clean Method
Add a `clean` method to the HouseKeeper constructor:

```javascript
// Solution
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning in progress...");
    };
}

// Usage
var houseKeeper1 = new HouseKeeper(12, "James", ["bedroom"]);
houseKeeper1.clean(); // Shows "Cleaning in progress..."
```

### Understanding the Audio Object
The `new Audio()` we used earlier follows the same pattern:

```javascript
// Conceptual Audio constructor
function Audio(fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        // Complex audio playing logic
    };
    this.pause = function() {
        // Pause functionality
    };
    // Other audio methods...
}

// Our usage
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play(); // Calls the play method
```

---

## Keyboard Event Listeners

### Adding Keyboard Detection

#### Document-Level Event Listener
Unlike button clicks, keyboard events are detected on the entire document:

```javascript
document.addEventListener("keypress", function(event) {
    alert("Key was pressed");
});
```

### Understanding Event Objects

#### Exploring the Event Parameter
```javascript
document.addEventListener("keypress", function(event) {
    console.log(event);
});
```

The event object contains valuable information:
- `event.key`: Which key was pressed
- `event.keyCode`: Numeric code for the key
- `event.type`: Type of event ("keypress")
- Many other properties

#### Getting the Specific Key
```javascript
document.addEventListener("keypress", function(event) {
    console.log(event.key); // Logs the actual key pressed
});
```

### Challenge Exercise: Universal makeSound Function
Create a function that works for both button clicks and key presses:

```javascript
// Solution
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        // ... all other cases
        default:
            console.log(key);
    }
}

// For button clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

// For keyboard presses
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});
```

### Key Event Types
- **keydown**: When key is first pressed
- **keypress**: While key is being pressed (may repeat)
- **keyup**: When key is released

---

## Understanding Callbacks and Event Handling

### Higher Order Functions vs Callback Functions

#### Definitions
- **Higher Order Function**: Takes other functions as parameters
- **Callback Function**: Function passed as parameter, called later

```javascript
// addEventListener is a Higher Order Function
// The anonymous function is a Callback Function
document.addEventListener("click", function() {
    console.log("Clicked!");
});
```

### Practical Callback Example

#### Understanding Function Parameters
```javascript
function sayHi(to) {
    console.log("Hello " + to);
}

function sayHi(name) {
    console.log("Hello " + name);
}

// Both work the same way
sayHi("Tom"); // "Hello Tom"
```

The parameter name doesn't matter - it's just a label.

### Event Object Parameter Naming
These are all equivalent:

```javascript
document.addEventListener("click", function(event) {
    console.log(event);
});

document.addEventListener("click", function(e) {
    console.log(e);
});

document.addEventListener("click", function(evt) {
    console.log(evt);
});
```

### Behind the Scenes: Creating addEventListener

#### Simplified Implementation
```javascript
function anotherAddEventListener(eventType, callback) {
    // Wait for event to happen...
    // When event occurs, create event object
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        duration: 2
    };
    
    // Check if this is the event type we're listening for
    if (eventThatHappened.eventType === eventType) {
        callback(eventThatHappened);
    }
}

// Usage
anotherAddEventListener("keypress", function(event) {
    console.log(event.key);
});
```

### Debugging Callbacks
Use the debugger to understand callback execution:

```javascript
debugger;
anotherAddEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});
```

**Debugging Steps:**
1. Code executes `anotherAddEventListener`
2. Function waits for event
3. Event occurs (e.g., key press)
4. Event object is created
5. Event type is checked
6. Callback function is executed with event object

---

## Adding Animations

### Creating Button Press Animation

#### The Visual Effect Goal
We want buttons to:
1. Show pressed state when clicked/key pressed
2. Return to normal after short delay
3. Work for both mouse clicks and keyboard presses

### Setting Up the Animation Function

#### CSS for Pressed State
First, define the pressed style in CSS:

```css
.pressed {
    box-shadow: 0 3px 4px 0 #DBEAA6;
    opacity: 0.5;
}
```

#### JavaScript Animation Function
```javascript
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
```

### Understanding the Code

#### Query Selector with Dynamic Class
```javascript
// If currentKey = "w"
document.querySelector(".w")  // Selects element with class "w"

// Dynamic version
document.querySelector("." + currentKey)  // Concatenates "." with currentKey
```

#### Class List Manipulation
```javascript
// Add class
element.classList.add("className");

// Remove class  
element.classList.remove("className");

// Example in console
document.querySelector("h1").classList.add("pressed");
```

### setTimeout Function

#### Syntax and Usage
```javascript
setTimeout(function, milliseconds);

// Example
setTimeout(function() {
    console.log("This runs after 3 seconds");
}, 3000);
```

#### In Our Animation
```javascript
setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100); // Remove after 100ms (0.1 seconds)
```

### Integrating Animation with Sound

#### Complete Implementation
```javascript
// Updated event listeners to include animation
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
```

### Challenge Exercise: Test Animation Timing
Experiment with different setTimeout delays:

```javascript
// Try different values
setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 50);  // Very quick

setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 200); // Slower

setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 500); // Much slower
```

Find the timing that feels most natural (typically 100ms works well).

---

## Final Complete Code

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Drum Kit</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Drum 🥁 Kit</h1>
    <div class="set">
        <button class="w drum">w</button>
        <button class="a drum">a</button>
        <button class="s drum">s</button>
        <button class="d drum">d</button>
        <button class="j drum">j</button>
        <button class="k drum">k</button>
        <button class="l drum">l</button>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

### Complete JavaScript Solution
```javascript
// Add event listeners to all drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Add keyboard event listener
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function to play sounds
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
    }
}

// Function to animate button presses
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
```

---

---

## Project Setup and Resources

### Starting Files Setup

#### Required Project Structure
Before beginning the tutorial, ensure you have the following file structure:
```
drum-kit-project/
├── index.html
├── index.js  
├── styles.css
├── sounds/
│   ├── tom-1.mp3
│   ├── tom-2.mp3
│   ├── tom-3.mp3
│   ├── tom-4.mp3
│   ├── snare.mp3
│   ├── crash.mp3
│   └── kick-bass.mp3
└── images/
    ├── tom1.png
    ├── tom2.png
    ├── tom3.png
    ├── tom4.png
    ├── snare.png
    ├── crash.png
    └── kick.png
```

#### Download Instructions
1. Access the Web Development Course Resources at: https://www.appbrewery.co/p/web-development-course-resources
2. Navigate to the Advanced JavaScript module
3. Download the starting files package
4. Extract the zip file to your working directory
5. Open the project in your code editor (Atom, VS Code, etc.)

#### Initial File Testing
Always verify your setup by testing the JavaScript connection:

```javascript
// Add this to index.js temporarily
alert("JavaScript is connected!");
```

Then open `index.html` in your browser to confirm the alert appears.

---

## Complete Higher Order Function Challenge Solution

### The Calculator Challenge Expanded

#### Problem Statement
Create a comprehensive calculator that can perform all basic mathematical operations using higher-order functions. The calculator should:
- Accept two numbers and an operation function
- Support addition, subtraction, multiplication, and division
- Demonstrate the concept of passing functions as arguments

#### Complete Solution with Detailed Explanation

```javascript
// Individual operation functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Higher-order function that accepts other functions
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// Usage examples with detailed explanations
console.log(calculator(10, 5, add));      // 15
console.log(calculator(10, 5, subtract)); // 5  
console.log(calculator(10, 5, multiply)); // 50
console.log(calculator(10, 5, divide));   // 2
```

#### Step-by-Step Execution Analysis

**Example: `calculator(10, 5, multiply)`**

1. **Function Call**: `calculator` is called with three arguments
   - `num1 = 10`
   - `num2 = 5` 
   - `operator = multiply` (the function itself, not a function call)

2. **Inside calculator()**: 
   - The function receives these parameters
   - It calls `operator(num1, num2)` which becomes `multiply(10, 5)`

3. **Inside multiply()**:
   - `num1 * num2` becomes `10 * 5`
   - Returns `50`

4. **Back to calculator()**:
   - Returns the result `50`

#### Advanced Testing and Debugging

```javascript
// Test all operations systematically
function testCalculator() {
    const testCases = [
        { num1: 10, num2: 5, op: add, expected: 15, name: "Addition" },
        { num1: 10, num2: 5, op: subtract, expected: 5, name: "Subtraction" },
        { num1: 10, num2: 5, op: multiply, expected: 50, name: "Multiplication" },
        { num1: 10, num2: 5, op: divide, expected: 2, name: "Division" }
    ];
    
    testCases.forEach(test => {
        const result = calculator(test.num1, test.num2, test.op);
        const passed = result === test.expected;
        console.log(`${test.name}: ${result} (${passed ? 'PASS' : 'FAIL'})`);
    });
}

testCalculator();
```

#### Using the Debugger for Learning

```javascript
// Add debugger to understand execution flow
debugger;
console.log("Starting calculator test...");

debugger; // Pause here
const result = calculator(6, 3, subtract);

debugger; // Pause here
console.log("Result:", result);
```

**Debugging Steps:**
1. Open Chrome DevTools (F12)
2. Go to Sources tab
3. Paste the code above in console
4. Step through each line to see:
   - How parameters are passed
   - When functions are called vs referenced
   - How return values flow back

---

## Important Technical Updates

### Keyboard Event Changes

#### Deprecated vs Modern Approach

**⚠️ Important Note**: The `keypress` event has been deprecated in modern browsers. Use `keydown` instead for better compatibility and future-proofing.

#### Updated Event Listener Code

**Old (Deprecated) Method:**
```javascript
// DON'T use this - keypress is deprecated
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
```

**New (Recommended) Method:**
```javascript
// USE this instead - keydown is the modern standard
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
```

#### Why the Change?

**keypress Issues:**
- Inconsistent behavior across browsers
- Doesn't capture all keys (e.g., arrow keys, function keys)
- Being phased out by browser vendors

**keydown Benefits:**
- Consistent across all modern browsers
- Captures all keyboard keys
- More reliable timing
- Better performance

#### Complete Updated Implementation

```javascript
// Modern keyboard event handling
document.addEventListener("keydown", function(event) {
    // Convert to lowercase to match button innerHTML
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});
```

#### Handling Case Sensitivity

Since keyboard events might return uppercase letters but our buttons contain lowercase, ensure consistency:

```javascript
function makeSound(key) {
    // Ensure lowercase for consistent matching
    key = key.toLowerCase();
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        // ... rest of cases
    }
}

function buttonAnimation(currentKey) {
    // Ensure lowercase for consistent class selection
    currentKey = currentKey.toLowerCase();
    
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) { // Check if element exists
        activeButton.classList.add("pressed");
        
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
```

---

## Advanced setTimeout Demonstrations

### Interactive setTimeout Examples

#### Basic setTimeout Review
```javascript
// Basic syntax
setTimeout(function() {
    console.log("This executes after delay");
}, delayInMilliseconds);
```

#### W3Schools Interactive Demo
You can experiment with setTimeout at: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout1

#### Practical setTimeout Examples

**Example 1: Progressive Messages**
```javascript
function showProgressiveMessages() {
    console.log("Starting...");
    
    setTimeout(function() {
        console.log("After 1 second");
    }, 1000);
    
    setTimeout(function() {
        console.log("After 2 seconds");
    }, 2000);
    
    setTimeout(function() {
        console.log("After 3 seconds - Done!");
    }, 3000);
}

showProgressiveMessages();
```

**Example 2: Animation Timing Variations**
```javascript
function testAnimationTimings() {
    const timings = [50, 100, 200, 500];
    const buttons = document.querySelectorAll('.drum');
    
    timings.forEach((timing, index) => {
        if (buttons[index]) {
            buttons[index].addEventListener('click', function() {
                this.classList.add('pressed');
                
                setTimeout(() => {
                    this.classList.remove('pressed');
                }, timing);
                
                console.log(`Button ${index + 1} animation: ${timing}ms`);
            });
        }
    });
}
```

**Example 3: Chained Animations**
```javascript
function chainedButtonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    if (activeButton) {
        // Phase 1: Press effect
        activeButton.classList.add("pressed");
        
        // Phase 2: Peak pressed state
        setTimeout(function() {
            activeButton.style.transform = "scale(0.95)";
        }, 50);
        
        // Phase 3: Return to normal
        setTimeout(function() {
            activeButton.classList.remove("pressed");
            activeButton.style.transform = "scale(1)";
        }, 150);
    }
}
```

---

## Complete Project Resources

### Download Links and Support

#### Completed Project Access
- **Main Resource Hub**: https://www.appbrewery.co/p/web-development-course-resources
- **Advanced JavaScript Section**: Contains completed drum kit files
- **What's Included**:
  - Complete HTML, CSS, and JavaScript files
  - All sound files and images
  - Multiple versions showing different implementation approaches

#### Getting Help and Reporting Issues

**Course Issues Report Form**: https://forms.gle/DNFNS8KgFdXtPvyY9

**When to Use the Report Form:**
- Found a bug in the provided code
- Encountered browser compatibility issues
- Links not working properly
- Missing files in downloads

**What to Include in Reports:**
- Specific lesson/module name
- Browser and version you're using
- Operating system
- Detailed description of the issue
- Steps to reproduce the problem

#### Troubleshooting Common Issues

**Problem 1: Sounds Not Playing**
```javascript
// Debug audio loading
function debugAudio(soundPath) {
    var audio = new Audio(soundPath);
    
    audio.addEventListener('loadstart', () => console.log('Loading started'));
    audio.addEventListener('canplay', () => console.log('Can start playing'));
    audio.addEventListener('error', (e) => console.log('Error:', e));
    
    audio.play()
        .then(() => console.log('Playing successfully'))
        .catch(e => console.log('Play failed:', e));
}

// Test each sound
debugAudio('sounds/tom-1.mp3');
```

**Problem 2: Animation Not Working**
```javascript
// Debug animation classes
function debugAnimation(key) {
    var element = document.querySelector("." + key);
    
    if (!element) {
        console.log(`No element found for key: ${key}`);
        return;
    }
    
    console.log('Element found:', element);
    console.log('Current classes:', element.classList);
    
    element.classList.add("pressed");
    console.log('Added pressed class');
    
    setTimeout(function() {
        element.classList.remove("pressed");
        console.log('Removed pressed class');
    }, 100);
}
```

**Problem 3: Event Listeners Not Working**
```javascript
// Debug event listener attachment
function debugEventListeners() {
    var drumButtons = document.querySelectorAll(".drum");
    console.log(`Found ${drumButtons.length} drum buttons`);
    
    drumButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.innerHTML);
        button.addEventListener("click", function() {
            console.log(`Button ${this.innerHTML} clicked`);
        });
    });
}

debugEventListeners();
```

---

## Final Complete Implementation (Updated)

### Modern, Updated Drum Kit Code

```javascript
// Complete drum kit implementation with modern practices
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add click event listeners to all drum buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Add keyboard event listener (using modern keydown instead of deprecated keypress)
document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase(); // Ensure lowercase
    makeSound(key);
    buttonAnimation(key);
});

// Function to play sounds based on key
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play().catch(e => console.log('Audio play failed:', e));
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play().catch(e => console.log('Audio play failed:', e));
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play().catch(e => console.log('Audio play failed:', e));
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play().catch(e => console.log('Audio play failed:', e));
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play().catch(e => console.log('Audio play failed:', e));
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play().catch(e => console.log('Audio play failed:', e));
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play().catch(e => console.log('Audio play failed:', e));
            break;
        default:
            console.log("Unknown key:", key);
    }
}

// Function to animate button presses
function buttonAnimation(currentKey) {
    currentKey = currentKey.toLowerCase(); // Ensure lowercase
    var activeButton = document.querySelector("." + currentKey);
    
    // Check if button exists before animating
    if (activeButton) {
        activeButton.classList.add("pressed");
        
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    } else {
        console.log("No button found for key:", currentKey);
    }
}
```

---

## Key Concepts Summary

### 1. Event Listeners
- Attach functions to respond to user interactions
- Use `addEventListener(eventType, callback)`
- Pass function references, not function calls
- **Modern Update**: Use `keydown` instead of deprecated `keypress`

### 2. Higher Order Functions & Callbacks
- Higher order functions accept other functions as parameters
- Callbacks are functions executed later in response to events
- Enable flexible, reusable code patterns
- Essential for event-driven programming

### 3. JavaScript Objects
- Group related data and functions together
- Use object literals for single instances
- Use constructor functions for multiple similar objects
- Access properties and methods with dot notation

### 4. DOM Manipulation
- Select elements with `querySelector` and `querySelectorAll`
- Modify element classes with `classList.add/remove`
- Use `this` to reference the element that triggered an event
- Always check if elements exist before manipulating them

### 5. Timing Functions
- `setTimeout` delays function execution
- Useful for animations and delayed actions
- Takes function and delay in milliseconds
- Can be used for complex animation sequences

### 6. Switch Statements
- Cleaner than multiple if-else statements
- Each case needs a `break` statement
- Include a `default` case for unexpected values
- More readable for multiple condition checks

### 7. Modern Web Development Practices
- Handle errors gracefully with `.catch()` for audio
- Check for element existence before manipulation
- Use consistent case handling for user input
- Follow current web standards and avoid deprecated APIs

### 8. Debugging and Testing
- Use `console.log()` strategically for debugging
- Implement error handling for better user experience
- Test across different browsers and devices
- Use browser developer tools for troubleshooting

This comprehensive tutorial provides a solid foundation in intermediate JavaScript concepts while building a practical, engaging web application. The drum kit project demonstrates real-world applications of event handling, object-oriented programming, DOM manipulation, and modern web development best practices.
