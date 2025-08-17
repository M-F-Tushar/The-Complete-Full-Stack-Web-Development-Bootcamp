# Complete DOM (Document Object Model) Tutorial Guide

## Table of Contents
1. [Adding JavaScript to Websites](#1-adding-javascript-to-websites)
2. [Introduction to the DOM](#2-introduction-to-the-document-object-model-dom)
3. [DOM Challenge Solution](#3-dom-challenge-solution)
4. [Selecting HTML Elements](#4-selecting-html-elements-with-javascript)
5. [Manipulating Styles](#5-manipulating-and-changing-styles)
6. [Separation of Concerns](#6-separation-of-concerns)
7. [Text Manipulation](#7-text-manipulation-and-textcontent)
8. [Manipulating Attributes](#8-manipulating-html-element-attributes)

---

## 1. Adding JavaScript to Websites

### Overview
JavaScript can be added to HTML websites in three different ways, similar to how CSS can be incorporated.

### Methods of Adding JavaScript

#### 1.1 Inline JavaScript
```html
<body onload="alert('Hello');">
    <h1>Hello</h1>
</body>
```

**Key Points:**
- JavaScript is added as an attribute directly in HTML tags
- Use single quotes inside double quotes to avoid conflicts
- **Disadvantages:** Not modular, difficult to debug, poor practice
- **Best Practice:** Avoid inline JavaScript when possible

#### 1.2 Internal JavaScript
```html
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Hello</h1>
    <script>
        alert("Hello");
    </script>
</body>
```

**Key Points:**
- JavaScript code is placed inside `<script>` tags
- Can use normal JavaScript syntax with double quotes
- Code executes when the browser reaches the script tag

#### 1.3 External JavaScript
```html
<body>
    <h1>Hello</h1>
    <script src="index.js"></script>
</body>
```

**index.js file:**
```javascript
alert("Hello");
```

**Key Points:**
- JavaScript code is in a separate `.js` file
- Linked using the `src` attribute in script tag
- Best practice for larger projects

### Script Tag Placement

#### Why Position Matters
```javascript
// This will cause an error if placed in <head>
document.querySelector("h1").innerHTML = "Good Bye";
```

**Correct Placement:**
- Place `<script>` tags just before closing `</body>` tag
- Ensures all HTML elements are loaded before JavaScript executes
- Improves perceived website loading speed

**Example of Proper Structure:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello</h1>
    <!-- All HTML content here -->
    <script src="index.js"></script>
</body>
</html>
```

---

## 2. Introduction to the Document Object Model (DOM)

### What is the DOM?

The DOM is a programming interface that represents HTML documents as a tree structure of objects that can be manipulated with JavaScript.

### DOM Tree Structure

**HTML Code:**
```html
<html>
    <head>
        <title>My Website</title>
    </head>
    <body>
        <h1>Hello</h1>
        <input type="checkbox">
        <button>Click Me</button>
        <ul id="list">
            <li><a href="https://www.google.com">Google</a></li>
            <li>Second</li>
            <li>Third</li>
        </ul>
    </body>
</html>
```

**DOM Tree Representation:**
```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── input
        ├── button
        └── ul (id="list")
            ├── li
            │   └── a
            ├── li
            └── li
```

### Navigating the DOM

#### Basic Navigation Methods
```javascript
// Get the entire document
document

// Get the first child element (html)
document.firstElementChild

// Get the first child of html (head)
document.firstElementChild.firstElementChild

// Get the last child of html (body)
document.firstElementChild.lastElementChild

// Get the first child of body (h1)
document.firstElementChild.lastElementChild.firstElementChild
```

### DOM Objects: Properties and Methods

#### Understanding Objects
Think of DOM elements like real-world objects (e.g., a car):

**Car Object Example:**
- **Properties:** color, numberOfSeats, numberOfDoors
- **Methods:** drive(), brake(), park()

**DOM Element Example:**
- **Properties:** innerHTML, style, firstChild
- **Methods:** click(), appendChild(), setAttribute()

#### Using Dot Notation
```javascript
// Getting a property
car.color // Returns "red"

// Setting a property  
car.numberOfDoors = 0

// Calling a method
car.drive()
```

### Practical DOM Manipulation Examples

#### Example 1: Changing Text
```javascript
// Select and store h1 element
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// Change the text content
heading.innerHTML = "Good Bye";
```

#### Example 2: Changing Style
```javascript
// Change text color
heading.style.color = "red";
```

#### Example 3: Simulating User Interaction
```javascript
// Select checkbox and simulate click
document.querySelector("input").click();
```

### DOM Challenge Exercise

**Challenge:** Select the third list item and change its text from "Third" to your name using only the browser console.

**Sample HTML Structure:**
```html
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>  <!-- Change this to your name -->
</ul>
```

---

## 3. DOM Challenge Solution

### Solution Explanation
```javascript
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";
```

**Breaking Down the Solution:**
1. `document.firstElementChild` → Gets `<html>` element
2. `.lastElementChild` → Gets `<body>` element (last child of html)
3. `.querySelector("ul")` → Finds the `<ul>` element inside body
4. `.lastElementChild` → Gets the last `<li>` element (third item)
5. `.innerHTML = "Angela"` → Changes the text content to "Angela"

**Alternative Solutions:**
```javascript
// Using direct querySelector
document.querySelector("ul").lastElementChild.innerHTML = "Angela";

// Using querySelectorAll to get specific index
document.querySelectorAll("li")[2].innerHTML = "Angela";
```

---

## 4. Selecting HTML Elements with JavaScript

### HTML Setup for Examples
```html
<h1 id="title">Hello</h1>
<input type="checkbox">
<button class="btn">Click Me</button>
<ul id="list">
    <li class="item"><a href="https://www.google.com">Google</a></li>
    <li class="item">Second</li>
    <li class="item">Third</li>
</ul>
```

### Selection Methods

#### 4.1 getElementsByTagName() - Returns Array
```javascript
// Select all list items
document.getElementsByTagName("li");
// Returns: HTMLCollection [li.item, li.item, li.item]

// Manipulate specific element
document.getElementsByTagName("li")[2].style.color = "purple";

// Get count of elements
document.getElementsByTagName("li").length; // Returns: 3
```

**Key Points:**
- Returns an **array-like collection** (even for single matches)
- Must use index `[0]`, `[1]`, etc. to access individual elements
- Word "Elements" is plural

#### 4.2 getElementsByClassName() - Returns Array
```javascript
// Select all elements with class "item"
document.getElementsByClassName("item");
// Returns: HTMLCollection [li.item, li.item, li.item]

// Select button by class
document.getElementsByClassName("btn")[0]; // Must use [0] even for single element
```

**Key Points:**
- Always returns array, even for single element
- Must specify index to manipulate individual elements

#### 4.3 getElementById() - Returns Single Element
```javascript
// Select element by ID
document.getElementById("title");
// Returns: <h1 id="title">Hello</h1>

// Direct manipulation (no array index needed)
document.getElementById("title").innerHTML = "Good Bye";
```

**Key Points:**
- Word "Element" is singular
- Returns single element (IDs should be unique)
- No array indexing required

#### 4.4 querySelector() - Returns Single Element
```javascript
// Select by tag name
document.querySelector("h1");

// Select by ID
document.querySelector("#title");

// Select by class
document.querySelector(".btn");

// Complex hierarchical selection
document.querySelector("li a"); // Anchor inside list item

// Combined selectors (same element)
document.querySelector("li.item"); // List item with class "item"

// Hierarchical with ID
document.querySelector("#list a"); // Anchor inside element with id "list"
```

**Key Points:**
- Uses CSS selector syntax
- Returns first matching element only
- Most flexible selection method

#### 4.5 querySelectorAll() - Returns Array
```javascript
// Select all matching elements
document.querySelectorAll("li.item");
// Returns: NodeList [li.item, li.item, li.item]

// Access specific element
document.querySelectorAll("li.item")[1].style.color = "blue";
```

### CSS Selector Syntax Reference

| Selector Type | CSS Syntax | JavaScript Example |
|---------------|------------|-------------------|
| Element | `h1` | `querySelector("h1")` |
| Class | `.btn` | `querySelector(".btn")` |
| ID | `#title` | `querySelector("#title")` |
| Hierarchical | `li a` | `querySelector("li a")` |
| Combined | `li.item` | `querySelector("li.item")` |

### Selection Challenge Exercise

**Challenge:** Change the text color of the Google link (inside the list) to red.

**HTML Structure:**
```html
<ul id="list">
    <li class="item"><a href="https://www.google.com">Google</a></li>
    <li class="item">Second</li>
    <li class="item">Third</li>
</ul>
```

**Solution:**
```javascript
document.querySelector("li a").style.color = "red";
```

**Why this works:**
- Selects the anchor tag (`a`) that is inside a list item (`li`)
- The anchor tag is a separate element from the list item
- Changes only the text color of the link, not the bullet point

---

## 5. Manipulating and Changing Styles

### CSS vs JavaScript Property Names

JavaScript uses **camelCase** naming convention for CSS properties:

| CSS Property | JavaScript Property |
|--------------|-------------------|
| `font-size` | `fontSize` |
| `background-color` | `backgroundColor` |
| `border-radius` | `borderRadius` |
| `margin-top` | `marginTop` |
| `text-align` | `textAlign` |

### Basic Style Manipulation

#### Changing Colors
```javascript
// Change text color
document.querySelector("h1").style.color = "red";

// Change background color
document.querySelector("button").style.backgroundColor = "yellow";
```

#### Changing Sizes and Fonts
```javascript
// Change font size
document.querySelector("h1").style.fontSize = "10rem";

// Change padding
document.querySelector("button").style.padding = "20px";

// Change visibility
document.querySelector("h1").style.visibility = "hidden";
```

### Important Rules for JavaScript Styles

#### 1. Values Must Be Strings
```javascript
// Correct - values in quotes
element.style.fontSize = "20px";
element.style.padding = "10px";
element.style.lineHeight = "1.5";

// Incorrect - no quotes
element.style.fontSize = 20px; // Error!
```

#### 2. Include Units
```javascript
// Correct - with units
element.style.width = "300px";
element.style.margin = "2rem";

// Incorrect - missing units
element.style.width = "300"; // May not work as expected
```

### Style Manipulation Exercise

**Challenge:** Use JavaScript to change the background color of a button to yellow.

**HTML:**
```html
<button class="btn">Click Me</button>
```

**Solution:**
```javascript
document.querySelector("button").style.backgroundColor = "yellow";
// or
document.querySelector(".btn").style.backgroundColor = "yellow";
```

### DOM Style Properties Reference

Common JavaScript style properties:
- `backgroundColor`
- `color`
- `fontSize`
- `fontWeight`
- `textAlign`
- `margin`
- `padding`
- `border`
- `display`
- `visibility`

**Resource:** Complete list available at [W3Schools DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

---

## 6. Separation of Concerns: Structure vs Style vs Behaviour

### The Principle

**Separation of Concerns** means:
- **HTML** = Content and Structure
- **CSS** = Styling and Appearance  
- **JavaScript** = Behavior and Interaction

### The Problem with Inline Styles in JavaScript

**Bad Practice:**
```javascript
// Mixing style with behavior - avoid this!
document.querySelector("button").style.color = "red";
document.querySelector("button").style.fontSize = "2rem";
document.querySelector("button").style.fontWeight = "bold";
```

### The Solution: Using CSS Classes

#### Step 1: Define Styles in CSS
```css
/* styles.css */
.invisible {
    visibility: hidden;
}

.huge {
    font-size: 10rem;
    color: red;
    font-weight: bold;
}
```

#### Step 2: Toggle Classes with JavaScript
```javascript
// Add a class
document.querySelector("button").classList.add("invisible");

// Remove a class
document.querySelector("button").classList.remove("invisible");

// Toggle a class (add if not present, remove if present)
document.querySelector("button").classList.toggle("invisible");
```

### ClassList Methods

#### Viewing Current Classes
```javascript
// See all classes on an element
document.querySelector("button").classList;
// Returns: DOMTokenList ["btn"]
```

#### Add Method
```javascript
// Add new class
document.querySelector("button").classList.add("invisible");
// Button now has classes: "btn invisible"
```

#### Remove Method
```javascript
// Remove specific class
document.querySelector("button").classList.remove("invisible");
// Button now has classes: "btn"
```

#### Toggle Method
```javascript
// Toggle class on/off
document.querySelector("button").classList.toggle("invisible");
// If class exists: removes it
// If class doesn't exist: adds it
```

### Practical Example: Hide/Show Button

**CSS:**
```css
.invisible {
    visibility: hidden;
}
```

**JavaScript:**
```javascript
// Hide the button
document.querySelector("button").classList.add("invisible");

// Show the button
document.querySelector("button").classList.remove("invisible");

// Toggle visibility
document.querySelector("button").classList.toggle("invisible");
```

### Benefits of This Approach

1. **Maintainability:** All styles in one place (CSS file)
2. **Debugging:** Easy to find and fix styling issues
3. **Reusability:** Classes can be applied to multiple elements
4. **Performance:** More efficient than inline styles
5. **Best Practices:** Follows web development standards

### Separation of Concerns Exercise

**Challenge:** 
1. Create a CSS class called "huge" with font-size: 10rem
2. Apply this class to the h1 element using JavaScript

**Solution:**

**CSS (styles.css):**
```css
.huge {
    font-size: 10rem;
    color: red;
    font-weight: bold;
}
```

**JavaScript:**
```javascript
document.querySelector("h1").classList.add("huge");
```

This approach keeps styling in CSS and uses JavaScript only to control when styles are applied.

---

## 7. Text Manipulation and TextContent

### Two Ways to Manipulate Text

#### 7.1 innerHTML Property
```javascript
// Get current HTML content
document.querySelector("h1").innerHTML; 
// Returns: "Hello" (or complete HTML including tags)

// Set new HTML content
document.querySelector("h1").innerHTML = "Good Bye";
```

#### 7.2 textContent Property
```javascript
// Get current text content only
document.querySelector("h1").textContent;
// Returns: "Hello" (text only, no HTML tags)

// Set new text content
document.querySelector("h1").textContent = "Good Bye";
```

### Key Differences

#### innerHTML - Includes HTML Tags

**HTML:**
```html
<h1><strong>Hello</strong></h1>
```

**JavaScript:**
```javascript
document.querySelector("h1").innerHTML;
// Returns: "<strong>Hello</strong>"

document.querySelector("h1").textContent;
// Returns: "Hello"
```

#### Using innerHTML to Add HTML Elements
```javascript
// Add HTML elements dynamically
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";
// Result: <h1><em>Good Bye</em></h1> (italicized text)
```

### Practical Examples

#### Example 1: Simple Text Change
```javascript
// Both methods work the same for plain text
document.querySelector("h1").innerHTML = "Welcome";
document.querySelector("h1").textContent = "Welcome";
```

#### Example 2: Adding Formatting with innerHTML
```javascript
// Add emphasis (italics)
document.querySelector("h1").innerHTML = "<em>Important Message</em>";

// Add strong emphasis (bold)
document.querySelector("h1").innerHTML = "<strong>Warning!</strong>";

// Multiple HTML elements
document.querySelector("h1").innerHTML = "Hello <span style='color: red;'>World</span>!";
```

#### Example 3: Security Consideration
```javascript
// textContent is safer for user input (prevents HTML injection)
let userInput = "<script>alert('hack')</script>";

// Safe - treats as plain text
document.querySelector("h1").textContent = userInput;
// Result: literally displays "<script>alert('hack')</script>"

// Potentially unsafe - executes HTML
document.querySelector("h1").innerHTML = userInput;
// Result: could execute the script tag
```

### When to Use Each Method

#### Use innerHTML when:
- You want to add HTML formatting
- You're dynamically creating HTML elements
- You need to include links, images, or other HTML elements

#### Use textContent when:
- You only need to change plain text
- You're dealing with user input (for security)
- You want to ignore any HTML tags

### String Requirements

**Remember:** Both properties require string values:

```javascript
// Correct - strings in quotes
element.innerHTML = "Hello World";
element.innerHTML = "<strong>Bold Text</strong>";

// Incorrect - missing quotes
element.innerHTML = Hello World; // Error!
```

### Text Manipulation Exercise

**Challenge:** Use innerHTML to change the h1 text to "Good Bye" and make it emphasized (italicized).

**Solution:**
```javascript
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";
```

This creates: `<h1><em>Good Bye</em></h1>` which displays as italicized text.

---

## 8. Manipulating HTML Element Attributes

### What Are HTML Attributes?

Attributes are the properties defined within HTML element tags:

```html
<a href="https://www.google.com" class="link" id="google-link">Google</a>
<img src="image.jpg" alt="Description" width="300">
<input type="text" placeholder="Enter name" required>
```

**Common Attributes:**
- `href` (for links)
- `src` (for images)
- `class` (CSS classes)
- `id` (unique identifier)
- `type` (input type)
- `alt` (alternative text)

### Attribute Manipulation Methods

#### 8.1 View All Attributes
```javascript
// Get list of all attributes
document.querySelector("a").attributes;
// Returns: NamedNodeMap {0: href, href: href, length: 1}
```

#### 8.2 Get Attribute Value
```javascript
// Get current value of specific attribute
document.querySelector("a").getAttribute("href");
// Returns: "https://www.google.com"

// Get class attribute
document.querySelector("button").getAttribute("class");
// Returns: "btn"
```

#### 8.3 Set Attribute Value
```javascript
// Change attribute value
document.querySelector("a").setAttribute("href", "https://www.bing.com");

// Add new attribute
document.querySelector("img").setAttribute("alt", "Profile Picture");

// Change input type
document.querySelector("input").setAttribute("type", "password");
```

### Practical Examples

#### Example 1: Changing Link Destination
```html
<a href="https://www.google.com">Google</a>
```

```javascript
// Check current destination
document.querySelector("a").getAttribute("href");
// Returns: "https://www.google.com"

// Change destination
document.querySelector("a").setAttribute("href", "https://www.bing.com");

// Now clicking the link goes to Bing instead of Google
// Note: The visible text still says "Google"
```

#### Example 2: Modifying Image Attributes
```html
<img src="old-image.jpg" alt="Old Description">
```

```javascript
// Change image source
document.querySelector("img").setAttribute("src", "new-image.jpg");

// Update alt text
document.querySelector("img").setAttribute("alt", "New Description");

// Add width attribute
document.querySelector("img").setAttribute("width", "500");
```

#### Example 3: Form Input Manipulation
```html
<input type="text" placeholder="Enter email">
```

```javascript
// Change input type
document.querySelector("input").setAttribute("type", "email");

// Update placeholder
document.querySelector("input").setAttribute("placeholder", "Enter your email address");

// Add required attribute
document.querySelector("input").setAttribute("required", "true");
```

### Method Parameters

The `setAttribute()` method takes **two parameters**:

```javascript
element.setAttribute(attributeName, attributeValue);
```

1. **attributeName** (string): The name of the attribute to set
2. **attributeValue** (string): The value to assign to that attribute

### Common Attribute Manipulations

#### Links
```javascript
// Change link destination
element.setAttribute("href", "https://newsite.com");

// Change link target
element.setAttribute("target", "_blank"); // Open in new tab
```

#### Images  
```javascript
// Change image source
element.setAttribute("src", "path/to/new/image.jpg");

// Change alt text
element.setAttribute("alt", "New description");
```

#### Form Elements
```javascript
// Change input type
element.setAttribute("type", "password");

// Add placeholder
element.setAttribute("placeholder", "Enter password");

// Make required
element.setAttribute("required", "true");
```

#### CSS Classes and IDs
```javascript
// Change class
element.setAttribute("class", "new-class");

// Change ID
element.setAttribute("id", "new-id");

// Note: For classes, classList methods are usually preferred
element.classList.add("new-class"); // Better approach
```

### Attribute Manipulation Exercise

**Challenge:** Select the Google link and change its destination to point to Bing.

**Starting HTML:**
```html
<a href="https://www.google.com">Google</a>
```

**Solution:**
```javascript
document.querySelector("a").setAttribute("href", "https://www.bing.com");
```

**Result:** The link text still displays "Google" but now redirects to Bing when clicked.

### Summary of DOM Manipulation Methods

| Operation | Method | Example |
|-----------|--------|---------|
| **Selection** | `querySelector()` | `document.querySelector("h1")` |
| | `querySelectorAll()` | `document.querySelectorAll("li")` |
| | `getElementById()` | `document.getElementById("title")` |
| **Text** | `innerHTML` | `element.innerHTML = "New text"` |
| | `textContent` | `element.textContent = "Plain text"` |
| **Styles** | `style.property` | `element.style.color = "red"` |
| | `classList.add()` | `element.classList.add("class-name")` |
| | `classList.remove()` | `element.classList.remove("class-name")` |
| | `classList.toggle()` | `element.classList.toggle("class-name")` |
| **Attributes** | `getAttribute()` | `element.getAttribute("href")` |
| | `setAttribute()` | `element.setAttribute("href", "url")` |

---

## Additional Resources

1. **HTML Tree Generator Extension:** [Chrome Web Store](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg)

2. **DOM Style Properties:** [W3Schools Reference](https://www.w3schools.com/jsref/dom_obj_style.asp)

3. **Course Issue Reporting:** [Google Form](https://forms.gle/DNFNS8KgFdXtPvyY9)

---

## Best Practices Summary

1. **Script Placement:** Place `<script>` tags just before closing `</body>` tag
2. **Selection:** Use `querySelector()` for most cases due to flexibility  
3. **Styling:** Use CSS classes with `classList` methods instead of inline styles
4. **Text Content:** Use `textContent` for plain text, `innerHTML` for HTML content
5. **Security:** Be cautious with `innerHTML` when dealing with user input
6. **Separation of Concerns:** Keep HTML, CSS, and JavaScript responsibilities separate
7. **Consistency:** Use camelCase for JavaScript property names

This comprehensive guide covers all the fundamental DOM manipulation concepts with detailed explanations, practical examples, and exercises to reinforce learning.
