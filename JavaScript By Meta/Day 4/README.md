# Day 4 - Meta Frontend Developer Course

**Course Progress:** 53% → ongoing | Course 2
**Date:** June 8, 2026
**Topic:** Functional Programming, Scopes, Recursion & Revision

---

## Files Overview

### 1. `scopes.js` — Scopes
Covers variable visibility and lifetime in JavaScript.

- **Global scope** — variables declared outside functions, accessible everywhere
- **Local scope** — variables declared inside functions, only accessible within
- **Block scope** — introduced in ES6 using `let` and `const`, scoped to the block `{}` they're declared in
- Example: `var` vs `let` inside an `if` block showing scope difference

---

### 2. `fpParadigm.js` — Functional Programming Paradigm
Covers the core ideas behind FP and how it differs from OOP.

- **FP** — data and functions are kept separate
- **OOP** — data and functions are grouped inside objects (using `this`)
- **First-class functions** — functions can be assigned to variables, passed as arguments, returned from other functions
- **Higher-order functions** — functions that accept other functions as arguments
- Example: `randomNum` and `specificNum` passed into `addTwoNums` dynamically

---

### 3. `FunctionalProgram.js` — Functional Programming Tasks
Console styling assignment using function composition.

- `consoleStyler()` — builds a styled `console.log` message using `%c` and template literals
- `celebrateStyler()` — logs themed messages based on a reason argument
- `styleAndCelebrate()` — composes both functions together
- Demonstrates passing functions and building output through chaining calls

---

### 4. `recursiveFunctions.js` — Recursive Functions
Covers recursion — functions that call themselves.

- Infinite recursion problem and fix using a counter
- **Base case** — stopping condition that prevents infinite recursion
- **Recursive case** — breaks problem into smaller instances of itself
- Example: Fibonacci sequence using `fib(n-1) + fib(n-2)`

---

### 5. `revisionPractice.js` — Revision & Practice
Consolidation of defensive programming and array methods.

- `typeof` results for all primitive types + gotchas (`null` and `[]` both return `"object"`)
- Defensive checks for number, string, array, and non-null object
- `.map()` — transforms every element, returns new array
- `.find()` — returns first matching element or `undefined`

---

## Key Takeaways

- `var` is function scoped; `let`/`const` are block scoped
- Functions in JS are first-class — treat them like any other value
- Recursion needs a base case or it runs forever
- `typeof null === "object"` is a JS quirk — always handle null separately
- `.map()` transforms, `.find()` searches — know which one to reach for
