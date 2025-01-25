```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const cleanup = () => {
      console.log('Component unmounted');
      setIsMounted(false);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    // This effect runs after every render
    console.log('Count:', count); // Log the count
  }, [count, isMounted]);

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