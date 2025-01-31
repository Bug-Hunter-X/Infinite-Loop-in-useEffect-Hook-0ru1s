```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Update state only once after the initial render
    console.log("Component mounted");
  }, []);

  return <div>Count: {count}</div>;
}
```