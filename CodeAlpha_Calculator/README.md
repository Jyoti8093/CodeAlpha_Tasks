# CodeAlpha Task 2 - Calculator

## Project Overview

This project is a responsive Calculator Application developed as part of my CodeAlpha Internship.

The calculator provides a clean user interface for performing common arithmetic operations and supports both button-based and keyboard-based input.

---

## Objective

The objective of this project is to develop a functional calculator using HTML, CSS, and JavaScript while maintaining a clean and organized project structure.

The project demonstrates:

- User interface development
- JavaScript event handling
- Arithmetic operations
- Keyboard input handling
- Responsive web design
- Separation of CSS and JavaScript files

---

## Technologies Used

- HTML5 - Calculator structure
- CSS3 - Styling and responsive design
- JavaScript - Calculator logic and interaction
- Google Fonts - Typography

---

## Features

### Basic Arithmetic Operations

The calculator supports:

- Addition
- Subtraction
- Multiplication
- Division

### Additional Functions

The calculator also includes:

- Percentage
- Decimal numbers
- Positive/negative toggle
- Clear
- Backspace
- Equals

### Keyboard Support

The application includes keyboard input functionality, allowing users to interact with the calculator using their keyboard.

### Responsive Interface

The calculator interface adapts to different screen sizes, including mobile devices.

---

## Project Structure

```text
CodeAlpha_Calculator/
│
├── README.md
├── index.html
│
├── css/
│   ├── style.css
│   ├── calculator.css
│   └── responsive.css
│
└── js/
    ├── app.js
    ├── calculator.js
    └── keyboard.js
```

---

## File Description

### index.html

Contains the main structure of the calculator, including:

- Calculator heading
- Display area
- Calculator buttons
- CSS references
- JavaScript references

### css/style.css

Contains general page styling, layout rules, button behavior, and base styles.

### css/calculator.css

Contains the main calculator interface styling, display styling, button grid, operators, and calculator-specific UI elements.

### css/responsive.css

Contains responsive styles for smaller screen sizes.

### js/calculator.js

Contains the main calculator functionality and arithmetic operations.

### js/keyboard.js

Handles keyboard-based calculator input.

### js/app.js

Contains application initialization and supporting application-level functionality.

---

## How to Run

### Method 1 - Browser

1. Download or clone this repository.
2. Open the `CodeAlpha_Calculator` folder.
3. Make sure the `css` and `js` folders remain in their original locations.
4. Open `index.html` in a web browser.

### Method 2 - Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension.
3. Open `index.html`.
4. Click "Go Live".
5. The calculator will open in your browser.

---

## Calculator Layout

```text
┌─────────────────────────┐
│       Calculator        │
├─────────────────────────┤
│       Expression        │
│          Result         │
├─────┬─────┬─────┬───────┤
│ AC  │  ⌫  │  %  │   ÷   │
├─────┼─────┼─────┼───────┤
│  7  │  8  │  9  │   ×   │
├─────┼─────┼─────┼───────┤
│  4  │  5  │  6  │   −   │
├─────┼─────┼─────┼───────┤
│  1  │  2  │  3  │   +   │
├─────┼─────┼─────┼───────┤
│  ±  │  0  │  .  │   =   │
└─────┴─────┴─────┴───────┘
```

---

## Internship

This project was developed as Task 2 of my CodeAlpha Internship to gain practical experience in JavaScript programming, event handling, and responsive front-end development.

---

## Author

**Jyotiraditya Sahoo**

GitHub: [Jyoti8093](https://github.com/Jyoti8093)
