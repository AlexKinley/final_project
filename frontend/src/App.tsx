import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';

function App() {

  const [dreams, setDreams] = useState<string[] | null>(null);

  // get the dreams the first time
  useEffect(() => {
    if (dreams === null) {
      fetch('http://localhost:5000/dreams')
        .then(res => res.json())
        .then(d => setDreams(d));
    }
  });

  const [newDream, setNewDream] = useState('');

  const addDream = (newdream: string) => {
    fetch('http://localhost:5000/submit', {
      method: "POST",
      body: JSON.stringify({ newdream }),
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then(res => res.json())
      .then(d => {
        console.log(d);
        setDreams(d);
      });
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addDream(newDream);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDream(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-dream-input"
          name="text"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add Dream
        </button>
      </form>
      <ul>
        {(dreams ?? []).map((dream, idx) =>
          <li key={idx}>{dream}</li>
        )}
      </ul>

    </div>
  );
}

export default App;