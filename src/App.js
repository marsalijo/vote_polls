import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  console.log('data:', data.length)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://polls.apiblueprint.org/questions',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.length && data.map((item, index) => (
        <div key={index}>{item.question}</div>
      ))}
    </div>
  );
}

export default App;
