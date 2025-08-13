# Complete Bootstrap Framework Guide

## Table of Contents
1. [Introduction to Bootstrap](#1-introduction-to-bootstrap)
2. [Bootstrap Layout System](#2-bootstrap-layout-system)
3. [Bootstrap Components](#3-bootstrap-components)
4. [Project: TinDog Startup Website](#4-project-tindog-startup-website)

---

## 1. Introduction to Bootstrap

### What is Bootstrap?

Bootstrap is a **CSS framework** created in 2010 by two Twitter developers, Mark Otto and Jacob Thornton. It's one of the most popular external CSS layout systems you'll encounter in web development.

### Key Features

#### Pre-made CSS Files
- Contains pre-built CSS files that you can include in your project
- Provides pre-built components and styling
- No need to write extensive custom CSS

#### 12-Column Layout System
- Built on top of Flexbox
- Makes creating responsive websites easy
- Follows a "Mobile First" approach
- Works great on both mobile and desktop

### How Bootstrap Works

**Before Bootstrap (Standard HTML):**
```html
<button>Home</button>
```
Result: Basic, unstyled button

**With Bootstrap:**
```html
<button class="btn btn-primary btn-lg">Home</button>
```
Result: Beautiful, pre-styled button with hover effects

### What are CSS Frameworks?

CSS frameworks are **pre-made CSS files** that you can include in your projects. They contain:
- Predefined styling for components
- Layout systems
- Color schemes
- Typography rules
- Responsive breakpoints

### Popular CSS Frameworks
1. **Bootstrap** - ~80% market share
2. **Foundation**
3. **MUI (Material-UI)**
4. **Tailwind CSS**

**Important Note:** Most websites still use native CSS (no external frameworks), so Bootstrap doesn't replace your CSS knowledge—it complements it.

### Pros of External CSS Frameworks

#### ✅ Advantages
- **Easy and Fast**: Quick development
- **Pre-built Components**: Cards, navbars, buttons, etc.
- **Consistent Styling**: Professional, on-brand appearance
- **Browser Compatibility**: Tested across all major browsers
- **Responsive Design**: Mobile-first approach built-in

#### ❌ Disadvantages
- **Class Bloat**: Many classes in HTML (violates separation of structure/style)
- **Limited Customization**: Harder to create pixel-perfect custom designs
- **Learning Curve**: Need to learn Bootstrap-specific classes

### When to Use Bootstrap

#### ✅ Use Bootstrap When:
- Building mobile-first responsive websites
- Need to launch quickly
- Want professional-looking components
- Prefer consistent, uniform design
- Working on business/startup websites

#### ❌ Avoid Bootstrap When:
- Building very simple websites
- Creating highly custom designs
- Need complete control over every pixel
- Working on artistic/creative projects

### Getting Started with Bootstrap

#### Method 1: CDN Links (Recommended for Beginners)

**CSS Link (in `<head>`):**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

**JavaScript Link (before closing `</body>`):**
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

#### What is CDN?
**Content Delivery Network** - A network of servers worldwide that:
- Stores Bootstrap files
- Delivers content from the closest server to users
- Provides fast loading times
- Reduces bandwidth usage

### Hands-on Exercise: Bootstrap Card

**Goal:** Create a sunflower card component using Bootstrap

**Starting HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Card</title>
    <!-- TODO 1: Add Bootstrap CSS link -->
</head>
<body>
    <!-- TODO 2: Add Bootstrap card component -->
    <!-- TODO 3: Change image source to flower.jpeg -->
    <!-- TODO 4: Center the card using Flexbox -->
</body>
</html>
```

**Solution:**

**Step 1 - Add Bootstrap CSS:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

**Step 2 - Add Bootstrap Card:**
```html
<div class="flex-container">
    <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
```

**Step 3 - Fix Image:**
```html
<img src="flower.jpeg" class="card-img-top" alt="Beautiful sunflower">
```

**Step 4 - Center with Flexbox:**
```html
<style>
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
```

### Important CSS Override Rules

When customizing Bootstrap styles:

1. **Internal Styles**: Higher specificity than external CSS
2. **Inline Styles**: Highest specificity
3. **External CSS Order**: Your custom CSS must come AFTER Bootstrap CSS

```html
<!-- Bootstrap CSS first -->
<link href="bootstrap.min.css" rel="stylesheet">
<!-- Your custom CSS second -->
<link href="./css/style.css" rel="stylesheet">
```

---

## 2. Bootstrap Layout System

### The 12-Column Grid System

Bootstrap's layout system consists of three main components:

#### 1. Container
```html
<div class="container">
    <!-- Content goes here -->
</div>
```

#### 2. Row
```html
<div class="container">
    <div class="row">
        <!-- Columns go here -->
    </div>
</div>
```

#### 3. Columns
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

### Container Types

#### Standard Container
```html
<div class="container"></div>
```
- Responsive fixed-width container
- Has margins on left and right
- Width changes based on screen size

#### Container Breakpoints
```html
<div class="container-sm"></div>    <!-- 100% width below 576px -->
<div class="container-md"></div>    <!-- 100% width below 768px -->
<div class="container-lg"></div>    <!-- 100% width below 992px -->
<div class="container-xl"></div>    <!-- 100% width below 1200px -->
<div class="container-xxl"></div>   <!-- 100% width below 1400px -->
<div class="container-fluid"></div> <!-- 100% width at all sizes -->
```

### Column Sizing

#### Equal Width Columns
```html
<div class="row">
    <div class="col">1 of 3</div>
    <div class="col">2 of 3</div>
    <div class="col">3 of 3</div>
</div>
```

#### Sized Columns (out of 12)
```html
<div class="row">
    <div class="col-2">2/12 width</div>
    <div class="col-4">4/12 width</div>
    <div class="col-6">6/12 width</div>
</div>
```

### Bootstrap Breakpoints

| Breakpoint | Class | Screen Size |
|------------|-------|-------------|
| Extra Small | `xs` | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| Extra Large | `xl` | ≥1200px |
| Extra Extra Large | `xxl` | ≥1400px |

### Responsive Columns

#### Single Breakpoint
```html
<div class="col-sm-6">
    <!-- 50% width on small screens and up, 100% on extra small -->
</div>
```

#### Multiple Breakpoints
```html
<div class="col-sm-12 col-md-8 col-lg-4">
    <!-- 100% on small, 66% on medium, 33% on large -->
</div>
```

#### Mixed Column Types
```html
<div class="row">
    <div class="col-2">Fixed 2/12</div>
    <div class="col-4">Fixed 4/12</div>
    <div class="col">Auto-adjusts to remaining space</div>
</div>
```

### Hands-on Exercises: Bootstrap Layout

**Interactive Practice:** Visit `appbrewery.github.io/bootstrap-layout`

#### Exercise 1: 50% Desktop, 100% Mobile
**Goal:** Two columns that are 50% width on desktop, 100% on mobile

**HTML Structure:**
```html
<div class="container">
    <div class="row">
        <div class="col-xl-6">Column 1</div>
        <div class="col-xl-6">Column 2</div>
    </div>
</div>
```

**Explanation:**
- `col-xl-6`: 50% width (6/12) on extra-large screens and up
- Below xl breakpoint: defaults to 100% width (col-12)

#### Exercise 2: Complex Multi-Breakpoint Layout
**Goal:** 
- Large screens: 50%, 25%, 25%
- Small screens: 100%, 50%, 50%

**Solution:**
```html
<div class="row">
    <div class="col-lg-6 col-sm-12">Column 1</div>
    <div class="col-lg-3 col-sm-6">Column 2</div>
    <div class="col-lg-3 col-sm-6">Column 3</div>
</div>
```

#### Exercise 3: Progressive Sizing
**Goal:** Different proportions at each breakpoint

**Solution:**
```html
<div class="row">
    <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-6">Progressive Column 1</div>
    <div class="col-xxl-11 col-xl-10 col-lg-8 col-md-6">Progressive Column 2</div>
</div>
```

### Debugging Responsive Design

#### Using Chrome DevTools
1. Press F12 to open DevTools
2. Click device toggle button
3. Select "Responsive"
4. Drag width slider to test breakpoints
5. Watch width indicator at top

#### Tips for Breakpoint Testing
- Test at exactly 576px, 768px, 992px, 1200px, 1400px
- Use visual cues to identify which breakpoint activated
- Remember: breakpoints target "this size and up"

---

## 3. Bootstrap Components

### Overview

Bootstrap components are **pre-built, pre-styled UI elements** that you can add to your website by simply applying CSS classes. They're the main reason developers choose Bootstrap.

### Bootstrap Color Scheme

Bootstrap uses a consistent color system across all components:

| Color | Class | Use Case |
|-------|-------|----------|
| Primary | `btn-primary` | Main actions (blue) |
| Secondary | `btn-secondary` | Secondary actions (gray) |
| Success | `btn-success` | Positive actions (green) |
| Danger | `btn-danger` | Destructive actions (red) |
| Warning | `btn-warning` | Caution actions (yellow) |
| Info | `btn-info` | Informational (cyan) |
| Light | `btn-light` | Light theme |
| Dark | `btn-dark` | Dark theme |

### Buttons

#### Basic Button Structure
```html
<button class="btn btn-[color]">Button Text</button>
```

#### Button Examples
```html
<!-- Solid buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>

<!-- Outline buttons -->
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-success">Outline Success</button>

<!-- Button sizes -->
<button class="btn btn-primary btn-lg">Large Button</button>
<button class="btn btn-primary">Default Button</button>
<button class="btn btn-primary btn-sm">Small Button</button>

<!-- Block button (full width) -->
<button class="btn btn-primary d-grid">Block Button</button>
```

#### Quick Exercise: Green OK Button
**Goal:** Create a green "OK" button using Bootstrap

**Solution:**
```html
<button class="btn btn-success">OK</button>
```

### Cards

Cards are flexible content containers with multiple variants and options.

#### Basic Card Structure
```html
<div class="card" style="width: 18rem;">
    <img src="image.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Card description text.</p>
        <a href="#" class="btn btn-primary">Action Button</a>
    </div>
</div>
```

#### Card Variations
```html
<!-- Card with header -->
<div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Content</p>
    </div>
</div>

<!-- Card with footer -->
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Content</p>
    </div>
    <div class="card-footer text-muted">Footer</div>
</div>
```

### Navbars

#### Standard Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <!-- Brand -->
        <a class="navbar-brand" href="#">Brand</a>
        
        <!-- Toggle button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Navbar items -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Service 1</a></li>
                        <li><a class="dropdown-item" href="#">Service 2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

#### Navbar with Brand Image
```html
<a class="navbar-brand" href="#">
    <img src="logo.svg" alt="Brand" height="30">
    Brand Name
</a>
```

### Bootstrap Icons

Bootstrap provides free SVG icons that you can use in your projects.

#### Using Bootstrap Icons
1. Visit: `icons.getbootstrap.com`
2. Search for desired icon
3. Copy SVG code or download

#### Icon Examples
```html
<!-- Search icon -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

<!-- Heart icon -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.011L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
```

### Practical Example: Move It Website

Let's build a complete section-by-section moving company website using Bootstrap components.

#### 1. Navbar Section
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <!-- Brand with icon -->
        <a class="navbar-brand" href="#">
            <img src="box-seam.svg" alt="Move It brand icon" height="30">
            Move It
        </a>
        
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Navigation items -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Van Moving</a></li>
                        <li><a class="dropdown-item" href="#">Self Moving</a></li>
                    </ul>
                </li>
            </ul>
            
            <!-- Search form -->
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Postcode">
                <button class="btn btn-outline-success" type="submit">Check</button>
            </form>
        </div>
    </div>
</nav>

<!-- Don't forget JavaScript for functionality -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

#### 2. Hero Section
```html
<div class="container">
    <div class="row pt-5">
        <div class="col-lg-6">
            <h1 class="display-4 fw-bold">Move With Joy</h1>
            <p class="lead">Effortless relocation services for your next big move. We handle the heavy lifting while you focus on settling into your new space.</p>
            <div class="d-grid gap-2 d-md-flex">
                <button class="btn btn-light btn-lg px-4 me-md-2">Get a quote</button>
                <button class="btn btn-outline-light btn-lg px-4">Contact Us</button>
            </div>
        </div>
        <div class="col-lg-6">
            <img src="moving-van.jpg" class="img-fluid" alt="Moving van">
        </div>
    </div>
</div>
```

#### 3. Features Section
```html
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-4">
            <div class="d-flex align-items-center mb-3">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient">
                    <img src="briefcase.svg" alt="Professional" height="30">
                </div>
                <h3 class="ms-3">Professional</h3>
            </div>
            <p>Our team of professional movers ensures your belongings are handled with care.</p>
        </div>
        
        <div class="col-lg-4">
            <div class="d-flex align-items-center mb-3">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient">
                    <img src="bus-front.svg" alt="Countrywide" height="30">
                </div>
                <h3 class="ms-3">Countrywide</h3>
            </div>
            <p>We provide moving services across the entire country, no location too remote.</p>
        </div>
        
        <div class="col-lg-4">
            <div class="d-flex align-items-center mb-3">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient">
                    <img src="chat-square-heart.svg" alt="Personal Touch" height="30">
                </div>
                <h3 class="ms-3">Personal Touch</h3>
            </div>
            <p>Every move is unique. We tailor our services to meet your specific needs.</p>
        </div>
    </div>
</div>

<!-- Custom CSS for feature icons -->
<style>
.feature-icon {
    width: 4rem;
    height: 4rem;
    border-radius: .75rem;
    background-color: #007bff;
}
</style>
```

### Bootstrap Examples and Snippets

Bootstrap provides ready-made examples at `getbootstrap.com/docs/examples/`:

#### Useful Example Categories:
- **Heroes**: Landing page sections
- **Features**: Feature showcase sections  
- **Headers**: Different navbar styles
- **Footers**: Footer layouts
- **Pricing**: Pricing table layouts
- **Blog**: Blog layouts
- **Dashboard**: Admin layouts

#### How to Use Examples:
1. Find desired layout in examples
2. Right-click → Inspect Element
3. Find the container div that includes everything you want
4. Copy element HTML
5. Paste into your project
6. Customize text, images, and colors

### Carousel Component

#### Basic Carousel
```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
    </div>
    
    <!-- Slides -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="couple.jpg" class="d-block w-100" alt="Couple">
        </div>
        <div class="carousel-item">
            <img src="dog.jpg" class="d-block w-100" alt="Dog">
        </div>
        <div class="carousel-item">
            <img src="family.jpg" class="d-block w-100" alt="Family">
        </div>
    </div>
    
    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```

### Bootstrap Utility Classes

#### Spacing System
Bootstrap uses a standardized spacing system with the format: `{property}{sides}-{size}`

**Properties:**
- `m` - margin
- `p` - padding

**Sides:**
- `t` - top
- `b` - bottom  
- `s` - start (left in LTR)
- `e` - end (right in LTR)
- `x` - horizontal (left and right)
- `y` - vertical (top and bottom)
- blank - all sides

**Sizes:**
- `0` - eliminate spacing
- `1` - 0.25rem
- `2` - 0.5rem  
- `3` - 1rem
- `4` - 1.5rem
- `5` - 3rem

#### Spacing Examples
```html
<div class="mt-3">Margin top 3</div>
<div class="px-4">Padding horizontal 4</div>
<div class="my-2">Margin vertical 2</div>
<div class="pb-5">Padding bottom 5</div>
```

### Dark Mode

Bootstrap 5.3+ supports dark mode with a simple attribute:

```html
<html lang="en" data-bs-theme="dark">
<!-- All content automatically switches to dark theme -->
</html>
```

You can also apply dark mode to specific sections:
```html
<div data-bs-theme="dark">
    <!-- Only this section will be dark -->
</div>
```

---

## 4. Project: TinDog Startup Website

### Project Overview

**Company:** TinDog - "Tinder for Dogs"  
**Goal:** Build a complete startup landing page  
**Live Demo:** `appbrewery.github.io/tindog`

### Project Features:
- Animated gradient background
- Responsive design
- App download buttons
- Features section
- Testimonials
- Pricing plans
- Professional footer

### Project Structure

```
tindog/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── iphone.png
│   ├── dog-img.jpg
│   ├── techcrunch.png
│   ├── mashable.png
│   ├── bizinsider.png
│   └── tnw.png
└── README.md (contains copy text and SVGs)
```

### Starting Template

```html
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TinDog</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Title Section -->
    <section id="title" class="gradient-background">
        <!-- Navbar and hero content goes here -->
    </section>
    
    <!-- Features Section -->
    <section id="features" class="container-fluid">
        <!-- Feature cards go here -->
    </section>
    
    <!-- Testimonial Section -->
    <section id="testimonial" class="gradient-background">
        <!-- Customer testimonials go here -->
    </section>
    
    <!-- Pricing Section -->
    <section id="pricing">
        <!-- Pricing cards go here -->
    </section>
    
    <!-- Footer -->
    <footer class="gradient-background">
        <!-- Footer content goes here -->
    </footer>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Pre-built CSS: Gradient Background

```css
/* In style.css */
.gradient-background {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
```

### Step-by-Step Build Process

#### Step 1: Title Section (Hero)

**Goal:** Create hero section with heading, buttons, and phone image

**Process:**
1. Find similar layout in Bootstrap Examples → Heroes
2. Copy HTML structure
3. Add Bootstrap CSS link
4. Customize content

**Code:**
```html
<section id="title" class="gradient-background">
    <div class="container pt-5">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="display-4 fw-bold text-white">Meet new and interesting dogs nearby.</h1>
                <button class="btn btn-light btn-lg me-3">
                    <!-- Apple icon SVG -->
                    Download
                </button>
                <button class="btn btn-outline-light btn-lg">
                    <!-- Google Play icon SVG -->
                    Download
                </button>
            </div>
            <div class="col-lg-6">
                <img src="images/iphone.png" alt="app demo" height="400" class="img-fluid">
            </div>
        </div>
    </div>
</section>
```

#### Step 2: Features Section

**Goal:** Three feature columns with icons and descriptions

**Process:**
1. Use Bootstrap Examples → Features
2. Copy three-column layout
3. Replace SVGs with custom icons
4. Add custom CSS for icon styling

**Code:**
```html
<section id="features" class="container mt-5">
    <div class="row text-center">
        <div class="col-lg-4">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-3 mb-3">
                <!-- Bullseye SVG -->
            </div>
            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
        </div>
        
        <div class="col-lg-4">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-3 mb-3">
                <!-- Heart SVG -->
            </div>
            <h3>Guaranteed to work</h3>
            <p>Find the love of your dog's life or your money back.</p>
        </div>
    </div>
</section>

<!-- Custom CSS for feature icons -->
<style>
.feature-icon {
    width: 4rem;
    height: 4rem;
}
</style>
```

#### Step 3: Testimonials Section

**Goal:** Customer testimonial with profile image and company logos

**Process:**
1. Use Bootstrap Examples → Jumbotrons
2. Add testimonial content
3. Create responsive logo grid
4. Style profile image as circular

**Code:**
```html
<section id="testimonial" class="gradient-background text-center py-5">
    <div class="container">
        <h2 class="text-white">"I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof."</h2>
        <img src="images/dog-img.jpg" alt="dog testimonial" class="profile-img mt-5">
        <p class="text-white mt-2">Pebbles, New York</p>
    </div>
    
    <!-- Press logos -->
    <div class="container mt-5">
        <div class="row text-center">
            <div class="col-lg-3 col-sm-12">
                <img src="images/techcrunch.png" alt="TechCrunch" height="30">
            </div>
            <div class="col-lg-3 col-sm-12">
                <img src="images/tnw.png" alt="TNW" height="30">
            </div>
            <div class="col-lg-3 col-sm-12">
                <img src="images/bizinsider.png" alt="Business Insider" height="30">
            </div>
            <div class="col-lg-3 col-sm-12">
                <img src="images/mashable.png" alt="Mashable" height="30">
            </div>
        </div>
    </div>
</section>

<style>
.profile-img {
    height: 100px;
    border-radius: 50%;
}
</style>
```

#### Step 4: Pricing Section

**Goal:** Three pricing cards with different plans

**Process:**
1. Use Bootstrap Examples → Pricing
2. Copy three-card layout
3. Customize content for dog app
4. Change color scheme to dark theme

**Code:**
```html
<section id="pricing" class="container my-5">
    <div class="text-center mb-5">
        <h2 class="display-4">A Plan for Every Dog's Needs</h2>
        <p class="fs-5 text-muted">Simple and affordable price plans for you and your dog.</p>
    </div>
    
    <div class="row text-center">
        <!-- Chihuahua Plan -->
        <div class="col-lg-4 col-md-6">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Chihuahua</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>5 Matches Per Day</li>
                        <li>10 Messages Per Day</li>
                        <li>Unlimited App Usage</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
                </div>
            </div>
        </div>
        
        <!-- Labrador Plan -->
        <div class="col-lg-4 col-md-6">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Labrador</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$49<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Unlimited Matches</li>
                        <li>Unlimited Messages</li>
                        <li>Unlimited App Usage</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-dark">Get started</button>
                </div>
            </div>
        </div>
        
        <!-- Mastiff Plan -->
        <div class="col-lg-4">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Mastiff</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$99<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Pirority Listing</li>
                        <li>Unlimited Matches</li>
                        <li>Unlimited Messages</li>
                        <li>Unlimited App Usage</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-dark">Contact us</button>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### Step 5: Footer Section

**Goal:** Simple footer with copyright and social links

**Process:**
1. Use Bootstrap Examples → Footers
2. Simplify to basic copyright footer
3. Add gradient background
4. Remove unnecessary elements

**Code:**
```html
<footer class="gradient-background text-center py-4 mt-5">
    <div class="container">
        <p class="text-white mb-0">© TinDog</p>
    </div>
</footer>
```

### Complete Project Code

**Final index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TinDog</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Title Section -->
    <section id="title" class="gradient-background">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold text-white">Meet new and interesting dogs nearby.</h1>
                    <button class="btn btn-light btn-lg me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-.827 1.773-1.717.447-.89.793-1.777.793-1.777z"/>
                        </svg>
                        Download
                    </button>
                    <button class="btn btn-outline-light btn-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
                            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295zM1 13.396V2.604c0-.48.19-.94.53-1.268L8.32 8 1.53 14.664A1.991 1.991 0 0 1 1 13.396zM8.32 8 1.03 1.27C1.9.665 3.059 1.246 3.333 2.275L10.627 6.57 8.32 8z"/>
                        </svg>
                        Download
                    </button>
                </div>
                <div class="col-lg-6 text-center">
                    <img src="images/iphone.png" alt="app demo" class="img-fluid" style="height: 400px;">
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="container mt-5">
        <div class="row text-center">
            <div class="col-lg-4 mb-4">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </div>
                <h3 class="fs-2">Easy to use.</h3>
                <p>So easy to use, even your dog could do it.</p>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                        <path d="M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
                <h3 class="fs-2">Elite Clientele</h3>
                <p>We have all the dogs, the greatest dogs.</p>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </div>
                <h3 class="fs-2">Guaranteed to work.</h3>
                <p>Find the love of your dog's life or your money back.</p>
            </div>
        </div>
    </section>

    <!-- Testimonial Section -->
    <section id="testimonial" class="gradient-background text-center py-5">
        <div class="container">
            <h2 class="text-white mb-4">"I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof."</h2>
            <img src="images/dog-img.jpg" alt="dog testimonial" class="profile-img mt-5 mb-2">
            <p class="text-white">Pebbles, New York</p>
        </div>

        <!-- Press Section -->
        <div class="container mt-5">
            <div class="row text-center">
                <div class="col-lg-3 col-md-6 mb-3">
                    <img src="images/techcrunch.png" alt="TechCrunch" height="30" class="img-fluid">
                </div>
                <div class="col-lg-3 col-md-6 mb-3">
                    <img src="images/tnw.png" alt="TNW" height="30" class="img-fluid">
                </div>
                <div class="col-lg-3 col-md-6 mb-3">
                    <img src="images/bizinsider.png" alt="Business Insider" height="30" class="img-fluid">
                </div>
                <div class="col-lg-3 col-md-6 mb-3">
                    <img src="images/mashable.png" alt="Mashable" height="30" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="container my-5">
        <div class="text-center mb-5">
            <h2 class="display-4">A Plan for Every Dog's Needs</h2>
            <p class="fs-5 text-muted">Simple and affordable price plans for your dog and their dating life.</p>
        </div>

        <div class="row text-center">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Chihuahua</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>5 Matches Per Day</li>
                            <li>10 Messages Per Day</li>
                            <li>Unlimited App Usage</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Labrador</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$49<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Unlimited Matches</li>
                            <li>Unlimited Messages</li>
                            <li>Unlimited App Usage</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-dark">Get started</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="card rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Mastiff</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$99<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Priority Listing</li>
                            <li>Unlimited Matches & Messages</li>
                            <li>Unlimited App Usage</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-dark">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="gradient-background text-center py-4">
        <div class="container">
            <p class="text-white mb-0">© TinDog</p>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Complete style.css:**
```css
/* Animated gradient background */
.gradient-background {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Feature icons */
.feature-icon {
    width: 4rem;
    height: 4rem;
}

/* Profile image styling */
.profile-img {
    height: 100px;
    border-radius: 50%;
}

/* Card hover effects */
.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .display-4 {
        font-size: 2rem;
    }
    
    #title img {
        height: 300px !important;
        margin-top: 2rem;
    }
}
```

### Key Learning Points from TinDog Project

#### 1. **Project Planning**
- Break website into logical sections
- Use Bootstrap Examples as starting points
- Plan responsive behavior early

#### 2. **Bootstrap Integration**
- Always include Bootstrap CSS before custom CSS
- Use Bootstrap Examples liberally
- Combine components for complex layouts

#### 3. **Customization Techniques**
- Override Bootstrap with custom CSS classes
- Use utility classes for quick adjustments
- Maintain Bootstrap's responsive behavior

#### 4. **Responsive Design**
- Test at all Bootstrap breakpoints
- Use Chrome DevTools for debugging
- Design mobile-first, enhance for desktop

#### 5. **Performance Optimization**
- Use CDN for Bootstrap files
- Minimize custom CSS
- Optimize images appropriately

### Advanced Bootstrap Features

#### Custom Bootstrap Themes
- Official themes available at `themes.getbootstrap.com`
- Third-party marketplaces like ThemeForest
- Free templates from various sources

#### Building Your Own Components
- Study Bootstrap's component structure
- Create reusable custom components
- Maintain Bootstrap's naming conventions

#### Bootstrap vs. Other Solutions

**When to Use Bootstrap:**
- Rapid prototyping
- Business/startup websites
- Teams needing consistency
- Limited design resources

**When to Use Alternatives:**
- Highly custom designs
- Performance-critical applications
- Unique brand requirements
- Complex interactive features

### Conclusion

Bootstrap is a powerful framework that enables rapid development of professional, responsive websites. The key to mastering Bootstrap is:

1. **Understanding the Grid System**: Master the 12-column layout
2. **Learning Components**: Know the pre-built components available
3. **Practicing Customization**: Learn when and how to override Bootstrap styles
4. **Responsive Thinking**: Always consider mobile-first design
5. **Leveraging Examples**: Use Bootstrap's examples as starting points

Through the TinDog project, you've learned to build a complete startup website using Bootstrap's components, layout system, and utility classes. This foundation will serve you well in future web development projects, whether using Bootstrap or other frameworks.

The beauty of Bootstrap lies in its ability to make professional web design accessible to developers at all skill levels, while still allowing for customization and creativity when needed.-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-3 mb-3">
                <!-- Checkmark SVG -->
            </div>
            <h3>Easy to use</h3>
            <p>So easy to use, even your dog could do it.</p>
        </div>
        
        <div class="col-lg-4">
            <div class="feature
