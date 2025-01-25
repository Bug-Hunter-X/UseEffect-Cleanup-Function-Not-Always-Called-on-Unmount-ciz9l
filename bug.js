```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // Log the count
    return () => {
      console.log('Component unmounted'); // Cleanup function
    };
  }, [count]); // This effect depends on the 'count' state

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); 
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```