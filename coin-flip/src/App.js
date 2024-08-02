import React, { useState } from 'react';
import Coin from './Coin';
import './App.css';

function App() {
  const [flips, setFlips] = useState({ heads: 0, tails: 0 });
  const [currentFlip, setCurrentFlip] = useState(null);

  function flipCoin() {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    setCurrentFlip(result);
    setFlips(flips => ({
      ...flips,
      [result]: flips[result] + 1
    }));
  }

  return (
    <div className="App">
      <h1>Coin Flip Counter</h1>
      <button onClick={flipCoin}>Flip Coin</button>
      {currentFlip && <Coin result={currentFlip} />}
      <p>Heads: {flips.heads} | Tails: {flips.tails}</p>
    </div>
  );
}

export default App;
