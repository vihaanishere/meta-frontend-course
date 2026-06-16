# 🌐 JavaScript & the DOM
  
> **Topic:** DOM Manipulation, Event Handling & User Input

---

## 📖 About

This module covers how JavaScript interacts with the browser through the **Document Object Model (DOM)** — creating, selecting, and modifying HTML elements dynamically, handling user events, and capturing user input in real time.

---

## 📁 File Overview

| File | Description |
|------|-------------|
| `DOM.js` | Creating and appending HTML elements via JS; using DOM selectors |
| `eventHandling.js` | Listening to user events using `addEventListener` and inline `onclick` |
| `userInput.js` | Capturing user input via `prompt()` and live `input` field with change detection |

---

## 🔑 Concepts Covered

### 🏗️ DOM Manipulation (`DOM.js`)
- Creating elements with `document.createElement()`
- Setting text content via `.innerText`
- Adding attributes with `.setAttribute()`
- Appending elements to the page with `.appendChild()`
- **Selectors:**
  - `document.querySelector()` — first matching element
  - `document.querySelectorAll()` — all matching elements
  - `document.getElementById()` — by ID
  - `document.getElementsByClassName()` — by class

### 🖱️ Event Handling (`eventHandling.js`)
- Selecting a target element with `document.querySelector()`
- Attaching event listeners with `.addEventListener('click', handler)`
- Using inline HTML event attributes (`onclick="handleClick2()"`)

### ⌨️ User Input (`userInput.js`)
- Taking input with `prompt()` and rendering it as an `h1` on the page
- Creating an `<input>` field dynamically
- Listening to real-time changes with the `'change'` event to update the DOM

---

## 🧠 Key Takeaway

> JavaScript doesn't just run logic — it *controls the page.* The DOM is the bridge between your JS code and what the user actually sees and interacts with in the browser.

---

## 🔗 Part of My Learning Journey

Progress through the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.


