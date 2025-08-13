# Complete CSS Grid Tutorial Guide

## Table of Contents
1. [Introduction to CSS Grid](#introduction)
2. [Grid vs Flexbox](#grid-vs-flexbox)
3. [Creating Your First Grid](#first-grid)
4. [Grid Sizing Techniques](#grid-sizing)
5. [Grid Placement and Positioning](#grid-placement)
6. [Practical Exercises](#exercises)
7. [Final Project: Mondrian Painting](#mondrian-project)

---

## 1. Introduction to CSS Grid {#introduction}

### What is CSS Grid?
CSS Grid is a powerful 2-dimensional layout system that makes it easier to create complex web layouts. Unlike other CSS layout methods, Grid allows you to work with both rows and columns simultaneously.

### Why Use CSS Grid?
- **Complex Layouts Made Easy**: Create sophisticated layouts that would be difficult with Flexbox or floats
- **Responsive Design**: Built-in responsiveness with flexible sizing options
- **Precise Control**: Exact positioning and sizing of elements
- **Real-World Applications**: Used by major websites for complex layouts

### Real-World Example
The Swiss weather website demonstrates Grid's power - it has multiple sections arranged in a complex grid pattern that remains responsive across different screen sizes.

---

## 2. Grid vs Flexbox {#grid-vs-flexbox}

### Key Differences

| Aspect | Flexbox | CSS Grid |
|--------|---------|----------|
| **Dimension** | 1-dimensional (row OR column) | 2-dimensional (rows AND columns) |
| **Use Case** | Alignment along single axis | Complex layouts with rows and columns |
| **Behavior** | Flexible, adapts content size | Grid-like, maintains alignment |
| **Best For** | Navigation bars, centering items | Page layouts, card grids |

### When to Use Each
- **Flexbox**: Use for one-dimensional alignment (navbar items, centering content)
- **Grid**: Use for two-dimensional layouts (page structure, card layouts)
- **Together**: Often used in combination - Grid for overall layout, Flexbox for component alignment

### Interactive Demo
Visit the comparison: `appbrewery.github.io/grid-vs-flexbox/`
- Notice how Grid maintains strict alignment in rows and columns
- Flexbox items flow more flexibly, prioritizing content fit over alignment

---

## 3. Creating Your First Grid {#first-grid}

### Basic Grid Setup

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;  /* Two columns: 1:2 ratio */
    grid-template-rows: 1fr 1fr;     /* Two equal rows */
    gap: 10px;                       /* Space between items */
}
```

### Essential Properties
1. **`display: grid`** - Creates a grid container
2. **`grid-template-columns`** - Defines column sizes
3. **`grid-template-rows`** - Defines row sizes  
4. **`gap`** - Space between grid items

### Exercise 1: Chess Board Challenge

**Goal**: Create an 8×8 chess board using CSS Grid

**Starting HTML**:
```html
<div class="container">
    <!-- 64 divs with alternating "white" and "black" classes -->
    <div class="white"></div>
    <div class="black"></div>
    <!-- ...more divs... -->
</div>
```

**Solution**:
```css
/* Style the squares */
.white {
    height: 100px;
    width: 100px;
    background-color: #f0d9b5;
}

.black {
    height: 100px;
    width: 100px;
    background-color: #b58863;
}

/* Create the grid */
.container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    width: 800px;  /* Optional: prevent stretching */
}
```

**Key Learning Points**:
- Grid automatically flows items from left to right, top to bottom
- `repeat(8, 1fr)` creates 8 equal-sized tracks
- Container width prevents unwanted stretching

---

## 4. Grid Sizing Techniques {#grid-sizing}

### 4.1 Fixed Sizing

```css
.container {
    display: grid;
    grid-template-columns: 400px 800px;  /* Fixed pixel widths */
    grid-template-rows: 100px 200px;     /* Fixed pixel heights */
}
```

**Characteristics**:
- Not responsive
- Exact control over dimensions
- Can use `px`, `rem`, `em`

### 4.2 Auto Sizing

```css
.container {
    display: grid;
    grid-template-columns: 200px auto;  /* Second column fills remaining space */
    grid-template-rows: auto auto;      /* Rows fit content */
}
```

**Behavior**:
- **Columns with `auto`**: Expand to fill available horizontal space
- **Rows with `auto`**: Shrink to fit content height

### 4.3 Fractional Units (fr)

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;  /* Second column twice as wide */
    grid-template-rows: 1fr 1fr;     /* Equal height rows */
}
```

**Advantages**:
- Proportional sizing
- Responsive by default
- Easy to understand ratios

### 4.4 MinMax Function

```css
.container {
    display: grid;
    grid-template-columns: 400px minmax(400px, 800px);
}
```

**Purpose**:
- Set minimum and maximum limits
- Responsive within constraints
- Prevents content from becoming too narrow/wide

### 4.5 Repeat Function

```css
/* Instead of writing 1fr 1fr 1fr 1fr... */
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
}
```

**Benefits**:
- Reduces repetitive code
- Easy to modify number of tracks
- Cleaner, more maintainable code

### 4.6 Grid Template Shorthand

```css
/* Longhand */
.container {
    grid-template-rows: 100px 200px;
    grid-template-columns: 1fr 2fr;
}

/* Shorthand */
.container {
    grid-template: 100px 200px / 1fr 2fr;
    /*             rows        / columns  */
}
```

### 4.7 Auto Rows and Columns

```css
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 200px);
    grid-auto-rows: 300px;     /* Height for extra items */
    grid-auto-columns: 150px;  /* Width for extra items */
}
```

**Use Case**: When you have more items than defined grid cells

### Interactive Demo
Explore sizing at: `appbrewery.github.io/grid-sizing`

### Exercise 2: Grid Sizing Challenge

**Goal**: Create a responsive grid with specific sizing requirements

**Requirements**:
- 3 columns: expandable, fixed 400px, responsive between 200px-500px
- 4 rows: content-fit, content-fit, double-height, 50px fixed
- Extra items should be 50px high

**Solution**:
```css
.container {
    display: grid;
    grid-template-columns: auto 400px minmax(200px, 500px);
    grid-template-rows: 1fr 1fr 2fr;
    grid-auto-rows: 50px;
}
```

---

## 5. Grid Placement and Positioning {#grid-placement}

### 5.1 Grid Terminology

Before learning placement, understand these key terms:

- **Grid Container**: The parent element with `display: grid`
- **Grid Items**: Direct children of the grid container
- **Grid Tracks**: Rows and columns of the grid
- **Grid Cells**: Individual units formed by intersecting tracks
- **Grid Lines**: Lines that separate tracks (numbered starting from 1)

### 5.2 Chrome DevTools for Grid
Enable grid visualization:
1. Right-click on grid container → Inspect
2. Look for "grid" badge next to the element
3. Click to show grid overlay with line numbers and sizes

### 5.3 Grid Column and Row Placement

#### Basic Spanning
```css
.item1 {
    grid-column: span 2;  /* Spans 2 columns */
    grid-row: span 3;     /* Spans 3 rows */
}
```

#### Line-Based Placement
```css
.item1 {
    grid-column-start: 1;
    grid-column-end: 3;    /* From line 1 to line 3 */
    grid-row-start: 2;
    grid-row-end: 4;       /* From line 2 to line 4 */
}

/* Shorthand */
.item1 {
    grid-column: 1 / 3;    /* start / end */
    grid-row: 2 / 4;
}
```

#### Using Negative Line Numbers
```css
.item1 {
    grid-column: 1 / -1;   /* From first to last line */
    grid-row: 2 / -2;      /* From line 2 to second-to-last */
}
```

### 5.4 Grid Area Shorthand

```css
.item1 {
    grid-area: 2 / 1 / 4 / 3;
    /* grid-row-start / grid-column-start / grid-row-end / grid-column-end */
}
```

### 5.5 Order Property

```css
.item2 {
    order: 1;  /* Moves to end (default is 0) */
}
```

**Use Case**: Change visual order without changing HTML structure

### 5.6 Overlapping Items

```css
.item1 {
    grid-area: 1 / 1 / 3 / 3;
    background-color: rgba(255, 0, 0, 0.8);  /* Semi-transparent */
}

.item2 {
    grid-area: 2 / 2 / 4 / 4;  /* Overlaps with item1 */
    background-color: rgba(0, 255, 0, 0.8);
}
```

### Exercise 3: Grid Placement Practice

**Goal**: Create a complex layout with overlapping elements

**Steps**:
1. Create a 3×3 grid
2. Make first item span 2 columns
3. Position second item in bottom-left, spanning 2 columns
4. Make third item span 2 rows on the right side
5. Add overlapping semi-transparent element

**HTML Structure**:
```html
<div class="container">
    <div class="cowboy">🤠</div>
    <div class="astronaut">👨‍🚀</div>
    <div class="book">📚</div>
</div>
```

**CSS Solution**:
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    gap: 3rem;
    height: 100vh;
}

.container > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
}

.cowboy {
    grid-column: span 2;
    background-color: lightblue;
}

.astronaut {
    grid-column: span 2;
    order: 1;  /* Moves to bottom */
    background-color: lightgreen;
}

.book {
    grid-row: span 2;
    background-color: lightsalmon;
}
```

---

## 6. Practical Exercises {#exercises}

### Exercise 1: Grid Garden Game
Complete all 28 levels: `appbrewery.github.io/gridgarden/`

**Key Concepts Practiced**:
- `grid-column-start`, `grid-column-end`
- `grid-row-start`, `grid-row-end`
- `grid-area`
- `order`
- Negative line numbers
- Spanning multiple tracks

**Level Examples**:

**Level 1**: Basic column positioning
```css
#water {
    grid-column-start: 3;
}
```

**Level 5**: Using negative line numbers
```css
#water {
    grid-column-end: -2;
}
```

**Level 17**: Grid area shorthand
```css
#water {
    grid-area: 2 / 2 / 4 / 6;
}
```

---

## 7. Final Project: Mondrian Painting {#mondrian-project}

### Project Overview
Recreate Piet Mondrian's "Composition No. III with Red, Blue, Yellow and Black" using CSS Grid.

### Planning the Grid Structure

**Analysis**:
- 4 columns with specific widths: 320px, 200px, 220px, 60px
- 4 rows with specific heights: 414px, 130px, 155px, 60px
- 9 total grid items (rectangles)
- Colors: white (#FFFFFF), red (#E72F24), blue (#004592), yellow (#F9D71C)
- Black lines: 9px gap with black background

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mondrian Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="item" id="a"></div>
        <div class="item red" id="b"></div>
        <div class="item" id="c"></div>
        <div class="item" id="d"></div>
        <div class="item" id="e"></div>
        <div class="item yellow" id="f"></div>
        <div class="item blue" id="g"></div>
        <div class="item" id="h"></div>
        <div class="item" id="i"></div>
    </div>
</body>
</html>
```

