# Day — OOP Assessment | Course 2: Programming with JavaScript

## What I Did Today

Completed the **graded assessment** for Module 2 of Course 2 (Programming with JavaScript) in the Meta Front-End Developer Professional Certificate.

Course progress: **68% complete**

---

## Topics Covered

- **OOP with ES6 Classes** — `class`, `constructor`, default parameters
- **Inheritance** — `extends` keyword, `super()` call
- **Instance Methods** — defining behavior on class prototypes
- **Object Instantiation** — creating objects from custom classes

---

## Files

| File | Description |
|------|-------------|
| `assessment.js` | OOP assessment — Person & Worker class hierarchy |

---

## Code Summary

### Task 1 — `Person` class
Base class with `name`, `age`, `energy` properties (with defaults).  
Methods: `sleep()` (+10 energy), `doSomethingFun()` (-10 energy).

### Task 2 — `Worker` class
Extends `Person`. Adds `xp` and `hourlyWage` properties.  
Method: `goToWork()` (+10 xp).

### Task 3 — `intern()` function
Creates a Worker (`Bob`, 21, 110 energy), calls `goToWork()`, returns the object.

### Task 4 — `manager()` function
Creates a Worker (`Alice`, 30, 120 energy, 100 xp, $30/hr), calls `doSomethingFun()`, returns the object.

---

## Key Takeaways

- `super()` must be called before accessing `this` in a subclass constructor
- Default parameter values keep constructors flexible and clean
- Inheritance lets subclasses reuse and extend parent behavior without rewriting logic
