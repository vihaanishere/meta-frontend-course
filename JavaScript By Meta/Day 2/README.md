# JavaScript Loops - Module 2 Notes

**Course Progress:** 31% through Course 2  
**Date:** June 6, 2025  
**Topic:** Loops in JavaScript

---

## Concepts Covered

### 1. For Loop
```javascript
for (var i = 0; i < 5; i++) {
    console.log(i);
}
```
- Syntax: `for(variable; condition; change)`
- Counter variable is typically `i`
- `i++` increments, `i--` decrements

---

### 2. While Loop
```javascript
var j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
```
- Counter variable declared **outside** the loop
- Condition checked before each iteration
- Counter updated **inside** the loop

---

### 3. Nested Loops
```javascript
for (var week = 1; week <= 2; week++) {
    for (var day = 1; day <= 7; day++) {
        console.log('Week ' + week + ' Day ' + day);
    }
}
```
- A loop inside another loop
- Outer loop runs once → inner loop completes fully → repeat

---

## Practice Tasks

| Task | Type | Description |
|------|------|-------------|
| 1 | `for` loop | Count 1 to 5, print "Counting completed!" |
| 2 | `while` loop | Countdown 5 to 1, print "Countdown finished!" |
| 3 | Nested `for` | Print 2 weeks × 7 days |
| 4 | Loop + `if-else` | Medal ranking for positions 1–10 |
| 5 | Loop + `switch` | Same medal output, refactored with switch |

---

## Key Takeaways

- Use `for` when you know **how many times** to iterate
- Use `while` when iteration depends on a **condition**
- Nested loops are great for **2D/grid-style** problems
- `switch` inside a loop is a clean alternative to chained `if-else`
