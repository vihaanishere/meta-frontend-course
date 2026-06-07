# Day 3 - Meta Frontend Developer Course

**Course Progress:** 53% through Course 2
**Date:** June 7, 2026
**Topic:** Defensive Programming & JS Utility Functions — Module 2 Complete

---

## Files Overview

### 1. `assignment.js` — Defensive JS Utility Functions

A multi-function assignment covering arrays, objects, error handling, and defensive programming patterns.

---

## Functions Implemented

### `normalizeName(value)`
Cleans up name values — returns `"Unknown"` if value is `null`, `undefined`, or trims to `""`. Otherwise returns the trimmed string.

- Uses `typeof` and `.trim()`

---

### `averageScore(scores)`
Calculates the average of a scores array rounded to 2 decimal places.

- Throws if not an array
- Returns `null` if empty array
- Uses `Array.isArray()` and `Math.round()`

---

### `buildUserSummary(user)`
Builds a clean summary object from a raw user object.

- Throws if not a non-null object
- Handles missing/invalid scores gracefully (`scoreCount: 0, avg: null`)
- Returns `{ id, name, scoreCount, avg }`
- Uses both dot and bracket notation

---

### `summarizeUsers(userArray)`
Maps `buildUserSummary` over an array of users.

- Throws if not an array
- Uses `.map()`

---

### `safeSummarizeUsers(userArray)`
Safe wrapper around `summarizeUsers` using try/catch.

- Returns `{ ok: true, data: [...] }` on success
- Returns `{ ok: false, error: "message" }` on failure

---

### `getUserDisplayNameById(userArray, id)`
Finds a user by `id` and returns their normalized name.

- Throws if `userArray` not an array
- Throws if `id` not a number
- Throws if user not found
- Uses `.find()`

---

## Concepts Covered

| Concept | Usage |
|---------|-------|
| `typeof` | Checking undefined, null edge cases |
| `null` vs `undefined` vs `""` | Handled separately with intent |
| `Array.isArray()` | Guard checks before array operations |
| `.map()` / `.find()` | Array iteration and search |
| `throw new Error()` | Custom error throwing |
| `try/catch` | Safe error handling |
| Dot & bracket notation | Both used in object access |

---

## Part C Answers

```javascript
// 1) typeof undefined = "undefined"
// 2) typeof null = "object"
// 3) "" is intentional — user exists but left it blank.
//    null/undefined means the value was never provided at all. Different intent!
```

---

## Key Takeaways

- Always validate inputs before operating on them
- `null`, `undefined`, and `""` are all falsy but mean different things conceptually
- `try/catch` prevents crashes and lets you return meaningful error info
- Breaking logic into small focused functions makes code reusable and testable
