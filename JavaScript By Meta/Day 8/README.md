# Day — Loops, Array & Object Destructuring | Course 2: Programming with JavaScript

## What I Did Today

Covered three core JavaScript concepts: iterating over arrays and objects using loops, and destructuring both arrays and objects.

Course progress: **68% complete**

---

## Topics Covered

- **`for...of` loop** — iterating over arrays and iterables
- **`for...in` loop** — iterating over object properties including inherited ones
- **`Object.keys()`, `Object.values()`, `Object.entries()`** — extracting object data for iteration
- **Array Destructuring** — unpacking nested arrays into variables
- **Object Destructuring** — extracting object properties into named variables

---

## Files

| File | Description |
|------|-------------|
| `Loops.js` | Array & object iteration using `for...of`, `for...in`, and Object methods |
| `arrayDestructuring.js` | Destructuring properties from an object |
| `objectDestructuring.js` | Destructuring values from nested arrays |

---

## Code Summary

### Loops.js
- Used `for...of` to iterate over a plain array (`dairy`)
- Used `Object.keys()`, `Object.values()`, `Object.entries()` to iterate over object data
- Built `logDairy()`, `birdCan()`, `animalCan()` functions for the lab assessment
- `birdCan()` uses `for...of` + `Object.keys()` → own properties only
- `animalCan()` uses `for...in` → own + inherited properties via prototype chain

### arrayDestructuring.js
- Destructured `title`, `description`, `author`, `timePosted` from a `review` object
- Logged a formatted sentence using template literals

### objectDestructuring.js
- Destructured values from a nested array of products
- Extracted second product's name and price directly via pattern matching

---

## Key Takeaways

- `for...of` + `Object.keys()` = own properties only
- `for...in` climbs the prototype chain = own + inherited properties
- `Object.create()` links prototypes by reference, not by copy
- Destructuring makes extracting data from arrays/objects clean and concise