# 🗂️ Data Structures & Array Methods in JavaScript
 
> **Topic:** Maps, Sets, Arrays — and core iteration methods

---

## 📖 About

This module dives into JavaScript's built-in data structures beyond plain arrays — `Map` and `Set` — and covers the three most essential array iteration methods: `forEach`, `filter`, and `map`.

---

## 📁 File Overview

| File | Description |
|------|-------------|
| `workingWithDatatypes.js` | Working with arrays + `Object.keys()`, Maps, and Sets |
| `dataStructure.js` | Array methods — `forEach()`, `filter()`, and `map()` |

---

## 🔑 Concepts Covered

### 🧱 Arrays + Object.keys() (`workingWithDatatypes.js`)
Extracting keys from an object and pushing both key and value into a flat array using `forEach`:
```js
const droneKeys = Object.keys(drone)
droneKeys.forEach(function(key) {
  result.push(key, drone[key])
})
// → ['speed', 100, 'color', 'yellow']
```

---

### 🗺️ Map
An ordered collection of key-value pairs where keys can be **any type** (not just strings like in objects).
```js
let bestBoxer = new Map()
bestBoxer.set(1, "The Champion")
bestBoxer.get(1) // → "The Champion"
```

| Feature | Object | Map |
|---|---|---|
| Key types | Strings/Symbols only | Any type |
| Order guaranteed | ❌ | ✅ |
| Easy size check | ❌ | `.size` |

---

### 🎯 Set
A collection of **unique values** — duplicates are automatically removed.
```js
const uniqueFruits = new Set(['apple', 'pear', 'apple', 'plum', 'apple'])
// → Set { 'apple', 'pear', 'plum' }
```

---

### 🔄 Array Methods (`dataStructure.js`)

- **`forEach()`** — Runs a function on each element; returns nothing
  ```js
  fruit.forEach(appendIndex)
  // → "0. kiwi", "1. apple", ...
  ```

- **`filter()`** — Returns a new array with elements that pass a test
  ```js
  nums.filter(num => num > 20)
  // → [30, 40, 50, 60]
  ```

- **`map()`** — Returns a new array with each element transformed
  ```js
  nums.map(num => num / 10)
  // → [0, 1, 2, 3, 4, 5, 6]
  ```

---

## ⚡ forEach vs filter vs map — Quick Comparison

| Method | Returns | Use when |
|---|---|---|
| `forEach()` | Nothing (`undefined`) | You just need to *do* something per element |
| `filter()` | New filtered array | You want a *subset* of the array |
| `map()` | New transformed array | You want to *transform* every element |

---

## 🔗 Part of My Learning Journey

Progress through the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

**Courses completed:**
- ✅ Course 1 — Introduction to Front-End Development

