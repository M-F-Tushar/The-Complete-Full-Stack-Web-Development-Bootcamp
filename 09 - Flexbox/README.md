# Complete CSS Flexbox Guide

## Table of Contents
1. [Introduction to Flexbox](#introduction-to-flexbox)
2. [Evolution of Web Layout](#evolution-of-web-layout)
3. [Basic Flexbox Setup](#basic-flexbox-setup)
4. [Flex Direction & Axes](#flex-direction--axes)
5. [Flex Layout Properties](#flex-layout-properties)
6. [Flex Sizing](#flex-sizing)
7. [Complete Project: Pricing Table](#complete-project-pricing-table)
8. [Exercises and Solutions](#exercises-and-solutions)

---

## Introduction to Flexbox

Flexbox (Flexible Box Layout) is a CSS layout method designed for creating complex, flexible layouts. Unlike traditional layout methods that were inspired by newspapers and magazines, Flexbox is built for modern web design.

### Key Concepts
- **Flex Container**: The parent element with `display: flex`
- **Flex Items**: Direct children of the flex container
- **Main Axis**: Primary axis along which flex items are laid out
- **Cross Axis**: Perpendicular to the main axis

---

## Evolution of Web Layout

### 1. HTML Tables (Legacy Method)
```html
<!-- DON'T USE FOR LAYOUT -->
<table>
  <tr>
    <td class="col1">Content 1</td>
    <td class="col2">Content 2</td>
    <td class="col3">Content 3</td>
  </tr>
</table>
```

**Problems:**
- Semantic misuse (tables are for tabular data)
- Not responsive
- Difficult to maintain

### 2. Inline-Block Method
```css
div {
  display: inline-block;
  width: 25%;
}
```

**Example from documents:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      display: inline-block;
      background-color: blueviolet;
    }
    .one { width: 25%; }
    .two { width: 25%; }
    .three { width: 40%; }
  </style>
</head>
<body>
  <h1>Inline-Block</h1>
  <div class="one">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="two">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="three">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</body>
</html>
```

**Problems:**
- Alignment issues (elements don't align to top)
- Whitespace issues
- Difficult to control vertical alignment

### 3. Absolute Positioning
```css
.one {
  position: absolute;
  width: 25%;
}
.two {
  position: absolute;
  left: 27.25%;
  width: 25%;
}
.three {
  position: absolute;
  left: 53%;
  width: 40%;
}
```

**Problems:**
- Inflexible layout
- Not responsive
- Elements overlap with dynamic content

### 4. Float Method
```css
.one, .two, .three {
  float: left;
}
.one { width: 25%; }
.two { width: 25%; }
.three { width: 40%; }
```

**Example from documents:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      background-color: coral;
      margin: 10px;
    }
    .one { float: left; width: 25%; }
    .two { width: 25%; float: left; }
    .three { float: left; width: 40%; }
  </style>
</head>
<body>
  <h1>Float</h1>
  <div class="one">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="two">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="three">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</body>
</html>
```

**Problems:**
- Hacky solutions needed
- Clearfix hacks required
- Not intended for layout (original purpose: text wrapping around images)

---

## Basic Flexbox Setup

### The Flexbox Solution
```css
.container {
  display: flex;
  gap: 10px;
}
```

**Complete Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      gap: 10px;
    }
    p {
      background-color: darkseagreen;
    }
  </style>
</head>
<body>
  <h1>Flexbox</h1>
  <div class="container">
    <div class="one">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="two">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="three">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</body>
</html>
```

### Key Benefits
- Clean, simple code
- Responsive by default
- Easy to customize
- Built-in gap control

### Display: Flex vs Inline-Flex

#### `display: flex`
- Container takes full width (like block element)
- Items flex within full-width container

#### `display: inline-flex`
- Container only takes needed width
- Other elements can sit on same line
- Similar to `inline-block` behavior

---

## Flex Direction & Axes

### Understanding Axes

#### Default: `flex-direction: row`
- **Main Axis**: Horizontal (left to right)
- **Cross Axis**: Vertical (top to bottom)
- Items stack horizontally

#### `flex-direction: column`
- **Main Axis**: Vertical (top to bottom)
- **Cross Axis**: Horizontal (left to right)
- Items stack vertically

### Flex Direction Values
```css
.container {
  flex-direction: row;        /* Default */
  flex-direction: row-reverse;
  flex-direction: column;
  flex-direction: column-reverse;
}
```

### Flex-Basis and Axes
```css
/* When flex-direction: row */
.item {
  flex-basis: 100px; /* Sets width */
}

/* When flex-direction: column */
.item {
  flex-basis: 100px; /* Sets height */
}
```

### Exercise 1: Rainbow Colors
**Starting Code:**
```html
<div class="container">
  <div class="red">Red</div>
  <div class="orange">Orange</div>
  <div class="yellow">Yellow</div>
  <div class="green">Green</div>
  <div class="blue">Blue</div>
  <div class="indigo">Indigo</div>
  <div class="purple">Purple</div>
</div>
```

**Goal:** Convert horizontal layout to vertical with 100px height each

**Solution:**
```css
.container {
  color: white;
  border: 5px solid gold;
  display: inline-flex;           /* Takes only needed width */
  flex-direction: column;         /* Stack vertically */
}

.container > * {                  /* Target all direct children */
  flex-basis: 100px;             /* Set height (main axis) */
}
```

**Key Learning Points:**
- `>` combinator selects direct children only
- `*` universal selector selects all elements
- `flex-basis` works along main axis
- `inline-flex` prevents full-width container

---

## Flex Layout Properties

### Container Properties (Parent)

#### 1. Order (Applied to Items)
```css
.item {
  order: 0;  /* Default */
  order: 1;  /* Moves to end */
  order: -1; /* Moves to beginning */
}
```

**Example:**
```css
.green {
  order: 1; /* Moves green to the end */
}
```

#### 2. Flex-Wrap
```css
.container {
  flex-wrap: nowrap;    /* Default - items stay on one line */
  flex-wrap: wrap;      /* Items wrap to next line */
  flex-wrap: wrap-reverse; /* Wrap from bottom to top */
}
```

#### 3. Justify-Content (Main Axis Alignment)
```css
.container {
  justify-content: flex-start;    /* Default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between; /* Equal space between items */
  justify-content: space-around;  /* Equal space around items */
  justify-content: space-evenly;  /* Equal space everywhere */
}
```

**Visual Examples:**
- `space-between`: |Item1____Item2____Item3|
- `space-around`: |_Item1__Item2__Item3_|
- `space-evenly`: |__Item1__Item2__Item3__|

#### 4. Align-Items (Cross Axis Alignment)
```css
.container {
  height: 70vh; /* Need height for vertical alignment */
  align-items: flex-start;  /* Top */
  align-items: flex-end;    /* Bottom */
  align-items: center;      /* Middle */
  align-items: baseline;    /* Text baseline */
  align-items: stretch;     /* Default - fill container */
}
```

#### 5. Align-Content (For Wrapped Content)
```css
.container {
  flex-wrap: wrap;
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;
}
```

**Note:** Only works with `flex-wrap: wrap`

### Item Properties (Children)

#### Align-Self (Individual Item Alignment)
```css
.item {
  align-self: auto;       /* Inherit from parent */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```

### Interactive Demo
The course provides an interactive demo at: `appbrewery.github.io/flex-layout`

This allows testing different combinations of:
- Flex-wrap values
- Justify-content values
- Align-items values
- Container width changes

---

## Flex Sizing

### The Flex Sizing Algorithm

Flexbox determines item sizes using this priority order:

1. **min-width/max-width** (highest priority)
2. **flex-basis**
3. **width/height**
4. **content width** (lowest priority)

### Content Width Behavior

#### Default Behavior (No Properties Set)
```css
.container {
  display: flex;
  gap: 10px;
}
/* Items size based on content */
```

**Behavior:**
- Max width: All text on one line
- Min width: Longest word determines minimum
- Responsive shrinking until min-width reached

### Setting Width Property
```css
.container {
  display: flex;
  gap: 10px;
}

.item {
  width: 100px;
}
```

**Behavior:**
- Items try to be 100px wide
- When container too small, items shrink
- Still respects minimum content width

### Flex-Basis Property
```css
.container {
  display: flex;
  gap: 10px;
}

.item {
  width: 100px;      /* Ignored */
  flex-basis: 200px; /* Takes priority */
}
```

**Key Points:**
- `flex-basis` overrides `width` property
- Acts as "ideal" size before growing/shrinking
- Works along main axis (width for row, height for column)

### Min-Width and Max-Width
```css
.item {
  flex-basis: 200px;
  max-width: 100px;   /* Limits growth */
  min-width: 300px;   /* Prevents shrinking below this */
}
```

**Behavior:**
- `max-width < flex-basis`: Item won't exceed max-width
- `min-width > flex-basis`: Item starts at min-width

### Flex Grow and Shrink

#### Understanding Grow/Shrink
```css
.item {
  flex-grow: 0;    /* Default - don't grow */
  flex-shrink: 1;  /* Default - can shrink */
  flex-basis: 100px;
}
```

#### Turning Off Both
```css
.item {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100px;
}
/* Items stay exactly 100px - not flexible */
```

#### Grow Only
```css
.item {
  flex-grow: 1;    /* Can grow */
  flex-shrink: 0;  /* Can't shrink below basis */
  flex-basis: 100px;
}
/* Grows to fill space, won't shrink below 100px */
```

#### Shrink Only
```css
.item {
  flex-grow: 0;    /* Won't grow beyond basis */
  flex-shrink: 1;  /* Can shrink */
  flex-basis: 100px;
}
/* Default behavior - shrinks when needed */
```

#### Both Grow and Shrink
```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
}
/* Fully flexible - grows and shrinks as needed */
```

### Flex Shorthand
```css
/* Instead of individual properties */
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}

/* Use shorthand */
.item {
  flex: 1 1 0;  /* grow shrink basis */
}

/* Common shorthand */
.item {
  flex: 1;  /* Same as: flex: 1 1 0 */
}
```

### Flex Ratios
```css
.item1 { flex: 1; }  /* Takes 1 part */
.item2 { flex: 2; }  /* Takes 2 parts (twice as wide) */
.item3 { flex: 3; }  /* Takes 3 parts (three times as wide) */
```

### Flex-Basis Auto vs 0
```css
/* Auto - based on content size */
.item { flex: 1 1 auto; }

/* 0 - equal widths regardless of content */
.item { flex: 1 1 0; }
```

### Sizing Exercise
**Goal:** Match blue boxes to green box behavior

**Given Layout:**
- Item 1: 200px ideal width, can shrink
- Item 2: 200px ideal width, can't shrink
- Item 3: 400px ideal width, can't shrink
- Container: space-between distribution

**Solution:**
```css
.container {
  display: flex;
  justify-content: space-between;
}

.item1 {
  flex-basis: 200px;
  flex-shrink: 1;  /* Can shrink */
}

.item2 {
  flex-basis: 200px;
  flex-shrink: 0;  /* Can't shrink */
}

.item3 {
  flex-basis: 400px;
  flex-shrink: 0;  /* Can't shrink */
}
```

---

## Complete Project: Pricing Table

### Project Overview
Build a responsive pricing table with three tiers that:
- Displays horizontally on large screens
- Stacks vertically on small screens (mobile)
- Uses Flexbox for layout
- Includes proper styling

### HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Pricing Table</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="pricing-container">
    <div class="pricing-plan">
      <div class="plan-title">Basic</div>
      <div class="plan-price">$11.99/month</div>
      <ul class="plan-features">
        <li>✅ 10GB Storage</li>
        <li>✅ 1 User</li>
        <li>🚫 Support</li>
      </ul>
      <button class="plan-button">Sign Up</button>
    </div>
    
    <div class="pricing-plan">
      <div class="plan-title">Standard</div>
      <div class="plan-price">$19.99/month</div>
      <ul class="plan-features">
        <li>✅ 50GB Storage</li>
        <li>✅ 5 Users</li>
        <li>✅ Phone & Email Support</li>
      </ul>
      <button class="plan-button">Sign Up</button>
    </div>
    
    <div class="pricing-plan">
      <div class="plan-title">Premium</div>
      <div class="plan-price">$49.99/month</div>
      <ul class="plan-features">
        <li>✅ 100GB Storage</li>
        <li>✅ 10 Users</li>
        <li>✅ 24/7 Support</li>
      </ul>
      <button class="plan-button">Sign Up</button>
    </div>
  </div>
</body>
</html>
```

### CSS Solution with Detailed Explanations

#### 1. Basic Font Setup
```css
body {
  font-family: 'Sono', sans-serif;
}
```

#### 2. Flex Container Setup
```css
.pricing-container {
  display: flex;              /* Create flex container */
  justify-content: center;    /* Center horizontally */
  align-items: center;        /* Center vertically */
  height: 100vh;             /* Full viewport height */
  gap: 2rem;                 /* Space between cards */
}
```

**Key Points:**
- `height: 100vh` gives full screen height
- Combined centering creates perfect center alignment
- `gap` provides consistent spacing

#### 3. Pricing Plan Cards
```css
.pricing-plan {
  flex: 1;                   /* Equal width, flexible */
  max-width: 400px;          /* Limit maximum width */
  padding: 20px;             /* Internal spacing */
  background-color: #f2f2f2; /* Light gray background */
  border-radius: 5px;        /* Rounded corners */
  text-align: center;        /* Center text */
}
```

**Key Points:**
- `flex: 1` makes all cards equal width
- `max-width` prevents cards from becoming too wide
- `text-align: center` centers all text content

#### 4. Typography Styling
```css
.plan-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.plan-price {
  font-size: 48px;          /* Large, prominent price */
  font-weight: bold;
  margin-bottom: 10px;
}

.plan-features {
  list-style: none;         /* Remove bullet points */
  padding: 0;               /* Remove default padding */
  margin: 0;                /* Remove default margin */
  margin-bottom: 20px;      /* Space before button */
}

.plan-features li {
  margin-bottom: 20px;      /* Space between features */
}
```

#### 5. Button Styling
```css
.plan-button {
  padding: 10px;
  background-color: #ff6600; /* Orange background */
  color: #fff;              /* White text */
  border-radius: 5px;       /* Rounded corners */
  border: none;             /* Remove default border */
  cursor: pointer;          /* Show it's clickable */
}
```

#### 6. Responsive Design
```css
@media (max-width: 1250px) {
  .pricing-container {
    flex-direction: column;   /* Stack vertically */
    height: 100%;            /* Allow natural height */
  }
}
```

**Key Points:**
- `flex-direction: column` stacks cards vertically
- `height: 100%` instead of `100vh` prevents content cutoff
- Breakpoint at 1250px chosen for optimal user experience

### Project Features Achieved

1. **Perfect Centering**: Uses Flexbox for both horizontal and vertical centering
2. **Responsive Layout**: Automatic switch from horizontal to vertical layout
3. **Equal Card Widths**: All cards flex equally on large screens
4. **Professional Styling**: Clean, modern appearance with proper spacing
5. **Mobile-Friendly**: Vertical stack on smaller screens

---

## Exercises and Solutions

### Exercise 1: Navigation Bar
**Goal:** Convert vertical list to horizontal navigation

**Starting HTML:**
```html
<div class="container">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</div>
```

**Solution:**
```css
.container {
  display: flex;
  gap: 10px;
}

ul {
  list-style: none;  /* Remove bullets */
  display: flex;     /* Make list horizontal */
  gap: 1rem;        /* Space between items */
}
```

### Exercise 2: Flexbox Froggy Challenges
**Interactive Game:** `appbrewery.github.io/flexboxfroggy`

**Key Challenges and Solutions:**

1. **Move frog to lily pad on right:**
   ```css
   #pond {
     display: flex;
     justify-content: flex-end;
   }
   ```

2. **Center frog:**
   ```css
   #pond {
     display: flex;
     justify-content: center;
   }
   ```

3. **Distribute frogs with space between:**
   ```css
   #pond {
     display: flex;
     justify-content: space-between;
   }
   ```

4. **Align frog to bottom:**
   ```css
   #pond {
     display: flex;
     align-items: flex-end;
   }
   ```

5. **Center both axes:**
   ```css
   #pond {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```

### Exercise 3: Sizing Challenge
**Interactive Tool:** Custom sizing exercise

**Scenario:** Match blue boxes to green box behavior
- Item 1: 200px basis, can shrink
- Item 2: 200px basis, fixed size
- Item 3: 400px basis, fixed size

**Solution Process:**
1. Set container alignment:
   ```css
   .container {
     justify-content: space-between;
   }
   ```

2. Set individual item properties:
   ```css
   .item1 {
     flex-basis: 200px;
     flex-shrink: 1;
   }
   
   .item2 {
     flex-basis: 200px;
     flex-shrink: 0;
   }
   
   .item3 {
     flex-basis: 400px;
     flex-shrink: 0;
   }
   ```

---

## Summary and Best Practices

### When to Use Flexbox
- **Perfect for:** One-dimensional layouts (either row or column)
- **Navigation bars**
- **Card layouts**
- **Centering content**
- **Responsive component layouts**

### Key Flexbox Concepts to Remember

1. **Container vs Items**: Properties apply to either parent or children
2. **Main vs Cross Axis**: Direction depends on flex-direction
3. **Flex-basis Priority**: Overrides width/height when set
4. **Grow/Shrink Behavior**: Controls flexibility
5. **Gap Property**: Modern way to add spacing

### Common Flexbox Patterns

#### Perfect Centering
```css
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### Equal Width Cards
```css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1;
}
```

#### Responsive Navigation
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
```

### Resources for Further Learning
- **CSS Tricks Flexbox Guide**: Complete visual reference
- **Flexbox Froggy**: Interactive game for practice
- **MDN Flexbox Documentation**: Comprehensive technical reference
- **Can I Use**: Browser support information

This complete guide covers all the essential Flexbox concepts with practical examples and exercises. Practice with the interactive tools and experiment with different property combinations to master Flexbox layout techniques.