### CSS Solution
```css
/* Center the painting on page */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

/* Grid container */
.container {
    display: grid;
    width: 748px;
    height: 748px;
    background-color: #000;  /* Black lines */
    grid-template-columns: 320px 198px 153px 68px;
    grid-template-rows: 414px 130px 155px 60px;
    gap: 9px;
}

/* Default white background */
.item {
    background-color: #FFFFFF;
}

/* Colored items */
.red {
    background-color: #E72F24;
}

.blue {
    background-color: #004592;
}

.yellow {
    background-color: #F9D71C;
}

/* Item positioning */
#a {
    grid-column: span 3;  /* Spans first 3 columns */
}

#c {
    grid-row: span 2;     /* Spans 2 rows vertically */
}

#d {
    grid-area: 2 / 1 / 4 / 3;  /* Complex positioning */
}

#f {
    grid-area: 3 / 3 / 4 / 4;  /* Yellow square */
}

#g {
    grid-area: 4 / 2 / 5 / 4;  /* Blue rectangle */
}
```

### Color Reference
```css
/* Mondrian Color Palette */
:root {
    --mondrian-red: #E72F24;
    --mondrian-blue: #004592;
    --mondrian-yellow: #F9D71C;
    --mondrian-white: #FFFFFF;
    --mondrian-black: #000000;
}
```

