# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the dependency array.  The `bug.js` file contains the erroneous code. The `bugSolution.js` demonstrates how to fix the issue.

## Bug Description
The `useEffect` hook is designed to perform side effects after rendering. However, if the state update within `useEffect` causes a re-render, and the `useEffect` function is called again, an infinite loop can occur. In the buggy code, `setCount(count + 1)` inside the `useEffect` causes continuous updates, resulting in a performance issue or crash.

## Solution
The solution involves ensuring that the state update does not trigger an infinite loop.  One approach is to only update the state based on external factors or using techniques such as debouncing or throttling if necessary.