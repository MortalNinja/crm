import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
const [data, setData] = useState(null);

useEffect(() => {
  fetch("/api")
  .then((res) => res.json())
  .then(res => setData(res.message))
}, []);

  return (
    <div className="CRM">
      <header className="CRM">
        <p>
          {
            !data ? "Loading..." : data
          }
        </p>
      </header>
    </div>
  );
}

export default App;
