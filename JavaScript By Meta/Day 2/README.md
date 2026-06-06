# Day 2 - Meta Frontend Developer Course

**Course Progress:** 31% through Course 2
**Date:** June 6, 2026
**Topic:** Core JavaScript Concepts — Module 2 Complete

---

## Files Overview

### 1. `loops.js` — Loops
Covers the two main loop types in JavaScript and nested loop patterns.

- `for` loop with increment/decrement
- `while` loop with external counter
- Nested loops (2-week × 7-day printer)
- Loops combined with `if-else` and `switch` (medal ranking task)

---

### 2. `functions.js` — Functions
Covers defining and calling reusable blocks of code.

- Basic function declaration and invocation
- Functions with parameters
- Example: `sum(a, b)` — adds two values and logs the result

---

### 3. `arrays.js` — Arrays
Covers ordered data storage and iteration.

- Array declaration and `for` loop iteration
- `push()` — adds element to end of array
- `pop()` — removes last element from array
- Practice task: `letterFinder(word, match)` — finds character matches at each index

---

### 4. `objects.js` — Objects
Covers key-value pair data structures.

- Object declaration with property-value pairs
- Dot notation to add/access properties
- Bracket notation to add/access properties
- Example: `assistantManager` object with skill ratings

---

### 5. `mathObjectCheatsheet.js` — Math Object Cheatsheet
Reference file for the built-in Math object.

| Category | Methods / Properties |
|----------|----------------------|
| Constants | `Math.PI`, `Math.E`, `Math.LN2` |
| Rounding | `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.trunc()` |
| Arithmetic | `Math.pow()`, `Math.sqrt()`, `Math.abs()`, `Math.max()`, `Math.min()` |
| Trigonometry | `Math.sin()`, `Math.cos()`, `Math.tan()` |
| Random | `Math.random()` |

---

### 6. `stringCheatsheet.js` — String Object Cheatsheet
Reference file for built-in String methods.

| Method | Description |
|--------|-------------|
| `.length` | Returns length of a string |
| `.charAt()` | Returns character at a given index |
| `.indexOf()` | First occurrence of a value |
| `.lastIndexOf()` | Last occurrence of a value |
| `.concat()` | Joins two or more strings |
| `.toUpperCase()` | Converts string to uppercase |
| `.toLowerCase()` | Converts string to lowercase |
| `.split()` | Splits string into an array |

---

### 7. `randomIntGenerator.js` — Random Integer Generator
Mini utility combining `Math.random()` and `Math.ceil()` to generate a random integer between 1 and 10.

```javascript
var num = Math.random() * 10;
var randomInt = Math.ceil(num);
```

---

## Key Takeaways

- Use `for` when iteration count is known; `while` when driven by a condition
- Functions keep code DRY — declare once, call anywhere
- Arrays are ordered and mutable; use `push`/`pop` for end operations
- Objects store related data as key-value pairs; access via dot or bracket notation
- `Math` and `String` are powerful built-in objects with ready-to-use methods
