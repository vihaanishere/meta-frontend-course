# 🔁 Spread & Rest Operators in JavaScript

> **Topic:** Spread (`...`) and Rest (`...`) Operators

---

## 📖 About

Both the spread and rest operators use the same `...` syntax but do opposite things depending on context. This file covers both in depth — destructuring, function arguments, merging arrays/objects, string spreading, and shallow object copying.

---

## 📁 File Overview

| File | Description |
|------|-------------|
| `spreadRestOperator.js` | Demonstrations of rest destructuring, rest in functions, spread for arrays/objects/strings, and object copying |

---

## 🔑 Concepts Covered

### 📦 Rest Operator
Gathers multiple elements into a single array or object.

- **Array destructuring with rest** — captures remaining elements after the first
  ```js
  const [first, ...rest] = [1, 2, 3, 4, 5, 6]
  // first → 1 | rest → [2, 3, 4, 5, 6]
  ```

- **Rest in functions** — accepts any number of arguments as an array
  ```js
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
  }
  sum(1, 2, 3, 4) // → 10
  ```

---

### 🌊 Spread Operator
Expands arrays, objects, or strings into individual elements.

- **Combining arrays**
  ```js
  const fruitAndBerries = [...fruit, ...berries]
  ```

- **Merging objects**
  ```js
  const flyingCar = { ...flying, ...car }
  ```

- **Adding elements to an array**
  ```js
  veggies = [...veggies, 'carrot', 'beetroot']
  ```

- **Spreading a string into characters**
  ```js
  const arrayOfLetters = [..."Hello"] // → ['H','e','l','l','o']
  ```

- **Shallow copying an object**
  ```js
  var car2 = { ...car1 }
  car2.speed = 201 // doesn't affect car1
  ```

---

## ⚡ Rest vs Spread — Quick Comparison

| | Rest `...` | Spread `...` |
|---|---|---|
| **What it does** | Gathers elements into one | Expands one into many |
| **Used in** | Function params, destructuring | Arrays, objects, strings |
| **Position** | Must be last | Can be anywhere |

---

## 🔗 Part of My Learning Journey

Progress through the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

**Courses completed:**
- ✅ Course 1 — Introduction to Front-End Development