### Project Variations
Try creating other Mondrian compositions:
1. Search "Mondrian compositions" for inspiration
2. Analyze the grid structure
3. Measure proportions visually
4. Implement using CSS Grid

### Advanced Techniques Used
1. **Flexbox + Grid Combination**: Body uses Flexbox to center the Grid
2. **Background Color Trick**: Black background shows through gaps as "lines"
3. **Grid Area Positioning**: Precise placement using coordinate system
4. **Spanning**: Items span multiple rows/columns for complex shapes

---

## Key Takeaways

### When to Use CSS Grid
- ✅ Two-dimensional layouts (rows AND columns)
- ✅ Complex, structured layouts
- ✅ When alignment across multiple axes is important
- ✅ Card grids, image galleries
- ✅ Overall page structure

### When to Use Flexbox
- ✅ One-dimensional layouts (row OR column)
- ✅ Component-level alignment
- ✅ Navigation bars
- ✅ Centering content
- ✅ Space distribution

### Best Practices
1. **Start Simple**: Begin with basic grid-template properties
2. **Use DevTools**: Chrome Grid inspector is invaluable for debugging
3. **Combine Technologies**: Use Grid for layout, Flexbox for alignment
4. **Plan Your Grid**: Sketch the layout before coding
5. **Test Responsiveness**: Ensure your grid works across screen sizes

### Common Pitfalls
- Forgetting the 's' in `grid-template-rows` and `grid-template-columns`
- Confusing line numbers vs track numbers
- Not understanding how auto-placement works
- Overcomplicating simple layouts

### Performance Tips
- Grid is performant for layout calculations
- Avoid excessive nesting of grids
- Use `fr` units for responsive layouts
- Minimize use of `minmax()` for better performance

---

## Resources for Further Learning

### Interactive Tools
- Grid Garden: `appbrewery.github.io/gridgarden/`
- CSS Grid vs Flexbox: `appbrewery.github.io/grid-vs-flexbox/`
- Grid Sizing Demo: `appbrewery.github.io/grid-sizing`

### Reference Materials
- MDN CSS Grid Guide
- CSS Grid Complete Guide (CSS-Tricks)
- Grid by Example (Rachel Andrew)

### Browser Support
CSS Grid has excellent modern browser support:
- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+

---

*This tutorial covers the fundamentals of CSS Grid through practical examples and exercises. Practice with the provided exercises and experiment with your own layouts to master this powerful layout system.*
