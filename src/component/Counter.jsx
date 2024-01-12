import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? Number(savedCount) : 0;
  });
  const [error, setError] = useState('');
  const [savedCounts, setSavedCounts] = useState(() => {
    const savedCountsInStorage = localStorage.getItem('savedCounts');
    return savedCountsInStorage ? JSON.parse(savedCountsInStorage) : [];
  });
  const [inputValue, setInputValue] = useState('');

  const handleSetCount = () => {
    const number = Number(inputValue);
    if (Number.isNaN(number) || number < 0) {
      setError('Please enter a positive number');
    } else {
      setCount(number);
      setError('');
    }
  };

  const handleSaveCount = () => {
    setSavedCounts([...savedCounts, count]);
  };

  // Save count and savedCounts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('count', count);
    localStorage.setItem('savedCounts', JSON.stringify(savedCounts));
  }, [count, savedCounts]);

  return (
    <div>
      <p> You clicked {count} times</p>
      <button type="submit" onClick={() => setCount(count + 1)}>Increase</button>
      <button type="submit" onClick={() => setCount(count - 1)}>Decrease</button>
      <button type="submit" onClick={() => setCount(0)}>Reset</button>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit" onClick={handleSetCount}>Set Count</button>
      {error && <p>{error}</p>}
      <button type="submit" onClick={handleSaveCount}>Save Count</button>
      <ul>
        {savedCounts.map((savedCount, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`Counter_${index}`}>
            Counter {index + 1}: {savedCount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
