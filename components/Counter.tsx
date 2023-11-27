import { useState, useEffect } from 'react';
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/api/counter')
      .then(response => setCount(response.data.count))
      .catch(error => console.error(error));
  }, []);

  const increment = () => {
    axios.post('/api/counter/increment')
      .then(response => setCount(response.data.count))
      .catch(error => console.error(error));
  };

  const decrement = () => {
    axios.post('/api/counter/decrement')
      .then(response => setCount(response.data.count))
      .catch(error => console.error(error));
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={decrement}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;