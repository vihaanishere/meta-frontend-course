# 📘 Meta Front-End Developer Certificate — Course 2: Programming with JavaScript

> **Status:** ✅ Complete  
> **Certificate:** Meta Front-End Developer Professional Certificate (Coursera)  
> **Course:** Programming with JavaScript

---

## 📖 About This Course

Course 2 of the Meta Front-End Developer Professional Certificate. Covers core JavaScript concepts from fundamentals through object-oriented programming, functional programming, and testing — building a strong foundation for front-end development.

---

## 🗂️ Topics Covered

- Variables, data types, and operators
- Conditional statements and loops
- Functions, scope, and closures
- Arrays and objects
- Error handling (`try` / `catch`)
- Functional programming (`.map()`, `.filter()`, `.reduce()`)
- Recursion
- Object-Oriented Programming (constructor functions, prototypes, classes, inheritance)
- Working with JSON (`JSON.parse`, `JSON.stringify`)
- Unit testing with **Jest**

---

## 📁 File Overview

| File | Description |
|------|-------------|
| `finalCourse2Project.js` | Course 2 final project — restaurant pricing system with tax logic and discount calculation |
| `JSON.js` | Practice with `JSON.parse()` and `JSON.stringify()` for data serialization |
| `Jest.js` | Simple `addFive()` function exported as a Node module |
| `Jest.test.js` | Jest unit test verifying the `addFive()` function |

---

## 🔬 Final Project — Restaurant Pricing System

The final project simulates a basic restaurant pricing tool with two core functions:

- **`getPrices(taxBoolean)`** — Iterates through dish data and logs prices with or without 20% tax
- **`getDiscount(taxBoolean, guests)`** — Applies a $5 or $10 discount based on the number of guests

```js
getDiscount(true, 2);   // Dishes with tax + $5 discount
getDiscount(false, 10); // Dishes without tax + $10 discount
```

---

## 🧪 Running Tests

This project uses [Jest](https://jestjs.io/) for unit testing.

```bash
npm install jest --save-dev
npx jest Jest.test.js
```

---

## 🛠️ Tech Stack

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js
- **Testing:** Jest

---

## 🔗 Part of My Learning Journey

This repo is part of my progress through the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

**Courses completed:**
- ✅ Course 1 — Introduction to Front-End Development
- ✅ Course 2 — Programming with JavaScript
- 🔄 Course 3 — Version Control *(up next)*